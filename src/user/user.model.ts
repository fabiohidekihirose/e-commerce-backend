import { db } from "../utils/db.server";

export interface User {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  mobile: string;
  address: string;
}

export async function getUserByEmail(email: string) {
  return db.user_account.findUnique({
    where: {
      email,
    },
  });
}

export async function getUserById(id: number) {
  return db.user_account.findUnique({
    where: {
      id,
    },
  });
}

export async function createUser(payload: User) {
  return db.user_account.create({
    data: payload,
  });
}
