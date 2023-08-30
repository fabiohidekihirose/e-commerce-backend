import { db } from "../utils/db.server";

interface Review {
  user_id: number;
  product_id: number;
  comment: string;
  rating: number;
}

export async function create(payload: Review) {
  return db.review.create({
    data: payload,
  });
}

export async function getAllByUser(user_id: number) {
  return db.review.findMany({
    where: {
      user_id,
    },
  });
}

export async function getAllByProduct(product_id: number) {
  return db.review.findMany({
    where: {
      product_id,
    },
  });
}
