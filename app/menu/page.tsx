import Link from "next/link";
import { getDishes } from "@/lib/dishes";

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <main>
      <h1>Our Menu</h1>
      <p>Explore our delicious Ethiopian dishes.</p>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <article key={dish.id} className="dish-card">
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>{dish.price} ETB</p>
            <p>Category: {dish.category}</p>

            <Link href={`/menu/${dish.id}`}>
              View Dish
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}