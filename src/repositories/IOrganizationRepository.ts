import { organization } from "@prisma/client";
import { Organization } from "../entities/Organization";


export interface IOrganizationRepository {
    findByName(name: string): Promise<organization | null>;
    save(organization: Organization): Promise<void>;
}