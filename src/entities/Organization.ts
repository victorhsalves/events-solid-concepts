import { v4 } from "uuid";


export class Organization {
    public readonly id: string;

    public name: string;
    public description: string;

    constructor(props: Omit<Organization, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = v4();
        }
    }
}