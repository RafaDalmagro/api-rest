import { Request, Response, NextFunction } from "express";

export function myMiddleware(req: Request, res: Response, next: NextFunction) {
	req.user_id = "1234567890";

	
    console.log("Passou pelo middleware");
    return next();
}
