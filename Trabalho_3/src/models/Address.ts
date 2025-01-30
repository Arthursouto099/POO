export class Address {
    street: string;
    number: number;
    cep: number;

    constructor(street: string, number: number, cep: number ) {
        this.street = street;
        this.number = number;
        this.cep = cep
    }
}