import { Request, Response } from "express";
import { AppError } from "../utils/appError.js";
class ProductsController {
    /**
     * index - GET para listar varios produtos
     * show - GET para listar um unico produto
     * create - POST para criar um produto
     * update - PUT para atualizar um produto
     * delete - DELETE para remover um produto
     */

    index(req: Request, res: Response) {
        const { page, limit } = req.query;

        res.send(`Página: ${page}, Limite: ${limit}`);
    }
    create(req: Request, res: Response) {
        const { name, price } = req.body;

        // throw new Error("Erro ao Criar Produto");
        // throw new AppError("Erro ao criar produto");
        res.status(201).json({ name, price, user_id: req.user_id });
    }
}

export { ProductsController };
