import { Response, Request } from "express";
import * as departmentsModel from "./department.model";

export async function index(req: Request, res: Response) {
  try {
    const allDepartments = await departmentsModel.getAllDepartments();
    res.status(200).send(allDepartments);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
