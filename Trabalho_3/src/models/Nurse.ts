import { Person } from "./Person";
import { Specialization } from "./Specialization";
import { Patient } from "./Patient";
import { Address } from "./Address";

export class Nurse extends Person {
    private coren: number ;
    specialization: Specialization
    workLoad: number;
    patients: Patient[] = [];
    
    constructor(name: string, cpf: string, address: Address, number: number, coren: number, specialization: Specialization, workLoad: number) {
        super(name, cpf, address, number)
        this.coren = coren
        this.specialization = specialization
        this.workLoad = workLoad
    }


    getCoren(): number {
        return this.coren
    }

    setCoren(coren: number): void {
        this.coren = coren
    }



}