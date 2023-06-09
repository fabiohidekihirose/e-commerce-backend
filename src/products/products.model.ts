import { db } from "../utils/db.server";

interface ProductsProps {
  id: number;
  name: string;
  department_name: string;
  image: string;
  price: number;
  category_name: string;
  quantity: number;
}

export async function getAllProducts(): Promise<ProductsProps[]> {
  return db.products.findMany({
    select: {
      id: true,
      name: true,
      department_name: true,
      image: true,
      price: true,
      category_name: true,
      quantity: true,
      description: true,
    },
  });
}

export async function getProductById(
  productId: number
): Promise<ProductsProps | null> {
  return db.products.findUnique({
    select: {
      id: true,
      name: true,
      department_name: true,
      image: true,
      price: true,
      category_name: true,
      quantity: true,
      description: true,
    },
    where: {
      id: productId,
    },
  });
}
