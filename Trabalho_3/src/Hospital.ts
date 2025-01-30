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


import { Tratament } from "./models/Treatment";
import { Doctor } from "./models/Doctor";
import { Nurse } from "./models/Nurse";
import { Patient } from "./models/Patient";
import { Address } from "./models/Address";
import { Specialization } from "./models/Specialization";

// const endereco1 = new Address('Rua nova feitoria', 1568539, 93054000)
// const doutor1 = new Doctor('Rafel', '155-333-333-33', endereco1, 5199393939, 38634829643896, Specialization.Cardiologist, 78 )
// const patient1 = new Patient('Julia', '764-444-444-44', endereco1, 32332, 'moderate')
// const nurse = new Nurse('Vitotia', '646-444-444-44', endereco1, 32897327023, 32790327, Specialization.Cardiologist, 70)

// const novoTratamento = new Tratament(doutor1, 'tratamento bem legal', nurse, patient1)
// console.log(novoTratamento)

class Hospital{
    name:string;
    address: Address;
    doctors: Doctor;
    patients: Patient;
    nurses: Nurse
}
