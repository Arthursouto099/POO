// class Cliente {
//     id: number = 0
//     nome: string
//     idade: number
//     cpf: string
//     compras: Array<Produto> = []
//     qtdCompras: number = 0
//     possuiBrinde: Array<Brinde> = []
    
//     constructor(nome: string, cpf: string, idade: number) {
//         this.nome = nome
//         this.idade = idade
//         this.cpf = cpf
        
//     }

//     setId(id: number): number {
//        return this.id = id
//     }

 

//    comprarProduto(padaria: Padaria, nomeDoProduto: string) {
//     console.log(padaria.estoque)
//     let p = undefined
     
//     for(let i = 0; i < padaria.estoque.length; i++) {
//         if(padaria.estoque[i].nome === nomeDoProduto) {
//             p = padaria.estoque[i]
//             this.compras.push(p)
//             this.qtdCompras += 1
//         }
//     }

//     if(p === undefined) {
//         console.log("produto não encontrado")
//     }
//     }
//  }



// class Produto {
//     id: number = 0
//     nome: string
//     tipo: string
//     valor: number


//     constructor(nome: string, tipo: string, valor: number) {
//         this.nome = nome
//         this.tipo = tipo
//         this.valor = valor
//     }
    
// }


// class Brinde {
//     nome: string
//     tipo: string
//     duracao: number

//     constructor(nome: string, tipo: string, duracao: number) {
//         this.nome = nome
//         this.tipo = tipo
//         this.duracao = duracao
//     }
// }


// class Mantimento {
//     id: number = 0
//     nome: string
//     tipo: string
//     quantidade: number 
//     valor: number

//     constructor(nome: string, tipo: string, quantidade: number, valor: number) {
//         this.nome = nome
//         this.tipo = tipo
//         this.quantidade = quantidade
//         this.valor = valor
//     }
// }


// class Padaria {
//     nome: string
//     estoque: Array<Produto>
//     clientes: Array<Cliente>
//     mantimentos: Array<Mantimento>

    
//     constructor(nome: string) {
//         this.nome = nome
//         this.estoque = []
//         this.clientes = []
//         this.mantimentos = []
//     }


//     cadastrarCliente(nome: string, idade: number, cpf: string) {
//         const newCliente = new Cliente(nome, cpf, idade)
//         newCliente.setId(this.clientes.length + 1)
//         this.clientes.push(newCliente)
//     }

//     cadastrarProdutos(nome: string, tipo: string, valor: number) {
//         const newProduto = new Produto(nome, tipo, valor)
//         newProduto.id = this.estoque.length + 1
//         this.estoque.push(newProduto)
//     }

//     cadastrarMantimento(nome: string, tipo: string, qtd: number, valor: number) {
//         const newMantimento = new Mantimento(nome, tipo, qtd, valor)
//         newMantimento.id = this.mantimentos.length + 1
//         this.mantimentos.push(newMantimento)
//     }


//     brinde(nome: string, tipo: string, duracao: number) {
//         for(let i = 0; i < this.clientes.length; i++) {
//             if(this.clientes[i].qtdCompras > 4) {
//                 const newBrinde = new Brinde(nome, tipo, duracao)
//                 this.clientes[i].possuiBrinde.push(newBrinde)
//                 this.clientes[i].qtdCompras = 0
//             }
//         }
//     }


// }


// const padaria = new Padaria("padaria seu ze")

// padaria.cadastrarCliente("tutu", 16, "1423698-44")

// padaria.cadastrarProdutos("pao", 'trigo', 7.77)
// padaria.cadastrarProdutos("pao", 'trigo', 7.77)
// padaria.cadastrarProdutos("pao", 'trigo', 7.77)


// padaria.cadastrarProdutos("arroz", "trigo", 780)
// padaria.cadastrarProdutos("arroz", "trigo", 780)

// padaria.clientes[0].comprarProduto(padaria, "arroz")





// padaria.clientes[0].comprarProduto(padaria, "pao")
// padaria.brinde("desconto massa", "DESCONTO", 7)


// console.log(padaria.clientes[0])
// console.log(padaria.estoque)

