import { db } from "../utils/db.server";

export interface ProductsProps {
  id: number;
  name: string;
  department_name: string;
  image: string;
  price: number;
  category_name: string;
  description: string;
  quantity: number;
  discount: number;
  review: {}[];
  inCart?: number;
}

export async function getAllProducts(): Promise<ProductsProps[]> {
  return db.product.findMany({
    select: {
      id: true,
      name: true,
      department_name: true,
      image: true,
      price: true,
      category_name: true,
      quantity: true,
      description: true,
      discount: true,
      review: {
        select: {
          rating: true,
        },
      },
    },
  });
}

export async function getProductById(
  productId: number
): Promise<ProductsProps | null> {
  return db.product.findUnique({
    select: {
      id: true,
      name: true,
      department_name: true,
      image: true,
      price: true,
      category_name: true,
      quantity: true,
      description: true,
      discount: true,
      review: {
        select: {
          user: {
            select: {
              first_name: true,
            },
          },
          comment: true,
          rating: true,
        },
      },
    },
    where: {
      id: productId,
    },
  });
}

export async function getProductsBySearchWord(searchWord: string) {
  return db.product.findMany({
    select: {
      id: true,
      name: true,
      department_name: true,
      image: true,
      price: true,
      category_name: true,
      quantity: true,
      description: true,
      discount: true,
      review: {
        select: {
          rating: true,
        },
      },
    },
    where: {
      name: {
        search: searchWord,
      },
    },
  });
}

export async function getProductsByDepartment(department: string) {
  return db.department.findMany({
    select: {
      products: {
        select: {
          id: true,
          name: true,
          department_name: true,
          image: true,
          price: true,
          category_name: true,
          quantity: true,
          description: true,
          discount: true,
          review: {
            select: {
              rating: true,
            },
          },
        },
      },
    },
    where: {
      department,
    },
  });
}

export async function getProductsWithDiscount() {
  return db.product.findMany({
    select: {
      id: true,
      name: true,
      department_name: true,
      image: true,
      price: true,
      category_name: true,
      quantity: true,
      description: true,
      discount: true,
      review: {
        select: {
          rating: true,
        },
      },
    },
    where: {
      discount: { not: 0 },
    },
  });
}
