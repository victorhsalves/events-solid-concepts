import { Request, Response } from "express";
import { CreateOrganizationUseCase } from "./CreateOrganizationUseCase";



export class CreateOrgnanizationController {

    constructor (
        private createOrganizationUseCase: CreateOrganizationUseCase,
    ) {}
    

    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        try {
            await this.createOrganizationUseCase.execute({
                name,
                description
            })
            return response.status(201).send();
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }

    }
}