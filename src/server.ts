import express, { Request, Response } from "express";
import { routes } from "./routes/index.js";
import { AppError } from "./utils/appError.js";
const app = express();
const PORT = 3333;

app.use(express.json());

app.use(routes);

app.use((error: any, req: Request, res: Response, _: any) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
        });
    }

    return res.status(500).json({
        message: "Internal Server Error",
    });
});

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);
