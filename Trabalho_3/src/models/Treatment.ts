import { Doctor } from "./Doctor";
import { Nurse } from "./Nurse";
import { Patient } from "./Patient";


export class Tratament {
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
        this.addPatientInDoctorList(this.doctor, this.patient);
        this.addPatienInNurseList(this.nurse, this.patient);
        this.patient.treatments.push(this);
    }

    public addMedicament(medicament: string) {
        this.medicaments.push(medicament)
    }


    private addPatientInDoctorList(doctor: Doctor, patient: Patient): void {
        doctor.patients.push(patient);
    }

    private addPatienInNurseList(nurse: Nurse, patient: Patient) {
        nurse.patients.push(patient)
    }
    


}