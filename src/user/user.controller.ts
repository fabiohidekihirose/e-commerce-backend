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
      res.status(200).send(newUser);
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
    } else {
      const verifyPassword = await bcrypt.compare(password, user.password);

      if (!verifyPassword) {
        res.status(400).send("Password invalid");
      }

      const token = jwt.sign({ id: user.id }, "test123", {
        expiresIn: "8h",
      });

      const { password: _, ...userLogin } = user;

      res.status(200).send({ user: userLogin, token });
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
