import * as rl from "readline-sync"

class Vehicle {
    constructor(public speed: number, public capacity: number, public routes: Array<string>) {}
}


class Bus extends Vehicle {
    constructor(public speed: number, public capacity: number, public routes: Array<string>) {
        super(speed, capacity, routes)
    }
}

class Plane extends Vehicle {
    constructor(public speed: number, public capacity: number, public routes: Array<string>) {
        super(speed, capacity, routes)
    }
}

class Train extends Vehicle {
    constructor(public speed: number, public capacity: number, public routes: Array<string>) {
        super(speed, capacity, routes)
    }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////


class User {
    constructor(public name: string, public cpf: string) {}
}


class Ticket {
 constructor(public value: number, public vehicle: Vehicle, public passenger: User, public destinationLocation: string) {}
}

function typeDescovery(veh: Bus | Train | Plane) {
    if(veh instanceof Bus) {return 5.99 }
    else if(veh instanceof Train) { return 7.99}
    else if(veh instanceof Plane) {return 200 }
    else {return 0}
}

class TicketOfficeRegistration {
    static passengers: Array<User> = []
    static ticktes: Array<Ticket> = []
    static vehicles: Array<Vehicle> = []
}


class ticketOffice {
    public static buyTicket(user: User, vehicle: Vehicle) {
        console.table(vehicle.routes)
        const route = vehicle.routes[rl.questionInt('escolha uma localidade pelço indice: [0],[1]')]
        const ticket: Ticket = new Ticket(typeDescovery(vehicle), vehicle, user, route)
        TicketOfficeRegistration.passengers.push(user)
        TicketOfficeRegistration.ticktes.push(ticket)
        TicketOfficeRegistration.vehicles.push(vehicle)
        return ticket

    }
}

const us = new User("Joao", '1097--')
const vehicle1 = new Plane(700, 200, ["Japao", "inglaterra", "pqp"])
const usdrip = new User("Julia", '1097--')
const vehicle12 = new Train(700, 200, ["Rio grande", "new orleans", "pqp"])


ticketOffice.buyTicket(usdrip, vehicle12)
ticketOffice.buyTicket(us, vehicle1)
console.log(TicketOfficeRegistration.ticktes)