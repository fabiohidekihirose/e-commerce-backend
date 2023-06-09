import * as categoriesModel from "./categories.model";
import { Request, Response } from "express";

export async function index(req: Request, res: Response) {
  try {
    const allCategories = await categoriesModel.getAllCategories();
    res.status(200).send(allCategories);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
