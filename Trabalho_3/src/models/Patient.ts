import { Person } from "./Person";
import { Tratament } from "./Treatment";
import { Address } from "./Address";


export class Patient extends Person {
    degree: 'serious' | 'moderate' | 'mild' ;
    treatments: Tratament[] = [];
    hospitalStretcher: true | false;



    constructor(name: string, cpf: string, address: Address, number: number, degree: 'serious' | 'moderate' | 'mild' ) {
        super(name, cpf, address, number);
        this.degree = degree
    }


;
}
