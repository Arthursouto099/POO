enum Trabalho {
    Jardineiro,
    Zelador,
    Porteiro,
    sindico
}




class Pessoa {
    nome: string
    cpf: string 
    email: string
    numero: number


    constructor(nome: string, cpf: string, email: string, numero: number) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.numero = numero
    }


}

class Apartamento {
    id: number = 0
    numero: number
    bloco: string
    andar: number
    morador: Morador | null = null
    vaga: number 

    constructor(numero: number, bloco: string, andar: number, vaga: number) {
        this.numero = numero
        this.bloco = bloco
        this.andar = andar
        this.vaga = vaga
    }
}

class Cobranca {
    data: string
    motivo: string
    quemPagou: Morador | Setor
    valor: number

    constructor(data: string, motivo: string, quemPagou: Morador | Setor, valor: number) {
        this.data = data
        this.motivo = motivo
        this.quemPagou = quemPagou
        this.valor = valor
    }
}

class Feedback {
    quemEnviou: Morador | Funcionario 
    motivo: string
    sugestao: string
    status: string = "não lida"
    condominio: Condominio

    constructor(quemEnviou: Morador | Funcionario, motivo: string, sugestao: string, condominio: Condominio) {
        this.quemEnviou = quemEnviou
        this.motivo = motivo
        this.sugestao = sugestao
        this.condominio = condominio
    }

}

class Pet {
    nome: string
    raca: string

    constructor(nome: string, raca: string) {
        this.nome = nome
        this.raca = raca
    }
}

class Veiculo {
    tipo: string
    modelo: string
    placa: string
    vaga: number = 0

    constructor(tipo: string, modelo: string, placa: string) {
        this.tipo = tipo
        this.modelo = modelo
        this.placa = placa
    }
}


class Morador extends Pessoa {
    id: number = 0
    apartamento: Apartamento 
    possuiPet: boolean = false
    possuiVeiculo: boolean = false
    pets: Array<Pet> = []
    veiculos: Array<Veiculo> = []
    historicoDePagamentos: Array<Cobranca> = []
      

    

    constructor(nome: string, cpf: string, email: string, numero: number, apartamento: Apartamento) {
        super(nome, cpf, email, numero)
        this.apartamento = apartamento     
        
    }


   cadastrarPet(nome: string, raca: string) {
        const newPet: Pet = new Pet(nome, raca)
        this.possuiPet = true
        this.pets.push(newPet)
   

   }

   cadastrarVeiculo(tipo: string, modelo: string, placa: string) {
        const newVeiculo: Veiculo = new Veiculo(tipo, modelo, placa)
        this.possuiVeiculo = true
        newVeiculo.vaga = this.apartamento.vaga
        this.veiculos.push(newVeiculo)
   }


   darFeedback(quemEnviou: Morador | Funcionario, motivo: string, sugestao: string, condominio: Condominio) {
        const newFeedBack = new Feedback(quemEnviou, motivo, sugestao, condominio)
        condominio.feedbacks.push(newFeedBack)
   }

}



class Setor {
    id: number = 0
    nome: string
    trabalhadores: Array<Funcionario> = []
    salarioMedio: number = 0
    area: Trabalho
    pagamentos: Array<Cobranca> = []
 
    constructor(nome: string, area: Trabalho) {
        this.nome = nome
        this.area = area
    }

    obterMediaSalarial() {
        let soma = 0
        for(let trabalhador of this.trabalhadores) {
            soma += trabalhador.salario
        }
        this.salarioMedio = soma / this.trabalhadores.length
        console.log(this.salarioMedio)
    }


    cadastrarFuncionario(nome: string, cpf: string, email:string, numero: number, funcao: Trabalho, salario: number) {
        const newFuncionario = new Funcionario(nome, cpf, email, numero, funcao,  salario, this)
        newFuncionario.id = this.trabalhadores.length + 1
        this.trabalhadores.push(newFuncionario)


    }

    pagarFuncionarios(data: string, motivo: string, valor: number) {
        const cobranca = new Cobranca(data, motivo, this, valor)
        for(let i = 0; i < this.trabalhadores.length; i++) {
            this.trabalhadores[i].historicoDePagamentos.push(cobranca)
            this.pagamentos.push(cobranca)
        }
    }


}


class Funcionario extends Pessoa {
    id: number = 0
    funcao: Trabalho
    salario: number
    setor: Setor
    historicoDePagamentos: Array<Cobranca> = []



    constructor(nome: string, cpf: string, email:string, numero: number, funcao: Trabalho, salario: number, setor: Setor) {
        super(nome, cpf, email, numero)
        this.funcao = funcao
        this.salario = salario
        this.setor = setor

    }

    darFeedback(quemEnviou: Morador | Funcionario, motivo: string, sugestao: string, condominio: Condominio) {
        const newFeedBack = new Feedback(quemEnviou, motivo, sugestao, condominio)
        condominio.feedbacks.push(newFeedBack)
   }
}

class Condominio {

    apartamentos: Array<Apartamento> = []
    moradores: Array<Morador> = []
    setores: Array<Setor> = []
    feedbacks: Feedback[] = []



    cadastrarApartamento(numero: number, bloco: string, andar: number, vaga: number) {
        const newApartamento = new Apartamento(numero, bloco, andar, vaga)
        newApartamento.id = this.apartamentos.length + 1
        this.apartamentos.push(newApartamento)
    }


    cadastrarMorador(nome: string, cpf: string, email: string, numero: number, apartamento: Apartamento) {
        let newMorador = new Morador(nome, cpf, email, numero, apartamento)
        newMorador.id = this.moradores.length + 1
        apartamento.morador = newMorador
        this.moradores.push(newMorador)
    }

    cadastrarSetor(nome: string, area: Trabalho) {
        let newSetor = new Setor(nome, area)
        newSetor.id = this.setores.length + 1
        this.setores.push(newSetor)
    }



}





// funcionalidades do cadastro de moradores
const condominio = new Condominio()
condominio.cadastrarApartamento(180, "bloco A", 3, 105)
condominio.cadastrarMorador("tavares", "142-333-999-88", "arthur@gmail.com", 51992554789, condominio.apartamentos[0])
condominio.moradores[0].cadastrarPet("julio", "cachorro")
condominio.moradores[0].cadastrarVeiculo("Carro", "ferrari", "980B")
console.log(condominio.moradores)

// funcionalidades do serviços
condominio.cadastrarSetor("setor a", Trabalho.Zelador)
condominio.setores[0].cadastrarFuncionario("joao", "158-789-999-11", "joao@gmail.com", 7990670, Trabalho.Zelador, 1700)
condominio.setores[0].obterMediaSalarial()
condominio.setores[0].pagarFuncionarios("11/08/2025", "pagar funcionarios", 1700)
console.log(condominio.setores[0].trabalhadores)
console.log(condominio.setores)