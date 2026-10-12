"use server";

import { redirect } from "next/navigation";

export type CheckoutState = {
  error?: string;
  success?: boolean;
};

export async function placeOrder(
  _previousState: CheckoutState,
  formData: FormData
): Promise<CheckoutState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const address = String(formData.get("address") ?? "").trim();

  if (!name || !phone || !address) {
    return { error: "Please fill in all fields." };
  }

  if (!/^\+?[\d\s-]{9,15}$/.test(phone)) {
    return { error: "Please enter a valid phone number." };
  }

  redirect("/checkout/success");
}