import { user } from "@prisma/client";


export interface ILoginRepository {
    findByEmail(email: string): Promise<user | null>;
}