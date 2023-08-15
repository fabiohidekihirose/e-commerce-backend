import { db } from "../utils/db.server";

export function getAllFavorites(user_id: number) {
  return db.favorite.findMany({
    where: {
      user_id,
    },
  });
}
