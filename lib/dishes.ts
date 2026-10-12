import type { Dish } from "./types";
import { cacheLife } from "next/cache";

export async function getDishes(): Promise<Dish[]> {
  "use cache";
  cacheLife("hours");

  return [
  {
    id: "kitfo",
    name: "Kitfo",
    description: "A traditional Ethiopian minced beef dish.",
    price: 650,
    category: "Traditional",
    image: "/images/kitfo.jpg",
  },
  {
    id: "doro-wat",
    name: "Doro Wat",
    description: "Spicy Ethiopian chicken stew served with injera.",
    price: 550,
    category: "Traditional",
    image: "/images/doro-wat.jpg",
  },
  {
    id: "shiro",
    name: "Shiro",
    description: "A flavorful Ethiopian chickpea stew.",
    price: 250,
    category: "Vegetarian",
    image: "/images/shiro.jpg",
  },
  {
    id: "beyaynetu",
    name: "Beyaynetu",
    description: "A colorful assortment of Ethiopian vegetarian dishes.",
    price: 400,
    category: "Vegetarian",
    image: "/images/beyaynetu.jpg",
  },
];
}