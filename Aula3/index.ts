
// // Classe Padrão
// class Item {
//     constructor(public tipo: string, public nome: string) {}

//     equiparItem(obj: Personagem): void {console.log("Item não definido")}
//     usarItem(obj: Personagem): void {console.log("Item não definido")}

// }


// // Classe especializada para item de dano

// class Arma extends Item {

//     constructor(public tipo: string, public nome: string, public dano: number) {
//         super(tipo, nome)
//     }

//     equiparItem(obj: Personagem): void {
//         obj.forca += this.dano
//         console.log(`Arma ${this.nome} equipada, seu dano aumentou ${this.dano} pontos.`)
//     }
// }



// // Classe especializada para item tipo cura
// class Cura extends Item {
//     constructor(public tipo: string, public nome: string, public vida: number) {
//         super(tipo, nome)
//     }

//     usarItem(obj: Personagem): void {
//         obj.vida += this.vida
//         console.log(`Você recuperou ${this.vida} de hp` )
//     }

    
// }





// class Personagem {
//     inventario: Array<Item> = []
 
//     constructor(public nome: string, public idade: number, public forca: number, public vida: number, public defesa: number) { }


   
//     atacar(obj: Personagem): void
//     atacar(obj: Personagem, obj2: Personagem): void
//     atacar(obj: Personagem, obj2: Personagem, obj3: Personagem): void 



//     atacar(obj: Personagem, obj2?: Personagem, obj3?: Personagem) {
//         if(obj2 === undefined) {
//             console.log(`Você atacou ${obj.nome} e causou ${this.forca} de danoo`)
//         }

//         if(obj3 === undefined ) {
//             if(obj2 !== undefined) {
//                 console.log(`Você atacou ${obj.nome} e causou ${this.forca} de danoo`)
//                 console.log(`Você atacou ${obj2.nome} e causou ${this.forca} de danoo`)
//             }
//         }

//         if(obj2 && obj3 !== undefined) {
//             console.log(`Você atacou ${obj.nome} e causou ${this.forca} de dano`)
//             console.log(`Você atacou ${obj2.nome} e causou ${this.forca} de dano`)
//             console.log(`Você atacou ${obj3.nome} e causou ${this.forca} de dano`)
//         }
//     }

    
   

    

//     // metodos padrões
//     equiparItemDoInventario(indice: number) {
//       this.inventario[indice].equiparItem(this)
//     }

//     adiconarItem(item: Item) {
//         this.inventario.push(item)
//     }

    
// }


// class Orc extends Personagem {
//     constructor(public nome: string, public idade: number, public forca: number, public vida: number, public defesa: number) {
//         super(nome, idade, forca, vida, defesa)

//     }



// }


// const p1 = new Orc("tata", 17, 5, 10, 0 )
// const p2 = new Personagem("tavares", 17, 7, 10, 0)
// const item1 = new Arma("Arma", "espada divina", 5)

// p1.atacar(p2)


