
// class Person {
//     constructor(public name: string, public age: number) { }
// }

// class Patient extends Person {
//     constructor(public name: string, public age: number) {
//         super(name, age)
//     }
// }

// class Doctor extends Person {
//     consultations: Array<Consultation> = []
//     constructor(public name: string, public age: number) {
//         super(name, age)
//     }
// }

// class Pediatrician extends Doctor {
//     constructor(public name: string, public age: number) {
//         super(name, age)
//     }
// }

// class Clinical extends Doctor {
//     constructor(public name: string, public age: number) {
//         super(name, age)
//     }
// }

// class Geriatrician extends Doctor {
//     constructor(public name: string, public age: number) {
//         super(name, age)
//     }
// }

// class Consultation {
//     constructor(public patient: Patient, public doctor: Doctor | null, public reason: string, public date: string) { }
// }

// class Hospital {
//     private doctors: Array<Doctor> = []
//     private consultations: Array<Consultation> = []

//     constructor(public name: string) { }

//     addDoctor(doctor: Doctor) {
//        this.doctors.push(doctor)
//     }

//     addConsultation(consultation: Consultation) {
//         this.consultations.push(consultation)
//     }

//     getDoctors(): Array<Doctor> {
//         return this.doctors
//     }

//     getConsultations(): Array<Consultation> {
//         return this.consultations
//     }

//      choiseDoctor(pacient: Patient) {
//         let doctor: null | Doctor = null
//         if(pacient.age < 12) {
//             this.getDoctors().forEach(d => {if(d instanceof Pediatrician) {return doctor = d}})
//         }
//         else if(pacient.age < 40 && pacient.age > 12) {
//             this.getDoctors().forEach(d => {if(d instanceof Clinical) {doctor = d}} )
//         }
//         else if(pacient.age > 40) {
//             this.getDoctors().forEach(d => {if(d instanceof Geriatrician) {doctor = d}})
//         }
//         return doctor
//     }

// }



// class StartConsultation {
//    static  startConsultation(pacient: Patient, descricao: string, date: string, hospital: Hospital) {
//         const consultation = new Consultation(pacient, hospital.choiseDoctor(pacient), descricao, date)
//         hospital.addConsultation(consultation)
//     }
// }


// const p1 = new Patient("tavares", 7)
// const p2 = new Patient("Vitor", 24)
// const doctor1 = new Pediatrician("Julio", 27)
// const doctor2 = new Clinical("julia", 179)



// const hospitalDaPenha = new Hospital("hospital da penha")
// hospitalDaPenha.addDoctor(doctor1)
// hospitalDaPenha.addDoctor(doctor2)


// StartConsultation.startConsultation(p1, "dor de cabeca", "11/12/2024", hospitalDaPenha)
// StartConsultation.startConsultation(p2, "dor de cu", "11/12/2024", hospitalDaPenha)

// console.log(hospitalDaPenha.getConsultations())






