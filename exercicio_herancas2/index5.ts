// class Employee {
//     constructor(public name: string, public cpf: string, public salary: number) {}
// }

// class Doctor extends Employee {
  
//     constructor(public name: string, public cpf: string, public salary: number, public specialism: string) {
//         super(name, cpf, salary)
//     }
// }

// class Nurse extends Employee {
//     constructor(public name: string, public cpf: string, public salary: number) {
//         super(name, cpf, salary)
//     }
// }

// class NursingTechnician extends Employee {
//     constructor(public name: string, public cpf: string, public salary: number) {
//         super(name, cpf, salary)
//     }
// }


// class Patient {
//     constructor(public name: string, public cpf: string) {}
// }

// class Consultation {
//     constructor(public patient: Patient, public Employee: Employee, public reason: string, public date: string) {}
// }


// class Appointment {

//     public static scheduleAppointment(patient: Patient, employee: Employee ,reason: string, date: string) {
//          const consulta : Consultation = new Consultation(patient ,employee, reason, date)
//          HospitalRegister.patients.push(patient)
//          HospitalRegister.employees.push(employee)   
//          HospitalRegister.appoiments.push(consulta)
      
//     }
// }

// class HospitalRegister {
//     public static patients: Array<Patient> = []
//     public static employees: Array<Employee> = []
//     public static appoiments: Array<Consultation> = []
//  }


// const c1 = new Patient("tavares", "766-999-777-88")
// const d1 = new Doctor("joao", "000-000-000-00", 9000, "Nutricionista" )

// Appointment.scheduleAppointment(c1, d1, "ta com o shape muito forte", "11/12/2026")
// console.log(HospitalRegister)