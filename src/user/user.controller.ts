import { Request, Response } from "express";
import * as userModel from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function create(req: Request, res: Response) {
  try {
    const { email, first_name, last_name, password, mobile, address } =
      req.body;

    const userExists = await userModel.getUserByEmail(email);

    if (userExists) {
      res.status(400).send("Email is already used");
      return;
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = {
        email,
        first_name,
        last_name,
        password: hashPassword,
        mobile,
        address,
      };

      await userModel.createUser(newUser);

      const { password: _, ...user } = newUser;

      res.status(200).send(user);
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      res.status(400).send("Email invalid");
      return;
    } else {
      const verifyPassword = await bcrypt.compare(password, user.password);

      if (!verifyPassword) {
        res.status(400).send("Password invalid");
        return;
      }

      const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
      const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

      if (ACCESS_TOKEN_SECRET && REFRESH_TOKEN_SECRET) {
        const accessToken = jwt.sign({ id: user.id }, ACCESS_TOKEN_SECRET);
        const refreshToken = jwt.sign({ id: user.id }, REFRESH_TOKEN_SECRET);

        res.cookie("token", refreshToken, {
          httpOnly: true,
        });

        res.status(200).send({ id: user.id, accessToken });
      }
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}

export async function getProfile(req: Request, res: Response) {
  try {
    res.status(200).send(req.user);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}
