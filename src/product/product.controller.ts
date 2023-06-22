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
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function search(req: Request, res: Response) {
  try {
    const searchWord = req.params.searchWord;
    const products = await productModel.getProductsBySearchWord(searchWord);
    res.status(200).send(products);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function filter(req: Request, res: Response) {
  try {
    const filter = req.params.department;
    const filteredProducts = await productModel.getProductsByDepartment(filter);
    res.status(200).send(filteredProducts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function sales(req: Request, res: Response) {
  try {
    const salesProducts = await productModel.getProductsWithDiscount();
    res.status(200).send(salesProducts);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
