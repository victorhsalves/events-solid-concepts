import { Request, Response } from "express";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { LoginUseCase } from "./LoginUseCase";



export class LoginController {

    constructor(
        private loginUseCase: LoginUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;
        console.log('aqui entrou', email)

        try {
            const token = await this.loginUseCase.execute(email, password);
            
            return response.status(200).cookie(
                'auth-token',
                'Bearer ' + token,
                {
                    expires: new Date(Date.now() + 50 * 60 * 1000)
                }).json({
                    auth: true,
                    token: token
                });
        }
        catch (error) {
            return response.status(403).json({
                message: ErrorHandler(error) || 'Unexpected Error'
            })
        }
    }
}