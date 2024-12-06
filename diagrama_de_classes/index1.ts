class Wheel {
    mark: string
    rim: number 

    constructor(mark: string, rim: number) {
        this.mark = mark
        this.rim = rim
    }
}

class Engine {
    manufacturer: string
    power: number

    constructor(manufacturer: string, power: number) {
        this.manufacturer = manufacturer
        this.power = power
    }
}

// Classe Dependente
class VehicleCar {
    wheel: Wheel
    engine: Engine
    value: number

    constructor(wheel: Wheel, engine: Engine, value: number) {
        this.wheel = wheel
        this.engine = engine
        this.value = value
    }


    turnOn(): string  {
        return 'Ligando o carro...'
    }

    toWalk(): string {
        return 'O carro está andando...'
    }

    break(): string {
        return 'O carro freiou...'
    }
}

class Employee {
    name: string
    age: number
    cpf: string
    position: string | null

    constructor(name: string, age: number, cpf: string, position: string | null) {
        this.name = name
        this.age = age
        this.cpf = cpf
        this.position = position
    }

}


class Departament {
    numberOfEmployees: number
    menager: Employee

    constructor(menager: Employee, numberOfEmployees: number) {
        if(menager.position === null) menager.position = 'menager'
        this.menager = menager
        this.numberOfEmployees = numberOfEmployees
    }

    setMenager(employee: Employee) {
        this.menager = employee
    }

    getMenager(): Employee {
        return this.menager
    }
 }



class AuroMaker {
    vehicles: Array<Vehicle> = []
    name: string
    departaments: Array<Departament> = []
    
    constructor(name: string) {
        this.name = name
    }

    constructCar(): string {
        return 'Construindo o carro'
    }
}


const empregado = new Employee("vitor", 25, '888.000.888-99', null)
const departamento = new Departament(empregado, 73)
console.log(departamento.getMenager())