import * as productModel from "./products.model";
import { Request, Response } from "express";

export async function index(req: Request, res: Response) {
  try {
    const allProducts = await productModel.getAllProducts();
    res.status(200).send(allProducts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
