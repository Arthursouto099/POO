// class Emergency{doctor: Doctor; nurse:Nurse} 00000000000
    
// class ICU{} //intensive care unit 0000000000000000000000

// class SurgicalCenter{} 0000000000000000

// class Infirmary{} 000000000000000

// class Pediatrics{}

// class Maternity{}

// class Oncology{}

// class Orthopedics{}

// class Cardiology{}

// class Neurology{}

// class Radiology{}

// class CAL{} //clinical analysis laboratory 0000000000000000

// class physiotherapy{}

// class psychiatry{}

// class pharmacy{}

// abstract class Person {

// }

// class Doctor extends Person{}

// class Nurse extends Person{}

// class Patient extends Person{}


import { Treatment } from "./models/Treatment";
import { Doctor } from "./models/Doctor";
import { Nurse } from "./models/Nurse";
import { Patient } from "./models/Patient";
import { Address } from "./models/Address";
import { Specialization } from "./Enums/Specialization";
import { Person } from "./abstracts/Person";
import { Sector } from "./abstracts/Sector";
import { Cardiologist } from "./models/Cardiologist";
import { Emergency } from "./models/Emergency";
import { Equipaments } from "./models/Equipaments";
import { Neurologist } from "./models/Neurologist"; 
import { Pediatrics } from "./models/Pediatric";
import { Oncologist } from "./models/Oncologist";
import { Orthopedics } from "./models/Orthopedic";
import { PharmaceuRadiologist } from "./models/PharmaceuRadiologist";
import { Physiotical } from "./models/Physiotical";
import { Psychiatrist } from "./models/Psychiatrist";
import { therapist } from "./models/Therapist";

// Setores

const cardiologistSector = new Cardiologist('cardiologist')
const emergencySector = new Emergency('emergency')
const neurologistSector = new Neurologist('neurologist')
const pediatricSector = new Pediatrics('pediatric')
const oncologistSector = new Oncologist('oncologist')
const orthopedicSector = new Orthopedics('orthopedic')
const pharmaceuradiologistSector = new PharmaceuRadiologist('radiologist')
const physioticalSector=  new Physiotical('physiotical')
const phychiatristSector = new Psychiatrist('phychiatrist')
const psychiatristSector = new therapist('psychiatrist')


const doctor1 = new Doctor('Rafael', '333-333-333-33', new Address('Guimarãoes', 167, 5199394044), 519993793, 12345, Specialization.Cardiologist, 80)
const doctor2 = new Doctor('Julia', '333-333-333-33', new Address('Francisco', 167, 5199394044), 519993793, 12365, Specialization.Neurologist, 80)
const doctor3 = new Doctor('Juliano', '333-333-333-33', new Address('Guima', 167, 5199394044), 519993793, 12395, Specialization.Pediatric, 80)
const doctor4 = new Doctor('Matilda', '333-333-333-33', new Address('Rãoes', 167, 5199394044), 519993793, 12045, Specialization.Oncologist, 80)
const doctor5 = new Doctor('Cinderela', '333-333-333-33', new Address('Marãoes', 167, 5199394044), 519993793, 18345, Specialization.Orthopedic, 80)
const doctor6 = new Doctor('Simpsons', '333-333-333-33', new Address('Santa rita', 167, 5199394044), 519993793, 32345, Specialization.PharmaceuRadiologist, 80)
const doctor7 = new Doctor('Isabely', '333-333-333-33', new Address('Guimarãoes', 17, 5199394044), 519993793, 12341, Specialization.Physiotical, 80)
const doctor8 = new Doctor('Izadora', '333-333-333-33', new Address('Guimarãoes', 67, 5199394044), 519993793, 10245, Specialization.Psychiatrist, 80)
const doctor9 = new Doctor('Julio', '333-333-333-33', new Address('Guimarãoes', 16, 5199394044), 519993793, 14345, Specialization.Psychiatrist, 80)


const nurse1 = new Nurse('Vitoria', '763-333-333-33', new Address('Santa Teresa', 179, 9305400), 519393933, 12345, Specialization.Nurse, 120)
const nurse2 = new Nurse('Vitor', '763-333-333-33', new Address('Feitoria', 179, 9305400), 519393933, 12345, Specialization.Nurse, 500)

cardiologistSector.addDoctor(doctor1)
neurologistSector.addDoctor(doctor2)
pediatricSector.addDoctor(doctor3)
oncologistSector.addDoctor(doctor4)
orthopedicSector.addDoctor(doctor5)
pharmaceuradiologistSector.addDoctor(doctor6)
physioticalSector.addDoctor(doctor7)
phychiatristSector.addDoctor(doctor8)
psychiatristSector.addDoctor(doctor9)




cardiologistSector.addNurse(nurse1)
neurologistSector.addNurse(nurse1)
pediatricSector.addNurse(nurse1)
oncologistSector.addNurse(nurse1)
orthopedicSector.addNurse(nurse1)
pharmaceuradiologistSector.addNurse(nurse1)
physioticalSector.addNurse(nurse1)
phychiatristSector.addNurse(nurse1)
psychiatristSector.addNurse(nurse1)


cardiologistSector.addNurse(nurse2)
neurologistSector.addNurse(nurse2)
pediatricSector.addNurse(nurse2)
oncologistSector.addNurse(nurse2)
orthopedicSector.addNurse(nurse2)
pharmaceuradiologistSector.addNurse(nurse2)
physioticalSector.addNurse(nurse2)
phychiatristSector.addNurse(nurse2)
psychiatristSector.addNurse(nurse2)




class Hospital {
    name: string;
    sectors: Sector[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public triage(patient: Patient) {
        let expert: Specialization[] = []
        let sectorsRecommended: Sector[] = []

        try {
            switch(patient.degree) {
                case 'mild':
                    expert.push(Specialization.Psychiatrist, Specialization.PharmaceuRadiologist)
                break
    
                case 'moderate':
                    expert.push(Specialization.Psychiatrist, Specialization.Physiotical, Specialization.Pediatric, Specialization.Orthopedic)
                break
    
                case 'serious':
                    expert.push(Specialization.Oncologist, Specialization.Neurologist, Specialization.Cardiologist);
                    patient.hospitalStretcher = true;
                break
            }
        }
        catch(err: any) {
            console.log(err)

        } 

        expert.forEach(nameSector => {
            this.sectors.forEach(sector => {
               const name = sector.nameSectorSpecialty.split(' ')[0]
               
               if(name === nameSector.toLowerCase()) {
                    sectorsRecommended.push(sector)
               }
            }) 
            
        })

        console.log({
            title: "Setores recomendados",
            sectorsRecommended
        })

        const sector: Sector = this.addPatientInSetor(patient, sectorsRecommended)
        const doctor: Doctor = sector.doctors[0]
        const nurse: Nurse = sector.nurses[0]
        doctor.patients.push(patient)
        nurse.patients.push(patient)
        patient.doctor = doctor

        console.log({
            title: 'Setor escolhido',
            sector: sector
        })


    return {patient: patient, doctor: doctor, nurse: nurse}

   }

   private addPatientInSetor(patient: Patient, sectors: Sector[]) {
        const randomSector = Math.floor(Math.random() * sectors.length)
        const sector = sectors[randomSector]
        sector.addPatient(patient); 
        patient.sector = sector
        return sector
   }


  public initTreatement(doctor: Doctor, description: string, nurse: Nurse, patient: Patient) {
        const treatment = new Treatment(doctor, description, nurse, patient)
        if(patient.doctor === null) {
            console.log('Paciente não passou pela consulta')
        }


  }




}



const h1n1 = new Hospital('Centenario')

h1n1.sectors.push(cardiologistSector, emergencySector, neurologistSector, pediatricSector, oncologistSector, orthopedicSector, pharmaceuradiologistSector, 
physioticalSector, phychiatristSector, psychiatristSector)








const triage = h1n1.triage(new Patient('Vitoria', '556-333-333-22', new Address('Rua duelingo', 178, 9305400), 5199394566, 'serious', 'Dor de cu'))








// const endereco1 = new Address('Rua nova feitoria', 1568539, 93054000)
// const doutor1 = new Doctor('Rafel', '155-333-333-33', endereco1, 5199393939, 38634829643896, Specialization.Cardiologist, 78 )
// const patient1 = new Patient('Julia', '764-444-444-44', endereco1, 32332, 'moderate')
// const nurse = new Nurse('Vitotia', '646-444-444-44', endereco1, 32897327023, 32790327, Specialization.Cardiologist, 70)
// const novoTratamento = new Treatment(doutor1, 'tratamento bem legal', nurse, patient1)


// setor1.getPatientHistoric(patient1)


// console.log(novoTratamento)

// class Hospital{
//     name:string;
//     address: Address;
//     doctors: Doctor;
//     patients: Patient;
//     nurses: Nurse
// }
