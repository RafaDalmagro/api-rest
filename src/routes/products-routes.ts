import { Router } from "express";
import { myMiddleware } from "../middlewares/middleware.js";
import { ProductsController } from "../controllers/ProductsController.js";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get("/", myMiddleware, productsController.index);

productsRoutes.post("/", myMiddleware, productsController.create);

export { productsRoutes };
