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
    treino: Array<Treino> = []
    instrutor: Instrutor | null = null
    atividade: Atividade | null = null
    plano: Plano
    

    constructor(nome: string, idade: number, plano: Plano) {
        this.nome = nome
        this.idade = idade
        this.plano = plano
 
    }

}


class Academia {

    instrutores: Array<Instrutor> = []
    alunosGeral: Array<Aluno> = []



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


    


}

const a1 = new Aluno("TAVARES", 16, Plano.Mensal)
