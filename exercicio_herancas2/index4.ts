// class Vehicle {
//     constructor(public model: string, public numberWheels: number, public engine: string, public loadCapacity: number) {

//     }
// }

// class Car extends Vehicle {
//     constructor(public model: string, public numberWheels: number, public engine: string, public loadCapacity: number) {
//         super(model, numberWheels, engine, loadCapacity)
//     }
// }

// class MotorCycle extends Vehicle {
//     constructor(public model: string, public numberWheels: number, public engine: string, public loadCapacity: number) {
//         super(model, numberWheels, engine, loadCapacity)
//     }
// }

// class Truck extends Vehicle {
//     constructor(public model: string, public numberWheels: number, public engine: string, public loadCapacity: number) {
//         super(model, numberWheels, engine, loadCapacity)
//     }
// }


// function structuringVehicle(type: string ,model: string, numberWheels: number, engine: string, loadCapacity: number, avarageValue: number, manufacturingTime: number) {
//     let vehicle: Car | Truck | MotorCycle | undefined = undefined
//     if(type === "CAR") {
//         const car: Car = new Car(model, numberWheels, engine, loadCapacity)
//         vehicle = car
//     }
//     else if(type === "MOTORCYCLE") {
//         const motorCycle: MotorCycle = new MotorCycle(model, numberWheels, engine, loadCapacity)
//         vehicle = motorCycle
//     }
//     else if(type === "TRUCK") {
//         const truck: Truck = new Truck(model, numberWheels, engine, loadCapacity)
//         vehicle = truck
//     }
//     const avarageValueFn: number = avarageValue
//     const manufacturingTimeFn: number = manufacturingTime
//     const typeVehicle = type
//     const information =  {
//         typeVehicle: typeVehicle,
//         avarageValue: avarageValueFn,
//         manufacturingTime: manufacturingTimeFn,
//         informationVehicle: vehicle
        
//     }
//     return information
    
// }

// class CarConstruction {
//     static structuring(model: string, numberWheels: number, engine: string, loadCapacity: number) {
//        const avarageValue: number = 29.909
//        const manufacturingTime: number = 12
//        const typeVehicle = 'CAR'
//        return structuringVehicle(typeVehicle, model, numberWheels, engine, loadCapacity, avarageValue, manufacturingTime)
//     }
// }

// class MotorCycleConstruction {
//     static structuring(model: string, numberWheels: number, engine: string, loadCapacity: number) {
//         const avarageValue: number = 15.809
//         const manufacturingTime: number = 8
//         const typeVehicle = 'MOTORCYCLE'
//         return structuringVehicle(typeVehicle, model, numberWheels, engine, loadCapacity, avarageValue, manufacturingTime)
//      }
// }

// class TruckConstruction {
//     static structuring(model: string, numberWheels: number, engine: string, loadCapacity: number) {
//         const avarageValue: number = 576.178
//         const manufacturingTime: number = 20
//         const typeVehicle = 'TRUCK'
//         return structuringVehicle(typeVehicle, model, numberWheels, engine, loadCapacity, avarageValue, manufacturingTime)
//      }
// }


// console.log(MotorCycleConstruction.structuring("fiat", 4, "4 cavalos", 200))
// console.log(CarConstruction.structuring("Fiat", 4, "1000 kavalos", 2000))