"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestBulkPurchase = exports.notifyVerificationChange = exports.createLivestockPassport = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const firestore_2 = require("firebase-functions/v2/firestore");
const https_1 = require("firebase-functions/v2/https");
(0, app_1.initializeApp)();
const db = (0, firestore_1.getFirestore)();
exports.createLivestockPassport = (0, firestore_2.onDocumentCreated)("livestock/{livestockId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot)
        return;
    const animalId = `EAF-${snapshot.id.slice(0, 8).toUpperCase()}`;
    await snapshot.ref.set({
        animalId,
        qrCodeUrl: `https://agro-afrik.com/passport/${animalId}`,
        healthScore: snapshot.data().healthScore ?? 75,
        verificationStatus: snapshot.data().verificationStatus ?? "pending",
        updatedAt: new Date(),
    }, { merge: true });
});
exports.notifyVerificationChange = (0, firestore_2.onDocumentUpdated)("livestock/{livestockId}", async (event) => {
    const before = event.data?.before.data();
    const after = event.data?.after.data();
    if (!before || !after || before.verificationStatus === after.verificationStatus)
        return;
    await db.collection("notifications").add({
        userId: after.currentOwnerId,
        type: "verification",
        title: "Livestock verification updated",
        body: `Animal ${after.animalId} is now ${after.verificationStatus}.`,
        read: false,
        createdAt: new Date(),
    });
});
exports.requestBulkPurchase = (0, https_1.onCall)(async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError("unauthenticated", "Sign in to request bulk purchases.");
    }
    const { listingIds, sellerId, amount } = request.data;
    if (!Array.isArray(listingIds) || !sellerId || !amount) {
        throw new https_1.HttpsError("invalid-argument", "listingIds, sellerId, and amount are required.");
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
//# sourceMappingURL=index.js.map