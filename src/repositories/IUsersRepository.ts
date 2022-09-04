import { user } from "@prisma/client";
import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<user | null>;
    save(user: User): Promise<void>;
}