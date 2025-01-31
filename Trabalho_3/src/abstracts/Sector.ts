import { Equipaments } from "../models/Equipaments";
import { Doctor } from "../models/Doctor";
import { Nurse } from "../models/Nurse";
import { Patient } from "../models/Patient";


export abstract class Sector {  
    equipaments: Equipaments[] = [];
    doctors: Doctor[] = [];
    nurses: Nurse[] = [];
    patients: Patient[] = [];    
    nameSectorSpecialty: string;

    constructor(name: string) {
        this.nameSectorSpecialty = name + ' ' + "Sector"
    }

    public addEquipament(equipament: Equipaments): void {
        this.equipaments.push(equipament);
    }

    public addDoctor(doctor: Doctor): void {
        this.doctors.push(doctor);
    }

    public addNurse(nurse: Nurse): void {
        this.nurses.push(nurse);
    }

    public addPatient(patient: Patient): void {
        this.patients.push(patient);
    } 

    public getPatientHistoric(patient: Patient): void {
        console.log(patient.getTreatments())
    }
 
}


