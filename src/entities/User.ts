import { uuid } from 'uuidv4';

export class User {
    
    public readonly id: string;

    
	public name: string;
    public cpf: string;
    public phone: string;
    public email: string;
    public password: string;
	public address: string;
	public zip_code: string;
	public district: string;
	public city: string;
	public state: string;
	public country: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}