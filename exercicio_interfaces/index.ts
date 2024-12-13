interface IPaymentsMethods {

    payPix(purchase: User, valueInBalance: number, enterprise: Enterprise, item: Array<Product>): number
    payCard(purchase: User, valueInCard: number, card: Card, enterprise: Enterprise, item: Array<Product>): number
    payMoney(purchase: User, valueInMoney: number, enterprise: Enterprise, item: Array<Product>): number

}

class Invoice {
    userName: string
    companyName: string
    item: Array<string>
    date: Date
    paymentMethod: Card | 'pix' | 'money'

    constructor(userName: string, companyName: string, item: Array<string>, date: Date, paymentMethod: Card | 'pix' | 'money') {
        this.userName = userName
        this.companyName = companyName
        this.item = item
        this.date = date
        this.paymentMethod = paymentMethod
    }
}

class Product {
    productName: string
    quantity: number
    price: number
    company: string


    constructor(productName: string, quantity: number, price: number, company: string) {
        this.productName = productName
        this.quantity = quantity
        this.company = company
        this.price = price
    }


}

abstract class PaymentsMethods implements IPaymentsMethods {

    private _balance: number = 0
    private _Invoices: Array<Invoice> = []

    public getBalance(): number {
        return this._balance
    }

    public setBalance(value: number): number {
        return this._balance = value
    }

    public getInvoices() {
        return this._Invoices
    }
    
    public addBalance(value: number) {
        this._balance += value
    }

    private listItens(listProducts: Array<Product>) {
        let listProductsInString: Array<string> = []
        listProducts.forEach(product => {
            listProductsInString.push(product.productName)
        })

        return listProductsInString
    }

    payPix(purchase: User, valueInBalance: number, enterprise: Enterprise, item: Array<Product>): number {
        if (valueInBalance > this._balance) {
            console.log("Saldo Insuficiente")
            return 0
        }

        enterprise.setBalance(enterprise.getBalance() + valueInBalance)
        this._balance -= valueInBalance

        const listItens = this.listItens(item)


        const invoice = new Invoice(purchase.name, enterprise.nameEnterprise, listItens, new Date(), 'pix')
        this._Invoices.push(invoice)
        console.log(invoice)
        return 1
    }

    payCard(purchase: User, valueInCard: number, card: Card, enterprise: Enterprise, item: Array<Product>): number {
        if (valueInCard > this._balance) {
            console.log("Saldo Insuficiente")
            return 0
        }

        enterprise.setBalance(enterprise.getBalance() + valueInCard)
        this._balance -= valueInCard

        const listItens = this.listItens(item)


        const invoice = new Invoice(purchase.name, enterprise.nameEnterprise, listItens, new Date(), card)
        this._Invoices.push(invoice)
        console.log(invoice)
        return 1
    }

    payMoney(purchase: User, valueInMoney: number, enterprise: Enterprise, item: Array<Product>): number {
        if (valueInMoney > this._balance) {
            console.log("Saldo Insuficiente")
            return 0
        }

        enterprise.setBalance(enterprise.getBalance() + valueInMoney)
        this._balance -= valueInMoney

        const listItens = this.listItens(item)



        const invoice = new Invoice(purchase.name, enterprise.nameEnterprise, listItens, new Date(), 'money')
        this._Invoices.push(invoice)
        console.log(invoice)
        return 1
    }
}

abstract class Enterprise {
    nameEnterprise: string
    private _balance: number = 0

    constructor(nameEnterprise: string) {
        this.nameEnterprise = nameEnterprise
    }

    public getBalance(): number {
        return this._balance
    }

    public setBalance(value: number): number {
        return this._balance = value
    }

    abstract makePurchase(account: Account, products: Product[], paymentMethod: Card | 'pix' | 'money'): number
}

class ConvenienceStore extends Enterprise {
    constructor(nameEnterprise: string) {
        super(nameEnterprise)
    }


    makePurchase(account: Account, products: Product[], paymentMethod: Card | 'pix' | 'money'): number {
        let sum = 0
        products.forEach(p => {
            sum += p.price
        })

        if (paymentMethod instanceof Card) {
            account.payCard(account.holder, sum, account.card, this, products)
            return 1
        }

        else if(paymentMethod === 'pix') {
            account.payPix(account.holder, sum, this, products)
            return 1
        }

        else if(paymentMethod === 'money') {
            account.payMoney(account.holder, sum, this, products)
            return 1
        }

        return 0
    }
}

class Card {
    flag: string
    holder: User
    cvv: number

    constructor(flag: string, holder: User, cvv: number) {
        this.flag = flag
        this.holder = holder
        this.cvv = cvv
    }
}

class User {
    name: string
    age: number
    cpf: string

    constructor(name: string, age: number, cpf: string) {
        this.name = name
        this.age = age
        this.cpf = cpf
    }
}





class Account extends PaymentsMethods {
    holder: User
    card: Card


    constructor(holder: User, flag: string, cvv: number) {
        super()
        this.holder = holder
        this.card = new Card(flag, this.holder, cvv)
    }


}

const u1 = new User('Arthur Santos Tavares Souto', 17, '144.333.111.77')
const account1 = new Account(u1, 'Brandesco', 505)
const convenienceStore = new ConvenienceStore("Casa do pao")
const p1 = new Product("Pão", 1, 500, convenienceStore.nameEnterprise)


account1.addBalance(4000)


convenienceStore.makePurchase(account1, [p1], account1.card )
console.log(account1.getBalance())




