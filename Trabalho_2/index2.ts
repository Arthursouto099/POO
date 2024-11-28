class Employee {
    monthlySalary = 0
    commision: number = 0
    totalSalary: number = 0
    constructor(public name: string, private _cpf: string) { }

    getCpf(): string {
        return this._cpf
    }

    setCpf(value: string): string {
        return this._cpf = value
    }
}

class Horaist extends Employee {

    constructor(name: string, cpf: string) {
        super(name, cpf)
    }
}

class Salaried extends Employee {

    constructor(name: string, cpf: string) {
        super(name, cpf)
    }
}


class Commissioned extends Employee {

    constructor(name: string, cpf: string) {
        super(name, cpf)
    }
}



class HumanResources {
    private employees: Array<Employee> = []


    private date(): void {
        const now: Date = new Date()
        console.log(`Mês: ${now.getMonth()} Ano: ${now.getFullYear()}`)
    }

    private getHour(day: number): number | void {
        if (day < 0 || day > 24) {
            console.log("horas invalidas")
        }
        else return day
    }

    private getMonth(month: number): number | void {
        if (month > 0 || month < 12) {
            return month
        }
        else console.log("Mês invalido")
    }


    public addEmployee(emploeey: Employee) {
        this.employees.push(emploeey)
    }

    payEmployee(emploeey: Employee, monthlySalary?: number, totalItemValue?: number, id?: number, item?: string,  hoursWorkedPerDay?: number, hourlySalary?: number) {

            // this.date()
            // console.log(monthlySalary)
            // if (monthlySalary !== undefined) {
            //     emploeey.monthlySalary = monthlySalary
            //     console.log(`O Funcionario recebe ${monthlySalary}R$ por mês`)
            // }
        

       
            // type item = { id: number, employee: string, item: string, totalValue: number, commission: number }
            // if (totalItemValue !== undefined && id !== undefined) {
            //     let commission = totalItemValue / 3
            //     if (id !== undefined && item !== undefined) {
            //         const itemOne: item = { id: id, employee: emploeey.name, item: item , totalValue: totalItemValue, commission: commission }
            //         emploeey.commision = itemOne.commission
            //         this.date()
            //         console.log(itemOne)
            //     }
            // }
        

   

            // type oneReceive = { hour: number, oneReceive: number }
            // let hours: Array<oneReceive> = []
            // const createList = (hour: number | void) => {
            //     if (typeof hour === "number") {
            //         for (let i = 0; i < hour; i++) {
            //             if (hourlySalary !== undefined) {
            //                 hours.push({ hour: i + 1, oneReceive: hourlySalary })
            //             }

            //         }
            //     }
            // }
            // if (hoursWorkedPerDay !== undefined) {
            //     createList(this.getHour(hoursWorkedPerDay))
            // }
            // let soma = 0
            // for (let hour of hours) {
            //     soma += hour.oneReceive
            // }
            // emploeey.totalSalary = soma

            // this.date()
            // console.log(`O Funcionario do tipo Horista recebeu um total de ${soma}R$ por ${hours.length} horas trabalhas`)
            // console.log(hours)
            // console.log(`Total: ${soma}`)

        



        


    }

















}


const e1 = new Horaist("vitor", "111-222-333-44")
const e2 = new Salaried("vitinho", "120-222-222-22")
const e3 = new Commissioned("juliete", "224-333-333-33")
const humanDepartament = new HumanResources()
humanDepartament.payEmployee(e2, undefined, undefined, undefined, undefined, 20, 20)



