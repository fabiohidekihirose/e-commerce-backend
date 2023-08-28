import { Request, Response } from "express";
import * as reviewModel from "./review.model";

export async function create(req: Request, res: Response) {
  try {
    const newReview = req.body;
    await reviewModel.postReview(newReview);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
