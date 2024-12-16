enum TypesAccounts {
    Current = 'Current',
    Savings = 'Savings',
    Investment = 'Investment'
}


abstract class Person {
    name: string
    age: number
    cpf: string

    constructor(name: string, age: number, cpf: string) {
        this.name = name
        this.age = age
        this.cpf = cpf
    }
}

abstract class Account {
    user: User | null = null
    private balance: number = 0
    typeAccount: TypesAccounts

    constructor(user: User, typeAccount: TypesAccounts) {
        if (user.mainAccount === null) {
            user.mainAccount = this
            this.user = user
        }

        this.typeAccount = typeAccount

    }

    getBalance(): number {
        return this.balance
    }

    setBalance(value: number): number {
        return this.balance = value
    }

    addBalance(initialValue: number): number {
        return this.balance += initialValue
    }


    abstract withdraw(valueToWitdraw: number): number


    transferMoney(account: Account, value: number) {
        if (value > this.balance) {
            console.log('Saldo insuficiente')
        }
        else if (value > 499999) {
            console.log("Limite de Tranferencia atingido.")
        }

        this.balance -= value
        account.balance += value
        return 'Tranferencia reallizada com sucesso'
    }
}

class AccountInvestment extends Account {
    private investments: Array<Investment> = []

    constructor(user: User, typeAccount: TypesAccounts) {
        super(user, typeAccount)
    }

    
    public calculateRoi(): void {
        if(this.investments.length > 0) {
            this.investments.forEach(investment => {
               console.log({Investment: investment, Roi: `${this.calculateReturn(investment.valueInvested, investment.timeInYears, investment.risk)}%` })
            })
        }
       
    }


    makeInvestment(nameInvestment: string, valueInvested: number, dateInvestment: Date, risk: 'alto' | 'medio' | 'baixo', typeInvestment: string, timeInYears: number) {
        if (valueInvested > this.getBalance()) {
            console.log("Você não possui saldo suficiente")
            return 'Investimento não realizado'
        }
        this.setBalance(this.getBalance() - valueInvested)
        const newInvestment = new Investment(nameInvestment, valueInvested, dateInvestment, risk, typeInvestment, timeInYears)
        this.investments.push(newInvestment)
        return "Investimento realizado com sucesso"
    }


    private calculateReturn(valueInvested: number, year: number, risk: 'alto' | 'medio' | 'baixo') {
        const random: number = Math.floor(Math.random() * (6 + 1))
        let invested: number = valueInvested * year

        if (risk === 'alto') {
            if (random === 6 || random === 5 || random === 4) {
                console.log("1/3 do valor investido foi perdido")
                invested = (invested / 3)
            }

        }
        else if (risk === 'medio') {
            if (random === 5 || random === 4) {
                console.log("1/3 do valor investido foi perdido")
                invested = (invested / 3)

            }
        }

        const roi: number = ((invested - valueInvested) / valueInvested) * 100
        return roi
    }



    withdraw(valueToWitdraw: number): number {
        if (valueToWitdraw > 2000) {
            console.log("Você ultrapassou o limite diario de 2000R$")
            return 0
        }
        else if (valueToWitdraw > this.getBalance()) {
            console.log("Você está sacando mais dinheiro do que possui em saldo")
            return 0
        }

        console.log("Saque feito com sucesso", `Você sacou ${valueToWitdraw}`)
        const valueNow = this.getBalance() - valueToWitdraw
        console.log(`Seu saldo atual é de ${valueNow}`)
        return this.setBalance(valueNow)
    }


    withdrawInInvestment(valueToWitdraw: number, nameInvestment: string): void  {

      this.investments.forEach(investment => {
        if(investment.nameInvestment === nameInvestment) {
           
           if(investment.valueInvested < valueToWitdraw) {
            return console.log("Saldo insuficiente no investimento.")
            
           }

           investment.valueInvested -= valueToWitdraw
           console.log(`Você sacou ${valueToWitdraw}R$ do investimento ${investment.nameInvestment} `)
           return console.log("operação feita com sucesso")

        }
      })

      console.log('!')
      
    }

}

class Savings extends Account {
    private _saivings: Investment | null = null
    constructor(user: User, typeAccount: TypesAccounts) {
        super(user, typeAccount)
    }
    
    createSavings(valueInvested: number, dateInvestment: Date, timeInYears: number) {
        const newInvestment = new Investment("Poupança", valueInvested, dateInvestment, 'baixo', 'Poupança', timeInYears )
        this._saivings = newInvestment
    }

    addSavings(value: number): number {
        if(value > this.getBalance()) {
            console.log("Operação falhou, saldo insuficiente")
            return 0
        }
        if(this._saivings !== null) {
            this._saivings.valueInvested += value
            console.log("Operação feita com sucesso")
            return 1
        }
        return 0
     
    }

    getSavings() {
      return this._saivings
     

    }

    withdraw(valueToWitdraw: number): number {
        if(this._saivings !== null && valueToWitdraw > this._saivings.valueInvested) {
            console.log("Saldo insuficiente")
            return 0
        }

        else if(this._saivings !== null) {
            this._saivings.valueInvested -= valueToWitdraw
            console.log("Sucesso na operação")
            console.log(`O saldo atual da poupança é de ${this._saivings.valueInvested}`)
            return 1
        }

        return 0
   
    }
}



class AccountCurrent extends Account {


    constructor(user: User, typeAccount: TypesAccounts) {
        super(user, typeAccount)
    }


    withdraw(valueToWitdraw: number): number {
        if (valueToWitdraw > 2000) {
            console.log("Você ultrapassou o limite diario de 2000R$")
            return 0
        }
        else if (valueToWitdraw > this.getBalance()) {
            console.log("Você está sacando mais dinheiro do que possui em saldo")
            return 0
        }

        console.log("Saque feito com sucesso", `Você sacou ${valueToWitdraw}`)
        const valueNow = this.getBalance() - valueToWitdraw
        console.log(`Seu saldo atual é de ${valueNow}`)
        return this.setBalance(valueNow)
    }
}


class Investment {
    nameInvestment: string = ''
    valueInvested: number = 0
    dateInvestment: Date
    typeInvestment: string | null = null
    risk: 'alto' | 'medio' | 'baixo' = 'alto'
    timeInYears: number

    constructor(nameInvestment: string, valueInvested: number, dateInvestment: Date, risk: 'alto' | 'medio' | 'baixo', typeInvestment: string, timeInYears: number) {
        this.nameInvestment = nameInvestment
        this.valueInvested = valueInvested
        this.dateInvestment = dateInvestment
        this.typeInvestment = typeInvestment
        this.risk = risk
        this.timeInYears = timeInYears
    }

}



class User extends Person {
    mainAccount: Account | null = null
    _accounts: Array<Account> = []

    constructor(name: string, age: number, cpf: string, account: Account | null) {
        super(name, age, cpf)
        if (account !== null && account.user === null) {
            this.mainAccount = account
            if (this.mainAccount !== null) { this.mainAccount.user = this }
            this._accounts.push(this.mainAccount)
        }
    }

    public addAcount(account: Account): void {
        if (account.user === null) {
            account.user = this
            this._accounts.push(account)
            console.log("Conta atribuida com sucesso...")
        }
        else {
            console.log("A conta indicada ja possui um dono...")
        }

    }
}

const newUser = new User('tavares', 16, '11111.1111.1', null)
const newUser2 = new User('vitor', 23, '1881010111', null)
const newUser3 = new User("julia", 17, '896329869972', null)
const c1 = new AccountInvestment(newUser, TypesAccounts.Investment)
const c2 = new AccountCurrent(newUser2, TypesAccounts.Current)
const c3 = new Savings(newUser3, TypesAccounts.Savings)


c1.addBalance(80000)
c1.makeInvestment("Imobiliaria", 1200, new Date(), "alto", "Imobiliario", 4)
c1.makeInvestment("Tesouro selic", 4000, new Date(), 'medio', 'Tesouro', 6)
c1.withdrawInInvestment(1200, 'Imobiliaria')
c1.calculateRoi()

// c2.addBalance(5000) 
// c2.transferMoney(c1, 1000)
// console.log(c1)

// c3.addBalance(500000)
// c3.createSavings(40000, new Date(), 76)
// c3.addSavings(100)


// console.log(c3.getSavings())