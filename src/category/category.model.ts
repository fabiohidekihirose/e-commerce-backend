import { db } from "../utils/db.server";

interface Categories {
  id: number;
  category: string;
  label: string;
}

export async function getAllCategories(): Promise<Categories[]> {
  return db.category.findMany({
    select: {
      id: true,
      category: true,
      label: true,
    },
  });
}
