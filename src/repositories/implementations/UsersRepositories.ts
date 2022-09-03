import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";
import { prisma } from '../../database/client'
import { uuid } from "uuidv4";
import bcrypt from 'bcrypt';
import { user } from "@prisma/client";


export class UsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<user> {
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            })
            if (user) {
                return user;
            } else {
                throw new Error('Usuário não encontrado!');
            }
        }catch(err: any) {
            throw new Error(err);
        }
    }

    async save(user: User): Promise<void> {
        console.log('salvando')

        const existing_user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        cpf: user.cpf,
                    },
                    {
                        email: user.email
                    }
                ]
            }
        })

        if (existing_user) {
            throw new Error('Usuário já cadastrado!')
        }

        const salt = await bcrypt.genSalt(6);
        const hashedPwd = await bcrypt.hash(user.password, salt);
        
        try {
            await prisma.user.create({
                data: {
                    id: uuid(),
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
        }catch(err: any) {
            throw new Error(err);
            
        }
        throw new Error("Method not implemented.");
    }

}