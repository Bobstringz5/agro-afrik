"use server";

import { revalidatePath } from "next/cache";

export async function submitLead(formData: FormData): Promise<void> {
  const payload = {
    type: String(formData.get("type") ?? "General Inquiry"),
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim().toLowerCase(),
    organization: String(formData.get("organization") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    createdAt: new Date().toISOString(),
    source: "eco-afrik-website",
  };

  if (!payload.name || !payload.email) {
    throw new Error("Name and email are required.");
  }

  // Production hookup: write payload to Firestore collection `investor_leads`,
  // `partners`, `farmers`, `buyers`, or `waitlist` based on payload.type.
  console.info("ECO-AFRIK lead captured", payload);
  revalidatePath("/");
}
