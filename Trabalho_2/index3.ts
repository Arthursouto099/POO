enum VehicleType {
    Transport = 'Transport',
    Business = "Business",
    Comumn = "Comumn",
    Default = "Default"
}


class Customer {
    constructor(public name: string, public cpf: string, public vehicle: Vehicle) { }
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

class GasStation {
    private _gasolineStock = { gasolineLiter: 30000, level: 'Full' }

    public toFill() {
        if (this._gasolineStock.gasolineLiter >= 30) {
            console.log("Tanque já está cheio")
        }
        else {
            while(this._gasolineStock.gasolineLiter <= 30) {
                
            }
        }
    }




}


const v1 = new Vehicle("2397390", "Camaro", null)
const c1 = new Client("PetroRotas", "394-4324-43232")


c1.addVehicle(v1)
console.log(c1.get_Vhehicles())