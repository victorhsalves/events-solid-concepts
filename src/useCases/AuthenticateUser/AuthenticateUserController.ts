import { NextFunction, Request, Response } from "express"
import { ErrorHandler } from "../../utils/ErrorHandler";
import jwt from "jsonwebtoken";





export class AuthenticateUserController {
    async handle(request: Request, response: Response, next: NextFunction) {

        const token = <string>request.headers.authorization;
        console.log(token);

        if (token == '') return response.status(403).json({
            auth: false,
            message: 'Token não fornecido!'
        })
        console.log(token)

        try {
            var decodedToken = jwt.verify(token.substring(7), String(process.env.SECRET));

            response.status(201);
            request.body.decodedToken = decodedToken;
            next();
        }
        catch (error) {
            return response.status(403).json({
                message: ErrorHandler(error) || 'Unexpected Error'
            })
        }
    }
}
