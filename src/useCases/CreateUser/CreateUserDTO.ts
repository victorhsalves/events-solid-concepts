export interface ICreateUserRequestDTO {
    name: string;
    cpf: string;
    phone: string;
    email: string;
    password: string;
	address: string;
	zip_code: string;
	district: string;
	city: string;
	state: string;
	country: string;
}