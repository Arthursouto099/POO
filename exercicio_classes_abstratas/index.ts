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
            console.log('Salado insuficiente')
        }
        else if (value > 4.99999) {
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


    makeInvestment(nameInstment: string, valueInvested: number, dateInvestment: Date, risk: 'alto' | 'medio' | 'baixo', typeInvestment: string, timeInYears: number) {
        if (valueInvested > this.getBalance()) {
            console.log("Você não possui saldo suficiente")
            return 'Investimento não realizado'
        }
        this.setBalance(this.getBalance() - valueInvested)
        const newInvestment = new Investment(nameInstment, valueInvested, dateInvestment, risk, typeInvestment, timeInYears)
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
        console.log(`retorno {ROI} = ${roi}%`)
        return roi
    }






    withdraw(valueToWitdraw: number): number {
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
    nameInvstment: string = ''
    valueInvested: number = 0
    dateInvestment: Date
    typeInvestment: string | null = null
    risk: 'alto' | 'medio' | 'baixo' = 'alto'
    timeInYears: number

    constructor(nameInstment: string, valueInvested: number, dateInvestment: Date, risk: 'alto' | 'medio' | 'baixo', typeInvestment: string, timeInYears: number) {
        this.nameInvstment = nameInstment
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
const c1 = new AccountInvestment(newUser, TypesAccounts.Investment)

c1.addBalance(4000)
c1.makeInvestment("Imobiliaria", 1200, new Date(), "alto", "Imobiliario", 4)
c1.calculateRoi()

