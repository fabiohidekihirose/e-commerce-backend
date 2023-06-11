import express, { Express, Request, Response } from "express";
import * as departmentsController from "./department/department.controller";
import * as categoriesController from "./category/category.controller";
import * as productsController from "./product/product.controller";
import * as userController from "./user/user.controller";
import { authMiddleware } from "./utils/middlewares";
import cors from "cors";

const server: Express = express();

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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

const serverEndpoints = () => {
  server.post("/users", userController.create);
  server.post("/login", userController.login);
  server.get("/profile", authMiddleware, userController.getProfile);

  server.get("/products", productsController.index);
  server.get("/products/:id", productsController.view);

  server.get("/departments", departmentsController.index);

  server.get("/categories", categoriesController.index);

  return server;
};

export { serverEndpoints };
