import { Address } from "../models/Address";

export abstract class Person {
    name: string;
    cpf: string;
    private address: Address;
    number: number;


    constructor(name: string, cpf: string, address: Address, number: number) {
        this.name = name;
        this.cpf = cpf;
        this.address = address;
        this.number = number;
    }

    public getAdress(): Address {
        return this.address;
    }

    public setAdress(address: Address): void {
        this.address = address;
    }
};
