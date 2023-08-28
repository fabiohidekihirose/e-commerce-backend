import { db } from "../utils/db.server";

interface Review {
  user_id: number;
  product_id: number;
}

export async function postReview(payload: Review) {
  return db.review.create({
    data: payload,
  });
}
