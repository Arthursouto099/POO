import * as rl from "readline-sync"

class User {
    id: number = 0
    constructor(public name: string, public cpf: string) {

    }
}



class Account {
    public sale: number = 0  
  constructor(public user: User) {}

  public Transfer(value: number, account: Account) {
    if(value > this.sale) {
        console.log("Saldo insuficiente...")
    }else {
        this.sale -= value
        account.deposit(value)
    }

   
  }

  public deposit(value: number) {
    this.sale += value
  }

  public draw(value: number) {
    if(value >  this.sale) {
        console.log("Saque não pode ser realizado")
    }
    else {
        this.sale -= value
        console.log("saque feito com sucesso")
    }
  }

}

class Current extends Account {
    constructor(public user: User) {super(user)}
}

class Savings extends Account {
    constructor(public user: User) {super(user)}
    

    surrenderFor30Days() {
      let day = 1
      const  myInterval = setInterval(() => {
        this.sale += 10
        day += 1
        console.log(`Day${day} result === ${this.sale}`)
        if(day === 30) {
            clearInterval(myInterval)
        }
      }, 400);
    }
}

class Investment extends Account {
    constructor(public user: User) {super(user)}


    compoundInterest(date: number) {
        let day = 0
        const myInterval = setInterval(() => {
            day += 1
            this.sale *= 4
            console.log(`Day${day} result === ${this.sale}R$`)
            if(day === date) {
                clearInterval(myInterval)
            }
        }, 400)
    }


}

// historia de teste// codigo ruim so pra teste(Teste) = Teste, So Um Teste
const u1 = new User("tavares", "000-000-000-00")
const u2 = new User("vitoria", "000-000-000-00")
const ac1 = new Current(u1)
const ac2 = new Savings(u1)
const ac3 = new Investment(u1)
const ac4 = new Current(u2)
const ac5 = new Savings(u2)
const ac6 = new Investment(u2)



ac1.deposit(100)
ac1.Transfer(100, ac4)
ac1.deposit(500)
ac1.Transfer(20, ac3)
ac3.compoundInterest(2)




const myTest = setInterval(() => {
    rl.question("clique para continar")
    ac3.Transfer(5785785, ac1)
    console.log(ac1, ac4)
    clearInterval(myTest)

}, 13000)
