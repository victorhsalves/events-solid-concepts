import { user } from "@prisma/client";
import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<user>;
    save(user: User): Promise<void>;
}