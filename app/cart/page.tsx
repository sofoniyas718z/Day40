"use client";

import Link from "next/link";
import useCartStore from "@/lib/cart-store";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const addItem = useCartStore((state) => state.addItem);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main>
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <article key={item.id} className="dish-card">
              <h2>{item.name}</h2>
              <p>Price: {item.price} ETB</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: {item.price * item.quantity} ETB</p>

              <button onClick={() => decreaseItem(item.id)}>
                −
              </button>

              <button
                onClick={() => addItem({ ...item })}
              >
                +
              </button>

              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </article>
          ))}

          <h2>Total: {total} ETB</h2>

          <button onClick={clearCart}>Clear Cart</button>

          <p>
            <Link href="/checkout">Proceed to Checkout</Link>
          </p>
        </>
      )}

      <Link href="/menu">Continue Shopping</Link>
    </main>
  );
}