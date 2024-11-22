// classe pai cliente

enum TypeCliente {
    Sporadic = 'Sporadic',
    Contractor = 'Contractor'
}

enum TypeStatus {
    Available = 'Available',
    Enroute = 'En Route',
    UnderMaintenance = 'Under Maintenance'
}

enum deliveryStatus {
    Delivered = 'Delivered',
    OnTheWay = 'On the wey'
}



class Client {
    public name: string
    private cnpj: string
    private adress: string
  

    constructor(name: string, cnpj: string, adress: string) {
        this.name = name
        this.cnpj = cnpj
        this.adress = adress
    }

    public getCnpj(): string {
        return this.cnpj
    }

    public setCnpj(value: string): string {
        return this.cnpj = value
    }

    public getAdress(): string {
        return this.adress
    }

    public setAdress(value: string): string {
        return this.adress = value
    }
}



class ClientContractor extends Client {
    typeClient: TypeCliente
    

    constructor(name: string, cnpj: string, adress: string, typeClient: TypeCliente) {
        super(name, cnpj, adress)
        this.typeClient = typeClient

    }
}



class ClientSporadic extends Client {
    typeClient: TypeCliente
    intervalDate: Date = new Date()

    constructor(name: string, cnpj: string, adress: string, typeClient: TypeCliente) {
        super(name, cnpj, adress)
        this.typeClient = typeClient
        
        
    }
}

class Vehicle {
    plate: string
    model: string
    loadCapacity: number
    typeLoad: string
    status: TypeStatus = TypeStatus.Available
    

    constructor(plate: string,  model: string, loadCapacity: number, typeLoad: string) {
        this.plate = plate
        this.model = model
        this.loadCapacity = loadCapacity
        this.typeLoad = typeLoad
    }

}

class Load {
    weight: number
    volume: number
    type: string
    origin: string
    destiny: string
    boardingDate: Date
    deliveryDate: Date

    constructor( weight: number, volume: number, type: string, origin: string, destiny: string, boardingDate:  Date, deliveryDate: Date ) {
        this.weight = weight
        this.volume = volume
        this.type = type
        this.origin = origin
        this.destiny = destiny
        this.boardingDate = boardingDate
        this.deliveryDate = deliveryDate
    }
}


class Driver {
    constructor(public name: string, private cnh: string, public category: string, public experience: string, public vehicle: Vehicle) {}

    getCnh(): string {
        return this.cnh
    }

    setCnh(value: string): string {
        return this.cnh = value
    }

 }


 class Route {
    constructor(public origin: string, public destiny: string, public distance: number, public estimatedTime: number, public avaliableVehicles: Array<Vehicle>) {}
 }

 class Delivery {
    constructor(public date: string, public client: Client, public load: Load, public vehicle: Vehicle, public driver: Driver, public status: deliveryStatus, public observation: string ) {}
 }

 class Invoice{
    constructor(public number: number, public espeditionDate: Date, public client: Client, public itens: Array<Load>, public totalValue: number, public paymentMethod: string) {}
 }



class TransportSystem {
    private _registeredVehicles: Array<Vehicle> = []
    private _registeredClients: Array<Client> = []
    private _invoices: Array<Invoice> = []

    public getRegisteredVehicles() {
        return this._registeredVehicles
    }

    public getRegisteredClients() {
        return this._registeredClients
    }

    public registerVehicle(vehicle: Vehicle) {
        this._registeredVehicles.push(vehicle)
    }

    public registerClient(client: Client) {
        this._registeredClients.push(client)
    }

    private _issueInvoice(number: number, espeditionDate: Date,  client: Client, itens: Array<Load>, totalValue: number, paymentMethod: string) {
        const invoice: Invoice = new Invoice(number, espeditionDate, client, itens, totalValue, paymentMethod)
        return invoice
    }

    private _deliveryInfo(delivery: Delivery) {
        console.log(`O status da entrega é [${delivery.status.toString()}]`)
        console.log(`
            Motorista: ${delivery.driver.name}
            Cliente: ${delivery.client.name}
            Data: ${delivery.date}
            Carga: ${delivery.load}
            Veiculo: ${delivery.vehicle.model}
            Obeservações: ${delivery.observation}
            `)

    }
    
    public trackDelivery(delivery: Delivery) {
        this._deliveryInfo(delivery)
        console.log("///////////////////")
        const date = new Date()
        const invoice = this._issueInvoice(this._invoices.length + 1, date, delivery.client, [delivery.load], 1500, "paypal"  )
        if(delivery.client instanceof ClientSporadic) {
            delivery.client.intervalDate = date
        }
        this._invoices.push(invoice)
        console.log(invoice)

        
    }



 }

 const c1 = new ClientContractor("vitoria", "667-333-333-88", "casa do carai", TypeCliente.Contractor)
 const vehicle = new Vehicle("719123j", "caminhao", 200, "Cerveja")
 const driver = new Driver("JUlia", "698-393-333-99", "C", "Alta", vehicle)
 const load = new Load(200, 300, "Perigoso", "brasilia", "novo hamburgo", new Date(), new Date() )
 const delivery = new Delivery("12/11/2007", c1, load, driver.vehicle, driver, deliveryStatus.OnTheWay, "deixe ele bemmmm legal")

 const system = new TransportSystem()
 system.trackDelivery(delivery)