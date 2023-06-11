import * as productModel from "./product.model";
import { Request, Response } from "express";

export async function index(req: Request, res: Response) {
  try {
    const allProducts = await productModel.getAllProducts();
    res.status(200).send(allProducts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function view(req: Request, res: Response) {
  try {
    const productId = parseInt(req.params.id);
    const product = await productModel.getProductById(productId);
    res.status(200).send(product);
  } catch (error) {}
}
