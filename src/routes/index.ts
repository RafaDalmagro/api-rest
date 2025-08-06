import { productsRoutes } from "./products-routes.js";
import { Router } from "express";

const routes = Router();

routes.use("/products", productsRoutes);

export { routes };