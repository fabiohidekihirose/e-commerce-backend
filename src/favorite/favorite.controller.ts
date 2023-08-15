import { Request, Response } from "express";
import * as favoriteModel from "./favorite.model";

export async function index(req: Request, res: Response) {
  try {
    const user_id = parseInt(req.params.id);
    const allFavorites = await favoriteModel.getAllFavorites(user_id);

    res.status(200).send(allFavorites);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
}
