enum VehicleType {
    Transport = 'Transport',
    Business = "Business",
    Comumn = "Comumn",
    Default = "Default"
}


class Customer {
    constructor(public name: string, public cpf: string, public vehicle: Vehicle) {
        this.vehicle.owner = this
    }
    
}

class Client {
    private _Vehicles: Array<Vehicle> = []
    constructor(public name: string, public cnpj: string) { }

    public get_Vhehicles(): Array<Vehicle> {
        return this._Vehicles
    }

    public addVehicle(vehicle: Vehicle) {
        if (vehicle.owner === null) {
            vehicle.owner = this
            if (vehicle.VehicleType !== VehicleType.Transport) {
                vehicle.VehicleType = VehicleType.Business
            }
            this._Vehicles.push(vehicle)
        }
    }
}



class Vehicle {
    tank: number = 0
    VehicleType: VehicleType = VehicleType.Default
    constructor(public plate: string, public model: string, public owner: Customer | Client | null) { }
}

class Car extends Vehicle {
    VehicleType: VehicleType = VehicleType.Comumn
    constructor(public plate: string, public model: string, public owner: Customer | Client | null) {
        super(plate, model, owner)
    }
}

class MotorCycle extends Vehicle {
    VehicleType: VehicleType = VehicleType.Comumn
    constructor(public plate: string, public model: string, public owner: Customer | Client | null) {
        super(plate, model, owner)
    }
}

class Truck extends Vehicle {
    VehicleType: VehicleType = VehicleType.Transport
    constructor(public plate: string, public model: string, public owner: Customer | Client | null) {
        super(plate, model, owner)
    }
}

class Invoice {
    constructor(public company: GasStation, public value: number, public owner: Customer | Client, public vehicle: Vehicle, public vehicleType: VehicleType, public discount: number = 0){}

    discountToVehicle() {
       return  this.value * 0.2
    }
}

class CardPayment {
    constructor(public flag: string, public holder: Client | Customer, public cvv: number ) {}
}

// , paymentMethod: 'Dinheiro' | CardPayment

// let my_dict: Map<string, number> = new Map(
//  [
//     ['eu', 59]
//  ]
// )


class GasStation {
    private _gasolineStock: {gasolineLiter: number} = { gasolineLiter: 30000}
    private _gasolineCheck: {status: string} = {status: 'full' }
    private _prices: {diesel: number, gasoline: number} = { diesel: 6.06, gasoline: 6.29 }
    private _invoices: Array<{ company: string; value: number; client: string; vehicle: string; discount: number; FinalValue: number; }> = []

    constructor(public name: string) {}

    private GenerateInvoice(company: GasStation, value: number,  owner: Customer | Client, vehicle: Vehicle, vehicleType: VehicleType) {
        const invoice = new Invoice(company, value, owner, vehicle, vehicleType)
        return {
         company: this.name,
         value: Number(value.toFixed(2)),   
         client: owner instanceof Client ? `Nome: ${owner.name}, Cnpj: ${owner.cnpj}`: `Nome: ${owner.name}, Cpf: ${owner.cpf}`,
         vehicle: `Vehicle Model: ${vehicle.model}, Vehicle Plate: ${vehicle.plate}, Type Vehicle: ${vehicle.VehicleType}`,
         discount: owner instanceof Client ? Number(invoice.discountToVehicle().toFixed(2)) : 0,
         FinalValue: owner instanceof Client ? value - Number(invoice.discountToVehicle().toFixed(2)) : value - 0
        }
    }

    public getGasolineStock() {
        return this._gasolineStock
    }

    public getGasolineCheck() {
        return this._gasolineCheck
    }

    public getInvoices() {
        return this._invoices
    }

    public toFill() {
        if (this._gasolineStock.gasolineLiter >= 30000) {
            console.log("Tanque já está cheio")
            return 'tanque cheio'
        }

        this._gasolineStock.gasolineLiter = 30000
        return 'o tanque foi completado com sucesso'

    }

    public checkGasolineStock() {
        if(this._gasolineStock.gasolineLiter < 15000) {
            this._gasolineCheck.status = 'low'
        }

        console.log({gasolineLiter: this._gasolineStock.gasolineLiter, gasolineTankStatus: this._gasolineCheck.status})

        return 'Verificação completa'
    }

    public fillTheVehicleTank(vehicle: Vehicle, qtdEmLitros: number, typeGasoline: "diesel" | "gasoline", client: Customer | Client) {
        this._gasolineStock.gasolineLiter -= qtdEmLitros
        vehicle.tank += qtdEmLitros
        let value = null

        if(typeGasoline === "diesel") {
            value = this._prices.diesel * qtdEmLitros 
        } 

        else if(typeGasoline === "gasoline") {
            value = this._prices.gasoline * qtdEmLitros
        }

        console.log(`O valor com base no tipo da gasolina e no litro saiu exatemnte ${value?.toFixed(2)}`)

        if(value !== null) {
            const invoice = this.GenerateInvoice(this, value, client, vehicle, vehicle.VehicleType)
            this._invoices.push(invoice)
            console.log(invoice)
            return invoice
        }
    }

}


const v1 = new Vehicle("2397390", "Camaro", null)
const c1 = new Client("PetroRotas", "394-4324-43232")


const v2 = new Car('23432ffsa', "BMW", null)
const c2 = new Customer("Tavares", '378-333-333-33',  v2)
console.log(v2)
c1.addVehicle(v1)
const gas = new GasStation("Algum posto de gasolina")
gas.toFill()


gas.fillTheVehicleTank(v1, 5, "diesel", c1)
gas.fillTheVehicleTank(c2.vehicle, 5, "gasoline", c2)


console.log(gas.getInvoices())

gas.checkGasolineStock()
// console.log(c1.get_Vhehicles())