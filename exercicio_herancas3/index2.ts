

class User {
    name: string
    cpf: string

    constructor(name: string, cpf:  string) {
        this.name = name
        this.cpf = cpf
    }
}


class Income {
    user: User
    constructor(user: User,public returnRate: string, public risk: string, public liquidity: string ) {
    this.user = user
   }
   calculateReturn(valueInvested: number, year: number) {
        const random: number = Math.floor(Math.random() * (6 + 1) )
        let invested: number = valueInvested *  year

        if(this.risk === 'alto') {if(random === 6 || random === 5 || random === 4 ) { 
            console.log("1/3 do valor investido foi perdido")
            invested =  (invested / 3)}
       
        }
        else if(this.risk === 'medio') {if(random === 5 || random === 4) {
            console.log("1/3 do valor investido foi perdido")
            invested = (invested / 3)
            
        }}

        const roi: number = ((invested - valueInvested) / valueInvested) * 100
        console.log(`retorno {ROI} = ${roi}%`)
   }
}

class VariableIncome extends Income {
    constructor(user: User,public returnRate: string, public risk: string, public liquidity: string ) {
        super(user, returnRate, risk, liquidity)
    }
}

class FixedIncome extends Income {
    constructor(user: User,public returnRate: string, public risk: string, public liquidity: string ) {
        super(user, returnRate, risk, liquidity)
    }
}

class Multimarket extends Income {
    constructor(user: User,public returnRate: string, public risk: string, public liquidity: string ) {
        super(user, returnRate, risk, liquidity)
    }
}

const user: User = new User("tavares", "666")
const income = new VariableIncome(user, '10%', 'alto', 'alto')
income.calculateReturn(400000, 4)



