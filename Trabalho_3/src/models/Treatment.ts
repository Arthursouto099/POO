import { Doctor } from "./Doctor";
import { Nurse } from "./Nurse";
import { Patient } from "./Patient";
import { Sector } from "../abstracts/Sector";


export class Treatment {
    doctor: Doctor;
    description: string;
    nurse: Nurse;
    patient: Patient;
    medicaments: String[] = [];


    constructor(doctor: Doctor, description: string, nurse: Nurse, patient: Patient) {
        this.doctor = doctor;
        this.description = description;
        this.nurse = nurse;
        this.patient = patient;
        this.patient.treatments.push(this);
    }

    public addMedicament(medicament: string) {
        this.medicaments.push(medicament)
    }


   
    


}