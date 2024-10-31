
class Item {
    constructor(public tipo: string, public nome: string, public dano: number, public defesa: number) {}

    equiparItem(obj: Personagem) {
        obj.forca += this.dano
        obj.defesa += this.defesa
    }

}






class Personagem {
    inventario: Array<Item> = []
 
    constructor(public nome: string, public idade: number, public forca: number, public vida: number, public defesa: number) { }


    atacar(): number {
        console.log(`${this.nome} está atacando e causou ${this.forca} de dano! `)
        return this.forca
    }

    equiparItem(indice: number) {
      this.inventario[indice].equiparItem(this)
    }

    adiconarItem(item: Item) {
        this.inventario.push(item)
    }

    
}


class Orc extends Personagem {
    constructor(public nome: string, public idade: number, public forca: number, public vida: number, public defesa: number) {super(nome, idade, forca, vida, defesa)}

}

const i1 = new Item("arma", "espada sagrada", 5, 2)
const p1 = new Orc("tata", 17, 5, 10, 0 )
p1.adiconarItem(i1)
p1.equiparItem(0)
console.log(p1)

