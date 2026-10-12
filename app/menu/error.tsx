"use client";

type MenuErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function MenuError({
  error,
  reset,
}: MenuErrorProps) {
  return (
    <main>
      <h1>Something went wrong!</h1>
      <p>We couldn't load the menu.</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}