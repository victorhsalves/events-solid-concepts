import { organization } from "@prisma/client";
import { IOrganizationRepository } from "../IOrganizationRepository";
import { prisma } from "../../database/client";
import { v4 } from "uuid";
import { Organization } from "../../entities/Organization";

export class OrganizationRepository implements IOrganizationRepository {
    async findByName(name: string): Promise<organization | null> {
        try {
            const organization = await prisma.organization.findFirst({
                where: {
                    name: name
                }
            });

            if (organization) {
                return organization;
            } else {
                return null;
            }
        } catch (err: any) {
            throw new Error(err);
        }
    }

    async save(organization: Organization): Promise<void> {

        try {
            await prisma.organization.create({
                data: {
                    id: v4(),
                    name: organization.name,
                    description: organization.description
                }
            })
        } catch (err: any) {
            throw new Error(err);
        }
    }

}