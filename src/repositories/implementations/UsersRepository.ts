import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { prisma } from '../../database/client'
import { v4 } from "uuid";
import bcrypt from 'bcrypt';
import { user } from "@prisma/client";


export class UsersRepository implements IUsersRepository {
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
                return null
            }
        } catch (err: any) {
            throw new Error(err);
        }
    }

    async save(user: User): Promise<void> {

        const salt = await bcrypt.genSalt(6);
        const hashedPwd = await bcrypt.hash(user.password, salt);

        try {
            await prisma.user.create({
                data: {
                    id: v4(),
                    name: user.name,
                    cpf: user.cpf,
                    phone: user.phone,
                    email: user.email,
                    password: hashedPwd,
                    address: user.address,
                    zip_code: user.zip_code,
                    district: user.district,
                    city: user.city,
                    state: user.state,
                    country: user.country,

                }
            })
        } catch (err: any) {
            throw new Error(err);

        }
    }

}