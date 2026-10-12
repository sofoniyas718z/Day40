"use client";

import { useActionState } from "react";
import { placeOrder } from "./actions";
import type { CheckoutState } from "./actions";
import useCartStore from "@/lib/cart-store";

const initialState: CheckoutState = {};

export function CheckoutForm() {
  const items = useCartStore((state) => state.items);

  const [state, formAction, pending] = useActionState(
    placeOrder,
    initialState
  );

  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="cart"
        value={JSON.stringify(items)}
      />

      <div>
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" required />
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" required />
      </div>

      <div>
        <label htmlFor="address">Delivery Address</label>
        <textarea id="address" name="address" required />
      </div>

      {state.error && <p role="alert">{state.error}</p>}

      <button type="submit" disabled={pending}>
        {pending ? "Processing..." : "Place Order"}
      </button>
    </form>
  );
}