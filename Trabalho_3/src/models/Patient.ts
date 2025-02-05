import { Person } from "../abstracts/Person";
import { Treatment } from "./Treatment";
import { Address } from "./Address";
import { Sector } from "../abstracts/Sector";
import { Doctor } from "./Doctor";


export class Patient extends Person {
    degree: 'serious' | 'moderate' | 'mild' | string ;
    treatments: Treatment[] = [];
    hospitalStretcher: true | false = false;
    description: string;
    sector: null | Sector = null;
    doctor: null | Doctor = null



    constructor(name: string, cpf: string, address: Address, number: number, degree: 'serious' | 'moderate' | 'mild', description: string) {
        super(name, cpf, address, number);
        this.degree = degree;
        this.description = description;
    }


    getTreatments(): Array<Treatment> {
        return this.treatments;
    }
 

;
}
