import { db } from "../utils/db.server";

interface Products {
  id: number;
  name: string;
  department_name: string;
  image: string;
  price: number;
  category_name: string;
  quantity: number;
}

export async function getAllProducts(): Promise<Products[]> {
  return db.products.findMany({
    select: {
      id: true,
      name: true,
      department_name: true,
      image: true,
      price: true,
      category_name: true,
      quantity: true,
    },
  });
}
