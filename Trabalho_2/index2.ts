class Employee {
    public salary: number = 0
    constructor(public name: string, private _cpf: string) {}

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
    
}