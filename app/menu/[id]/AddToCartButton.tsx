"use client";

import useCartStore from "@/lib/cart-store";

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
};

export default function AddToCartButton({
  id,
  name,
  price,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
    });
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
}