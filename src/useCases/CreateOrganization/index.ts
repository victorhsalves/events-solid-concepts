import { OrganizationRepository } from "../../repositories/implementations/OrganizationRepository";
import { CreateOrgnanizationController } from "./CreateOrganizationController";
import { CreateOrganizationUseCase } from "./CreateOrganizationUseCase";



const organizationRepository = new OrganizationRepository();

const createOrganizationUseCase = new CreateOrganizationUseCase(
    organizationRepository
);

const createOrganizationController = new CreateOrgnanizationController(
    createOrganizationUseCase
);

export { createOrganizationUseCase, createOrganizationController }