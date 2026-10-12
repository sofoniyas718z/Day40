import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <main>
      <h1>Order Submitted!</h1>
      <p>Your details passed validation.</p>
      <p>This is a demonstration; your order has not been saved.</p>

      <Link href="/menu">Return to Menu</Link>
    </main>
  );
}