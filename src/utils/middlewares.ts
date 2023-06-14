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
    return;
  } else {
    const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;

    if (SECRET_KEY) {
      const { id } = jwt.verify(authorization, SECRET_KEY) as JwtPayload;

      const user = await userModel.getUserById(id);

      if (!user) {
        res.status(400).send("User unauthorized");
        return;
      } else {
        const { password: _, ...loggedUser } = user;

        req.user = loggedUser;

        next();
      }
    }
  }
}
