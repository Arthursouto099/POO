// class Pessoa {
//     nome: string
//     cpf: string

//     constructor(nome: string, cpf: string) {
//         this.nome = nome
//         this.cpf = cpf
//     }

// }



// class Carro {
//     marca: string;
//     cor: string;
//     dono: Pessoa

//     constructor(marca: string, cor: string, dono: Pessoa) {
//         this.marca = marca
//         this.cor = cor
//         this.dono = dono
//     }
// }


// class Estacionamento {
//     estacionamento: Carro[]
//     ticketsImpressos: {}[]
    

//     constructor() {
//         this.estacionamento = []
//         this.ticketsImpressos = []
//     }

// }

// class RegistroEstacionamento {


//     static adicionarCarro(carro: Carro, estacionamento: Estacionamento) {
//         estacionamento.estacionamento.push(carro)
//         const newTicket = {
//             id: estacionamento.ticketsImpressos.length + 1,
//             nome: carro.dono.nome,
//             valor: 15.59,
//             cpf: carro.dono.cpf
//         }
//         estacionamento.ticketsImpressos.push(newTicket)
        
//     }

//     static expulsarCarro(carro: Carro, estacionamento: Estacionamento) {
//         const index = estacionamento.estacionamento.indexOf(carro)
//         estacionamento.estacionamento.splice(index, 1)
//         console.log(`${estacionamento.estacionamento[index].dono}, saiu do estabelecimento`)
        
//     }




// }

// const p1 = new Pessoa("tavaes", "14255515999")
// const c1 = new Carro("Fiat", "vermelho", p1)

// const p2 = new Pessoa("tutu", "122-212-213-44")
// const c2 = new Carro("camaro", "vermelho", p2)



// const e1 = new Estacionamento()
// RegistroEstacionamento.adicionarCarro(c1, e1)
// RegistroEstacionamento.adicionarCarro(c2, e1)

// console.log(e1.estacionamento)
// console.log(e1.ticketsImpressos)


// class Cachorro {
//     cor: string
//     pelo: string
//     raca: string

//     constructor(cor: string, pelo: string, raca: string) {
//         this.cor = cor
//         this.pelo = pelo
//         this.raca = raca
//     }

//     latir(): string {
//         return "AUAUAUAU"
//     }
// }


// const c1 = new Cachorro("dog", 'cinza', "doberman")

// c1.latir()

// class Musica {
//     nome: string
//     cantor: string
//     ano: number
//     estilo: string

//     constructor(  nome: string,  cantor: string,  ano: number ,   estilo: string) {
//         this.nome = nome
//         this.cantor = cantor
//         this.ano = ano
//         this.estilo = estilo
//     }
// }

// class Aluno {
//     nome: string = ""
//     sobrenome: string = ""
//     peso: number = 0
//     treinos: Array<Treino> = []
//     altura: number = 0

//     constructor(nome: string, sobrenome: string, peso: number, altura: number) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//         this.peso = peso
//         this.altura = altura
//     }

//     calcularImc(): number {
//         return this.peso / (this.altura * 2)
//     }

//     adicionarTreino(treino: Treino ) {
//         this.treinos.push(treino)
//     }

// }

// let aluno = new Aluno("tavares", "souto", 53, 1.80)


// class Academia {
//     alunos: Array<Aluno> = []

//     adicionarAluno(aluno: Aluno) {
//         this.alunos.push(aluno)
//     }

//     adicionarTreinoAluno(aluno: Aluno, descricao: string, serie: number, repticoes: number) {
//         const treino = new Treino(descricao, serie, repticoes)
//         aluno.adicionarTreino(treino)
//     }


// }


// const academia: Academia = new Academia()


// academia.adicionarAluno(aluno)

// console.log(academia.alunos)


// class Treino{
//     descricao: string
//     serie: number
//     repticoes: number

//     constructor(descricao: string, serie: number, repticoes: number) {
//         this.descricao = descricao
//         this.serie = serie
//         this.repticoes = repticoes
//     }
// }

// academia.adicionarTreinoAluno(aluno, "treinar bastnate", 5, 6)

// console.log(aluno.treinos)