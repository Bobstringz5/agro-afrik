import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { onDocumentCreated, onDocumentUpdated } from "firebase-functions/v2/firestore";
import { onCall, HttpsError } from "firebase-functions/v2/https";

initializeApp();

const db = getFirestore();

export const createLivestockPassport = onDocumentCreated("livestock/{livestockId}", async (event) => {
  const snapshot = event.data;
  if (!snapshot) return;

  const animalId = `EAF-${snapshot.id.slice(0, 8).toUpperCase()}`;
  await snapshot.ref.set(
    {
      animalId,
      qrCodeUrl: `https://eco-afrik.com/passport/${animalId}`,
      healthScore: snapshot.data().healthScore ?? 75,
      verificationStatus: snapshot.data().verificationStatus ?? "pending",
      updatedAt: new Date(),
    },
    { merge: true },
  );
});

export const notifyVerificationChange = onDocumentUpdated("livestock/{livestockId}", async (event) => {
  const before = event.data?.before.data();
  const after = event.data?.after.data();
  if (!before || !after || before.verificationStatus === after.verificationStatus) return;

  await db.collection("notifications").add({
    userId: after.currentOwnerId,
    type: "verification",
    title: "Livestock verification updated",
    body: `Animal ${after.animalId} is now ${after.verificationStatus}.`,
    read: false,
    createdAt: new Date(),
  });
});

export const requestBulkPurchase = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError("unauthenticated", "Sign in to request bulk purchases.");
  }

  const { listingIds, sellerId, amount } = request.data;
  if (!Array.isArray(listingIds) || !sellerId || !amount) {
    throw new HttpsError("invalid-argument", "listingIds, sellerId, and amount are required.");
  }

  const order = await db.collection("orders").add({
    buyerId: request.auth.uid,
    sellerId,
    listingIds,
    amount,
    status: "requested",
    createdAt: new Date(),
  });

  return { orderId: order.id };
});
