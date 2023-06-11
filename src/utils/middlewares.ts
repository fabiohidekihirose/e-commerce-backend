import { Request, Response, NextFunction } from "express";
import * as userModel from "../user/user.model";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: number;
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).send("User unauthorized");
  } else {
    const { id } = jwt.verify(authorization, "test123") as JwtPayload;

    const user = await userModel.getUserById(id);

    if (!user) {
      res.status(400).send("User unauthorized");
    } else {
      const { password: _, ...loggedUser } = user;

      req.user = loggedUser;

      next();
    }
  }
}
