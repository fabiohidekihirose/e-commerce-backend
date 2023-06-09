import { db } from "../utils/db.server";

interface Departments {
  label: string;
  image: string;
  department: string;
  id: number;
}

export async function getAllDepartments(): Promise<Departments[]> {
  return db.departments.findMany({
    select: {
      label: true,
      image: true,
      department: true,
      id: true,
    },
  });
}
