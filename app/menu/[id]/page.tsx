import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDishes } from "@/lib/dishes";
import AddToCartButton from "./AddToCartButton";

type DishPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const dishes = await getDishes();

  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default function DishPage({ params }: DishPageProps) {
  return (
    <Suspense fallback={<p>Loading dish details...</p>}>
      <DishDetails params={params} />
    </Suspense>
  );
}

async function DishDetails({ params }: DishPageProps) {
  const { id } = await params;
  const dishes = await getDishes();
  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) {
    notFound();
  }

  return (
    <main>
      <Link href="/menu">← Back to Menu</Link>

      <h1>{dish.name}</h1>
      <p>{dish.description}</p>
      <h2>{dish.price} ETB</h2>
      <p>Category: {dish.category}</p>

      <AddToCartButton
        id={dish.id}
        name={dish.name}
        price={dish.price}
      />
    </main>
  );
}