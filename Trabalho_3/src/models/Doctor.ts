import {Person} from './Person'
import { Specialization } from './Specialization';
import { Patient } from './Patient';
import { Address } from './Address';



export  class Doctor extends Person {
    private crm: number;
    specialization: Specialization;
    workload: number;
    patients: Patient[] = [];

    constructor(name: string, cpf: string, address: Address, number: number, crm: number, specialization: Specialization, workload: number) {
        super(name, cpf, address, number);
        this.workload = workload;
        this.crm = crm;
        this.specialization = specialization;
    }   

    public getCrm(): number {
        return this.crm
    }

    public setCrm(crm: number): void {
        this.crm = crm
    }
 
}