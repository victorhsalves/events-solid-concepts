import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";



export class LoginController {

    constructor(
        private loginUseCase: LoginUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        try {
            const token = await this.loginUseCase.execute(email, password);
            return response.status(200).json({ token: token});
        }catch(err: any) {
            return response.status(403).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}