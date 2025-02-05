
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
import * as rl from 'readline-sync'

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

        console.log("-----> Iniciando a triagem do paciente <------\n")
        console.log("Informações do paciente: ")
        console.log({name: patient.name,cpf: patient.cpf,degree: patient.degree})
        console.log('\n')


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

        console.log("--> Setores recomendados, dado o problema do paciente")
        console.log("-----------------------------------------------------\n")

        console.log({
            title: "Setores recomendados",
            sectorsRecommended
        })
        console.log("\n")
        rl.question("Clique qualquer tecla para proseguir: ")
        console.clear()

        const sector: Sector = this.addPatientInSetor(patient, sectorsRecommended)
        const doctor: Doctor = sector.doctors[0]
        const nurse: Nurse = sector.nurses[0]
        doctor.patients.push(patient)
        nurse.patients.push(patient)
        patient.doctor = doctor

        console.log("--> Setor escolhido ao paciente " + patient.name + "<--")
        console.log({
            title: 'Setor escolhido',
            sector: sector
        })

        console.log("Tudo pronto para iniciar o tratamento")
        console.log('\n')
        console.log("A triagem retorna um objeto contendo um doutor,  uma enfermeira e o paciente")
        console.log('\n')



    return {patient: patient, doctor: doctor, nurse: nurse}

   }

   private addPatientInSetor(patient: Patient, sectors: Sector[]) {
        sectors.forEach(sector => {
        console.log(`ID: ${sectors.indexOf(sector)}, NAMESECTOR: ${sector.nameSectorSpecialty}`)
        })
        console.log("\n")

        const option = rl.questionInt("Digite o id do sector que deseja encaminha o paciente: ")
        console.log("\n")

        const sector = sectors[option]
        sector.addPatient(patient); 
        patient.sector = sector
        return sector
   }


  public initTreatement(doctor: Doctor, description: string, nurse: Nurse, patient: Patient, medicaments: string[]) {
        const treatment = new Treatment(doctor, description, nurse, patient)
        medicaments.forEach(medicament => {
            treatment.addMedicament(medicament)
        })
      

        if(patient.doctor === null) {
            console.log('Paciente não passou pela Triagem')
            console.log("---> Encaminhando paciente para a triagem")
            const forwarding =  this.triage(patient)
            this.initTreatement(forwarding.doctor, description, forwarding.nurse, forwarding.patient, medicaments)
        }
        
        
        
        

        return {
            title: `-> tratamento do paciente ${treatment.patient.name} <-`,
            description,
            patient: treatment.patient.name,
            doctor: treatment.doctor.name,
            nurse: treatment.nurse.name,
            medicaments:treatment.medicaments,
            sector: treatment.patient.sector?.nameSectorSpecialty
        }
  }

}

export const hospital = new Hospital("Santa Cruz")
// const h1n1 = new Hospital('Centenario')


hospital.sectors.push(cardiologistSector, neurologistSector, pediatricSector, oncologistSector, orthopedicSector, pharmaceuradiologistSector, physioticalSector, 
phychiatristSector, psychiatristSector)

// /* iniciando a triagem
//     1 -> Estanciar o objeto Patient ao mesmo tempo que estaciamos o objeto Address
//     2 -> Iniciar o metódo estático Triagem do objeto Hospital
// */


// // ---> 1
// const patient1 = new Patient("Leornado", "123-456-789-10", new Address("Rua Guimarões", 15, 9405700), 5199497551, "mild", 'Sinto uma dor de cabeça persistente');


// // ---> 2

// const triagem = h1n1.triage(patient1)

// const question = rl.question("Digite seu nome: ")
// console.log(question)