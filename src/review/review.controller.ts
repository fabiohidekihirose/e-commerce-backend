import { Request, Response } from "express";
import * as reviewModel from "./review.model";

export async function save(req: Request, res: Response) {
  try {
    const newReview = req.body;
    await reviewModel.create(newReview);
    res.status(200).send({});
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function indexUser(req: Request, res: Response) {
  try {
    const user_id = parseInt(req.params.userId);

    const reviewsByUser = await reviewModel.getAllByUser(user_id);
    res.status(200).send(reviewsByUser);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function indexProduct(req: Request, res: Response) {
  try {
    const product_id = parseInt(req.params.productId);

    const reviewsByProduct = await reviewModel.getAllByProduct(product_id);
    res.status(200).send(reviewsByProduct);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
