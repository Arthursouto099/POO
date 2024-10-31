enum Trabalho {
    Jardineiro,
    Zelador,
    Porteiro,
    sindico
}

enum Motivo {
    Aluguel,
    PagarFuncionario,
    PagarEmpresaParceira
}

enum TipoAreas {
    Lazer,
    Moradia
}

enum Servicos {
    Jardinagem,
    Limpeza,
    Portaria
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
    motivo: Motivo
    quemPagou: Morador | Setor | Condominio
    valor: number
    status: string = "não paga"

    constructor(data: string, motivo: Motivo, quemPagou: Morador | Setor | Condominio, valor: number) {
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


   pagarAluguel(data: string, motivo: Motivo, valor: number, condominio: Condominio)  {
     let newCobranca = new Cobranca(data, motivo, this, valor)
     newCobranca.status = "paga"
     this.historicoDePagamentos.push(newCobranca)
     condominio.historicoDePagemntos.push(newCobranca)
   }


   agendarArea(area: Area) {
        if(area.moradorInquilino === null) {
            area.status = "Agendado"
            area.moradorInquilino = this
        }
        
   }

}



class Setor {
    id: number = 0
    nome: string
    trabalhadores: Array<Funcionario> = []
    salarioMedio: number = 0
    area: Trabalho
    HistoricosDePagamentos: Array<Cobranca> = []
 
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

    pagarFuncionarios(data: string, motivo: Motivo, valor: number) {
        const cobranca = new Cobranca(data, motivo, this, valor)
        cobranca.status = 'paga'
        for(let i = 0; i < this.trabalhadores.length; i++) {
            this.trabalhadores[i].historicoDePagamentos.push(cobranca)
            this.HistoricosDePagamentos.push(cobranca)
        }
    }


}

class EmpresaContrada {

    historicoDePagemntos: Array<Cobranca> = []

    constructor(public nome: string, public servico: Servicos, public contato: number, public contrato: string, ) {
        this.nome = nome
        this.servico = servico
        this.contato = contato
        this.contato = contato
    }
}


class Manutencao {
    status: string = 'não paga'

     constructor(public area: Area, public tipo: Servicos, public empresaResponsavel: EmpresaContrada, public data: string, public valor: number, public descricao: string ) {
        this.area = area
        this.tipo = tipo
        this.empresaResponsavel = empresaResponsavel
        this.data = data
        this.valor = valor
        this.descricao = descricao
     }

   
 }

class Area {
    status: string = 'Livre'
    moradorInquilino: Morador | null = null

    constructor(public tipoArea: TipoAreas, public nome: string, public setorResponsavel: Setor) {
        this.tipoArea = tipoArea
        this.nome = nome
        this.setorResponsavel = setorResponsavel
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

    empresasContratadas: Array<EmpresaContrada> = []
    manutencoes: Array<Manutencao> = []
    areas: Array<Area> = []
    historicoDePagemntos: Array<Cobranca> = []
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
   
    lerFeedback() {
        for(let i = 0; i < this.feedbacks.length; i++ ) {
            this.feedbacks[i].status = "Lida"
        }
    }

    lancarCobrancaMorador(data: string, motivo: Motivo, quemPagou: Morador, valor: number) {
      const newCobranca = new Cobranca(data, motivo, quemPagou, valor)
      this.historicoDePagemntos.push(newCobranca)
      quemPagou.historicoDePagamentos.push(newCobranca)

    }


    cadastrarArea( tipoArea: TipoAreas,  nome: string,  setorResponsavel: Setor) {
        let newArea = new Area(tipoArea, nome, setorResponsavel)
        this.areas.push(newArea)
    }

    contratarEmpresa( nome: string,  servico: Servicos,  contato: number,  contrato: string, ) {
        const newEmpresa = new EmpresaContrada(nome, servico, contato, contrato)
        this.empresasContratadas.push(newEmpresa)
    }

    iniciarManutencao(area: Area ,tipo: Servicos, empresaResponsavel: EmpresaContrada, data: string,  valor: number, descricao: string ) {
        const newManutencao = new Manutencao(area, tipo, empresaResponsavel, data, valor, descricao)
        this.manutencoes.push(newManutencao)
    }

    pagarManutencao(data: string, motivo: Motivo, valor: number) {
        const newCobranca = new Cobranca(data, motivo, this, valor)
        newCobranca.status = "paga"
        for(let i = 0; i < this.manutencoes.length; i++) {
            this.manutencoes[i].empresaResponsavel.historicoDePagemntos.push(newCobranca)
            this.manutencoes[i].status = "paga"
            this.historicoDePagemntos.push(newCobranca)
        }

    }




}





// funcionalidades do cadastro de moradores

// funcionalidades do serviços



const portoGaribaldi = new Condominio()

console.log("moradores e apartamentos\n")
portoGaribaldi.cadastrarApartamento(103, "bloco a", 5, 305)
portoGaribaldi.cadastrarMorador("Arthur Santos Tavares Souto", "142-555-159-99", "arthurtavares@gmail.com", 51993953661, portoGaribaldi.apartamentos[0])
portoGaribaldi.moradores[0].cadastrarPet("tutu", "Cachorro")
portoGaribaldi.moradores[0].cadastrarVeiculo("carro", "civic", "BD2909")
console.log(portoGaribaldi.moradores[0])
console.log("////////////////////////////////////////////////////////////////////////////")

console.log("setores\n")
portoGaribaldi.cadastrarSetor("Setor de Limpeza A", Trabalho.Zelador)
portoGaribaldi.setores[0].cadastrarFuncionario("Jõao", "142-333-388-99", "jõao@gmail.com", 519299292, Trabalho.Zelador, 1500)
portoGaribaldi.setores[0].cadastrarFuncionario("Julia", "142-333-388-99", "julia@gmail.com", 519299292, Trabalho.Zelador, 1500)
portoGaribaldi.setores[0].pagarFuncionarios("10/20/2027", Motivo.PagarFuncionario, 1500)
portoGaribaldi.setores[0].obterMediaSalarial()
console.log(portoGaribaldi.setores[0])


console.log("////////////////////////////////////////////////////////////////////////////")
console.log("metodos de pagar ou cobrança\n")
portoGaribaldi.lancarCobrancaMorador("10/10/2020", Motivo.Aluguel, portoGaribaldi.moradores[0], 1700)
portoGaribaldi.moradores[0].pagarAluguel("10/12/2019", Motivo.Aluguel, 1999, portoGaribaldi)
console.log(portoGaribaldi.historicoDePagemntos)


console.log("////////////////////////////////////////////////////////////////////////////")
console.log("metodos da area\n")
portoGaribaldi.cadastrarArea(TipoAreas.Lazer, "Kioski", portoGaribaldi.setores[0])
portoGaribaldi.moradores[0].agendarArea(portoGaribaldi.areas[0])
console.log(portoGaribaldi.areas[0])


console.log("////////////////////////////////////////////////////////////////////////////")
console.log("metodos empresas\n")

portoGaribaldi.contratarEmpresa("limpaTudo", Servicos.Limpeza, 5199299292, "2 anos")
portoGaribaldi.iniciarManutencao(portoGaribaldi.areas[0], Servicos.Limpeza, portoGaribaldi.empresasContratadas[0], "10/12/2089", 4500, "Limparrr tudo")
portoGaribaldi.pagarManutencao("10/12/2089", Motivo.PagarEmpresaParceira, 4500)


console.log("ler feedbacks")

portoGaribaldi.moradores[0].darFeedback(portoGaribaldi.moradores[0], "muito barulhento", "diminuir o barulho", portoGaribaldi)
portoGaribaldi.lerFeedback()
console.log(portoGaribaldi)