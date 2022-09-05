import { ILoginRepository } from "../../repositories/ILoginRepository";
import jwt from "jsonwebtoken";
import { env } from 'process';



export class LoginUseCase {

    constructor (
        private loginRepository: ILoginRepository,
    ) { }


    async execute(email: string, password: string) {
        const userExists = await this.loginRepository.findByEmail(email);

        if (userExists) {
            if (userExists.password === password) {
                var secret: jwt.Secret = String(env.SECRET);

                const token = jwt.sign(
                    {
                        name: userExists.name,
                        email: userExists.email,
                        cpf: userExists.cpf,
                        country: userExists.country
                    },
                    secret, {
                        expiresIn: '1 day'
                    }
                );
                return token;
            }
        }
        throw new Error('Credenciais inválidas!');
    }
}