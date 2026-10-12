import { NextResponse } from "next/server";
import { getDishes } from "@/lib/dishes";

export async function GET() {
  try {
    const dishes = await getDishes();

    return NextResponse.json(dishes, {
      status: 200,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load dishes." },
      { status: 500 }
    );
  }
}