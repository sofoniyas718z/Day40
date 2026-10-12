import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Addis Eats",
  description: "Discover and order delicious Ethiopian food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">🍽️ Addis Eats</Link>

          <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/menu">Menu</Link>
            {" | "}
            <Link href="/cart">Cart</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}