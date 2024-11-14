// enum Role {
//     Teacher,
//     Director,
//     Coordinator
// }



// class Employee {
//     constructor(public name: string, public cpf: string, public salary: number, public role: Role) {}
// }

// class Teacher extends Employee {
//     constructor(public name: string, public cpf: string, public salary: number,  public role: Role) {
//         super(name, cpf, salary, role)
//     }
// }

// class Director extends Employee {
//     constructor(public name: string, public cpf: string, public salary: number,  public role: Role) {
//         super(name, cpf, salary, role)
//     }
// }

// class Coordinator extends Employee {
//     constructor(public name: string, public cpf: string, public salary: number,  public role: Role) {
//         super(name, cpf, salary, role)
//     }
// }

// class SchoolPayment {
//    static payEmployee(employee: Teacher):void
//    static payEmployee(employee: Director):void 
//    static payEmployee(employee: Coordinator):void

//    static payEmployee(employee: Teacher | Director | Coordinator) {
//         const valorDesconto = (value: number) => {
//             console.log(`O salario atual do funcionario é ${employee.salary}`)
//             let incrise = employee.salary * value
//             console.log(`O valor do salario auemntos em ${incrise}%`)
//             let totalSalary = employee.salary + incrise 
//             console.log(`Salario atual do funcionario é de ${totalSalary}`)
//         }


//         if (employee instanceof Teacher){valorDesconto(0.05)}
//         else if (employee instanceof Director){valorDesconto(0.15)}
//         else if (employee instanceof Coordinator) {valorDesconto(0.10)}
    
//     }
// }


// const fu = new Director("tata", '8369883', 100, Role.Coordinator)

// SchoolPayment.payEmployee(fu)