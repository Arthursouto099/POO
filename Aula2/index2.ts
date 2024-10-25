enum Plano {
    Mensal,
    Semestral,
    Anual
}


enum Atividade {
    Musculacao,
    Natacao,
    Luta
}


class Instrutor {
    id: number = 0
    nome: string
    idade: number
    formacao: string
    alunos: Array<Aluno> = []

    constructor(nome: string, idade: number, formacao: string)  {
        this.nome = nome
        this.idade = idade
        this.formacao = formacao
    }

    exibirAlunos(): void {
        console.log(this.alunos)
    }
}


class Treino {
    nome: string 
    serie: number
    repeticoes: number


    constructor(nome: string, serie: number, repeticoes: number) {
        this.nome = nome
        this.serie = serie
        this.repeticoes = repeticoes
    }
}
 


class Aluno {
    id: number = 0
    nome: string
    idade: number
    treinos: Array<Treino> = []
    instrutor: Instrutor | null = null
    atividade: Atividade | null = null
    plano: Plano
    

    constructor(nome: string, idade: number, plano: Plano) {
        this.nome = nome
        this.idade = idade
        this.plano = plano
 
    }

}

class Equipamento {
    id: number = 0
    nome: string
    preco: number
    qtd: number = 0
    precoTotalItem: number = 0
    fornecdor: Fornecedor | null = null
    

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }
}

class Fornecedor {
    nome: string
    equipamentos: Array<Equipamento> = []

    constructor(nome: string) {
        this.nome = nome
    }

    comprarEquipamento(nome: string, preco: number, qtd: number) {
        const newEquipamento = new Equipamento(nome, preco) 
        newEquipamento.id = this.equipamentos.length + 1
        newEquipamento.qtd = qtd
        newEquipamento.precoTotalItem = newEquipamento.preco * qtd
        newEquipamento.fornecdor = this
        this.equipamentos.push(newEquipamento)

    }
}

class Sala {
    id: number = 0
    nome: string 
    atiividade: Atividade
    equipamentos: Array<Equipamento> = []
    instrutor: Instrutor

    constructor(nome: string, atividade: Atividade, instrutor: Instrutor) {
        this.nome = nome
        this.atiividade = atividade
        this.instrutor = instrutor
        
    }


    adicionarEquipamento(fornecedor: Fornecedor, nomeDoEquipamento: string) {
        for(let i = 0; i < fornecedor.equipamentos.length; i++) {
            if(fornecedor.equipamentos[i].nome === nomeDoEquipamento) {
                let equipamento = fornecedor.equipamentos[i]
                this.equipamentos.push(equipamento)
            }
        }

    }



}


class Academia {

    instrutores: Array<Instrutor> = []
    alunosGeral: Array<Aluno> = []
    salas: Array<Sala> = []
    



    cadastrarAluno(nome: string, idade: number, plano: Plano) {
        const newAluno = new Aluno(nome, idade, plano)
        newAluno.id = this.alunosGeral.length + 1
        this.alunosGeral.push(newAluno)
    }

    cadastrarInstrutor(nome: string, idade: number, formacao: string) {
        const newInstrutor = new Instrutor(nome,idade, formacao)
        newInstrutor.id = this.instrutores.length + 1
        this.instrutores.push(newInstrutor)
    }

    adicionarInstrutorAluno(aluno: Aluno, instrutor: Instrutor) {
        if(aluno.instrutor === null) {
            aluno.instrutor = instrutor
            instrutor.alunos.push(aluno)
        }
    }

    adicionarTreinoALuno(nome: string, serie: number, repeticoes: number, atividade: Atividade, aluno: Aluno) {
        const treino = new Treino(nome, serie, repeticoes)
        if(aluno.atividade === null) {
            aluno.atividade = atividade
        }
        aluno.treinos.push(treino)

    }

    adicionarSala(sala: Sala) {
        sala.id = this.salas.length + 1
        this.salas.push(sala)
        
    }



    


}

const academia = new Academia()
const fornecedorA = new Fornecedor("new club")
academia.cadastrarAluno("tavares", 16, Plano.Mensal)
academia.cadastrarInstrutor("jorge", 27, "sem formação")
academia.adicionarInstrutorAluno(academia.alunosGeral[0], academia.instrutores[0])
academia.adicionarTreinoALuno("Supino", 6, 5, Atividade.Musculacao, academia.alunosGeral[0])
const sala1 = new Sala("sala A", Atividade.Luta, academia.instrutores[0])


fornecedorA.comprarEquipamento("supino inclinado", 7000, 2)
sala1.adicionarEquipamento(fornecedorA, 'supino inclinado')
academia.adicionarSala(sala1)





console.log(academia)