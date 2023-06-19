import express, { Express, Request, Response } from "express";
import * as departmentsController from "./department/department.controller";
import * as categoriesController from "./category/category.controller";
import * as productsController from "./product/product.controller";
import * as userController from "./user/user.controller";
import { authMiddleware } from "./utils/middlewares";
import cookieParser from "cookie-parser";
import cors from "cors";

const server: Express = express();

server.use(cors());

server.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://home-decor-fabiohidekihirose.vercel.app/",
  ];
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, DELETE, PUT, PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

server.use(express.json());
server.use(cookieParser());

const serverEndpoints = () => {
  server.post("/users/sign-up", userController.create);
  server.post("/login", userController.login);
  server.get("/profile", authMiddleware, userController.getProfile);

  server.get("/products", productsController.index);
  server.get("/products/:id", productsController.view);
  server.get("/products/departments/:department", productsController.filter);
  server.get("/products/search/:searchWord", productsController.search);

  server.get("/departments", departmentsController.index);

  server.get("/categories", categoriesController.index);

  return server;
};

export { serverEndpoints };
