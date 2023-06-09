import express, { Express, Request, Response } from "express";
import * as departmentsController from "./departments/departments.controller";
import * as categoriesController from "./categories/categories.controller";
import * as productsController from "./products/products.controller";
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
  server.get("/products", productsController.index);
  server.get("/departments", departmentsController.index);
  server.get("/categories", categoriesController.index);

  return server;
};

export { serverEndpoints };
