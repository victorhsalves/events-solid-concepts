import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) { }

    async handle(request: Request, response: Response) {
        const { name, email, password, cpf, phone, address, zip_code, district, city, state, country } = request.body;

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password,
                cpf,
                phone,
                address,
                zip_code,
                district,
                city,
                state,
                country
            })
            return response.status(201).send();
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}