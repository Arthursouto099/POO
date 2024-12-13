// enum Asset {
//     Software = 'Software',
//     Equipment = 'Equipament'
// }


// class Employee {
//     monthlySalary = 0
//     commision: number = 0
//     totalSalary: number = 0
//     positionInProject: string | undefined = undefined
//     constructor(public name: string, private _cpf: string) { }

//     getCpf(): string {
//         return this._cpf
//     }

//     setCpf(value: string): string {
//         return this._cpf = value
//     }
// }

// class Horaist extends Employee {

//     constructor(name: string, cpf: string) {
//         super(name, cpf)
//     }
// }

// class Salaried extends Employee {

//     constructor(name: string, cpf: string) {
//         super(name, cpf)
//     }
// }


// class Commissioned extends Employee {

//     constructor(name: string, cpf: string) {
//         super(name, cpf)
//     }
// }


// class Project {
//     constructor(public typeAsset: Asset, public name: string, public responsibles: {employees: Array<Employee>, positions: Array<string> }) {}
// }

// class Equipament {
//     private _maintenances: Maintenance[] = []
//     constructor(public name: string, public price: number) {}

//     public getMaintenances(): Array<Maintenance> {
//         return this._maintenances
//     }

//     public addMaintenance(maintenance: Maintenance) {
//         this._maintenances.push(maintenance)
//     }
// }

// class Maintenance {
//     itemUnderMaintenance: Array<Equipament | Project>  = []
//     constructor(public date: string, public description: string, public responsibles: Array<Employee>) {}
// }



// class HumanResources {
//     private _employees: Array<Employee> = []
//     private _projects: Array<Project> = []
//     private _equipaments: Array<Equipament> = []
//     private _maintenances: Array<Maintenance> = []

//     private date(): void {
//         const now: Date = new Date()
//         console.log(`Mês: ${now.getMonth()} Ano: ${now.getFullYear()}`)
//     }

//     private getHour(day: number): number | void {
//         if (day < 0 || day > 24) {
//             console.log("horas invalidas")
//         }
//         else return day
//     }

//     private _payEmployee(employee: Employee, monthlySalary: number): void
//     private _payEmployee(employee: Employee, monthlySalary: number, totalItemValue: number, id: number, item: string): void
//     private _payEmployee(employee: Employee, monthlySalary: number, totalItemValue: number, id: number, item: string, hoursWorkedPerDay: number, hourlySalary: number): void

//     private _payEmployee(employee: Employee, monthlySalary?: number, totalItemValue?: number, id?: number, item?: string, hoursWorkedPerDay?: number, hourlySalary?: number) {

//         if (monthlySalary !== undefined && totalItemValue === undefined) {
//             this.date()
//             console.log(monthlySalary)
//             if (monthlySalary !== undefined) {
//                 employee.monthlySalary = monthlySalary
//                 console.log(`O Funcionario recebe ${monthlySalary}R$ por mês`)
//             }
//         }



//         else if (id !== undefined && item !== undefined && totalItemValue !== undefined && hoursWorkedPerDay === undefined) {
//             type item = { id: number, employee: string, item: string, totalValue: number, commission: number }
//             if (totalItemValue !== undefined && id !== undefined) {
//                 let commission = totalItemValue / 3
//                 if (id !== undefined && item !== undefined) {
//                     const itemOne: item = { id: id, employee: employee.name, item: item, totalValue: totalItemValue, commission: commission }
//                     employee.commision = itemOne.commission
//                     this.date()
//                     console.log(itemOne)
//                 }
//             }
//         }




//         if (hoursWorkedPerDay !== undefined) {
//             type oneReceive = { hour: number, oneReceive: number }
//             let hours: Array<oneReceive> = []
//             const createList = (hour: number | void) => {
//                 if (typeof hour === "number") {
//                     for (let i = 0; i < hour; i++) {
//                         if (hourlySalary !== undefined) {
//                             hours.push({ hour: i + 1, oneReceive: hourlySalary })
//                         }

//                     }
//                 }
//             }
//             if (hoursWorkedPerDay !== undefined) {
//                 createList(this.getHour(hoursWorkedPerDay))
//             }
//             let soma = 0
//             for (let hour of hours) {
//                 soma += hour.oneReceive
//             }
//             employee.totalSalary = soma

//             this.date()
//             console.log(`O Funcionario do tipo Horista recebeu um total de ${soma}R$ por ${hours.length} horas trabalhas`)
//             console.log(hours)
//             console.log(`Total: ${soma}`)

//         }

//     }

//     public getEmployees(): Employee[] {
//         return this._employees
//     } 

//     public getProjects(): Project[] {
//         return this._projects
//     }

//     public getEquipaments(): Equipament[] {
//         return this._equipaments
//     }

//     public getMaintenances(): Maintenance[] {
//         return this._maintenances
//     }

//     public addEmployee(employee: Employee) {
//         this._employees.push(employee)
//     }


//     public PayHoraist(employee: Horaist, hoursWorkedPerDay: number, hourlySalary: number): void {
//         this._payEmployee(employee, 0, 0, 0, '', hoursWorkedPerDay, hourlySalary)
//     }

//     public PayComissioned(employee: Employee, totalItemValue: number, id: number, item: string): void {
//         this._payEmployee(employee, 0, totalItemValue, id, item)
//     }

//     public PaySalaried(employee: Salaried, monthlySalary: number): void {
//         this._payEmployee(employee, monthlySalary)
//     }

//     public addProject(typeAsset: Asset, name: string, responsibles: Array<Employee>, positions: Array<string>) {
//        const project = new Project(typeAsset, name, {employees: responsibles, positions: positions})
//        for(let i = 0; i < responsibles.length; i++) {
//         project.responsibles.employees[i].positionInProject = project.responsibles.positions[i]
//         this.addEmployee(responsibles[i])
//        }

//        this._projects.push(project)
//     }

//     public addEquipament(equipament: Equipament) {
//         this._equipaments.push(equipament)
//     }
    
//     public addMaintenanceInEquipament(equipament: Equipament, maintenance: Maintenance) {
//        const myElement =  this._equipaments.indexOf(equipament)
//        if(myElement !== -1) {
//         this._equipaments[myElement].addMaintenance(maintenance)
//         this._maintenances.push(maintenance)
//         maintenance.itemUnderMaintenance.push(equipament)
//        }
//        else {
//         equipament.addMaintenance(maintenance)
//         this._equipaments.push(equipament)
//         this._maintenances.push(maintenance)
//         maintenance.itemUnderMaintenance.push(equipament)
//        }
//     }
    


// }


// const e1 = new Horaist("vitor", "111-222-333-44")
// const e2 = new Salaried("vitinho", "120-222-222-22")
// const e3 = new Commissioned("juliete", "224-333-333-33")
// const humanDepartament = new HumanResources()
// const equipament = new Equipament("Monitor 220 HZ", 1500)
// const maintenance = new Maintenance(`11/11/2024`, "tatata", [e1, e3])

// // humanDepartament.payEmployee(e1, 0, 0, 0,'', 20, 15)





// humanDepartament.PayHoraist(e1, 20, 120)
// humanDepartament.PaySalaried(e2, 1200)
// humanDepartament.PayComissioned(e3, 12000, 1, "iphone 8 Plus")
// humanDepartament.addProject(Asset.Software, 'gerenciador de arquivos', [e1, e3], ["Programador", "lider de desenvolvimento"])
// humanDepartament.addEquipament(equipament)
// humanDepartament.addMaintenanceInEquipament(equipament, maintenance)





// console.log(humanDepartament.getEmployees())
// console.log(humanDepartament.getProjects())
// console.log(humanDepartament.getEquipaments())
// console.log(humanDepartament.getMaintenances())
