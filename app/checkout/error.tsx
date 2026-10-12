"use client";

type CheckoutErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function CheckoutError({
  error,
  reset,
}: CheckoutErrorProps) {
  return (
    <main>
      <h1>Checkout Error</h1>
      <p>Something went wrong while loading checkout.</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}