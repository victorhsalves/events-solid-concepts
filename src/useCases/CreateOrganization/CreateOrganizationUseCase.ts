import { IOrganizationRepository } from "../../repositories/IOrganizationRepository";
import { ICreateOrganizationRequestDTO } from "./CreateOrganizationDTO";
import { organization } from "@prisma/client";
import { Organization } from "../../entities/Organization";



export class CreateOrganizationUseCase {

    constructor(
        private organizationRepository: IOrganizationRepository,
    ) { }


    async execute(data: ICreateOrganizationRequestDTO) {

        const orgAlreadyExists = await this.organizationRepository.findByName(data.name);

        if (!orgAlreadyExists) {
            const organization = new Organization(data);

            await this.organizationRepository.save(organization).then(() => {
                console.log('Organização criada!');
            }).catch((err: any) => {
                console.log(err);
                throw new Error('Erro ao criar organização! Erro: ' + err.message);
            });
        } else {
            throw new Error('Organização com esse nome já existe!');
        }
    }
}