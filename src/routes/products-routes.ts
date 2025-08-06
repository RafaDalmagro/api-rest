import { Router } from "express";
import { myMiddleware } from "../middlewares/middleware.js";

const productsRoutes = Router();

productsRoutes.get("/", (req, res) => {
    const { page, limit } = req.query;

    res.status(203).send(`Página: ${page}, Limite: ${limit}`);
});

productsRoutes.post("/", myMiddleware, (req, res) => {
    const { name, price } = req.body;
    // res.send(`Nome: ${name}, Preço: ${price}`);
    res.json({ name, price, user_id: req.user_id });
});

export { productsRoutes };
