import { user } from "@prisma/client";
import { prisma } from "../../database/client";
import { ILoginRepository } from "../ILoginRepository";




export class LoginRepository implements ILoginRepository {
    async findByEmail(email: string): Promise<user | null> {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            })

            if (user) {
                return user;
            } else {
                return null;
            }
        } catch (err: any) {
            throw new Error(err);
        }
    }
}