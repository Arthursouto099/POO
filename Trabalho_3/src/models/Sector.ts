import { Equipaments } from "./Equipaments";
import { Doctor } from "./Doctor";
import { Nurse } from "./Nurse";
import { Patient } from "./Patient";


export abstract class Sector {  
    equipaments: Equipaments[] = [];
    doctors: Doctor[] = [];
    nurses: Nurse[] = [];
    patients: Patient[] = []
    
}