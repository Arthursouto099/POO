// Estoque para cada usuario com GRUD
// CLASSE USUARIO 
// CLASSE PRODUTO
// ESTOQUE DO USER 


  export class Usuario {
    nome: string
    idade: number
    cpf: string

    constructor(nome: string, idade: number, cpf: string) {
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    getNome(): string {
        return this.nome
    }

    getIdade(): number {
        return this.idade
    }

    getCpf(): string {
        return this.cpf
    }

    setNome(nome: string): string {
        return this.nome = nome
    }

    setIdade(idade: number): number {
        return this.idade = idade
    }

    setCpf(cpf: string): string {
        return this.cpf = cpf
    }
 }



export class Produto {
    nomeDoProduto: string
    valorDoProduto: number
    tipoDoProduto: string

    constructor(nomeDoProduto: string, valorDoProduto: number, tipoDoProduto: string) {
        this.nomeDoProduto = nomeDoProduto
        this.valorDoProduto = valorDoProduto
        this.tipoDoProduto = tipoDoProduto
    }

    getNomeDoProduto(): string {
        return this.nomeDoProduto
    }

    getValorDoProduto(): number {
        return this.valorDoProduto
    }

    getTipoDoProduto(): string {
        return this.tipoDoProduto
    }


   setNomeDoProduto(nomeDoProduto: string): string {
        return this.nomeDoProduto = nomeDoProduto
    }

   setValorDoProduto(valorDoProduto: number): number {
        return this.valorDoProduto = valorDoProduto
    }

   setTipoDoProduto(tipoDoProduto: string): string {
        return this.tipoDoProduto = tipoDoProduto
    }
}


export class Estoque {
    usuario: Usuario
    ativo: boolean = false
    estoqueDeProdutos: Array<Produto> = []
    
    constructor(usuario: Usuario) {
        this.usuario = usuario
    }

    getUsuario(): Usuario {
        return this.usuario
    }

    getAtivo(): boolean {
        return this.ativo
    }

    setUsuario(user: Usuario): Usuario {
        return this.usuario = user
    }

    setAtivo(ativo: boolean) {
        return this.ativo = ativo
    }

    obterEstoque(): void {
        console.table(this.estoqueDeProdutos)
    }

    ativarEstoque(ativo: boolean): boolean {
        if(this.ativo != ativo) {
            return this.ativo = ativo
        }

        return this.ativo
        
    }

    cadastrarProduto(nomeDoProduto: string, valorDoProduto: number, tipoDoProduto: string){
        if(this.ativo === true) {
            const produto = new Produto(nomeDoProduto, valorDoProduto, tipoDoProduto)
            this.estoqueDeProdutos.push(produto)
        }
        else {console.log("Ative o estoque antes de realizar essa ação")}
       
    }

    atualizarProdutoEstoque(buscarProdutoPeloNome: string, newNomeDoProduto: string, valorDoProduto: number, tipoDoProduto: string) {
        if(this.ativo) {
        for(let produto of this.estoqueDeProdutos) {
            if(produto.nomeDoProduto === buscarProdutoPeloNome) {
                console.log("Esse é o produto que você escolheu: ")
                console.log(produto)
                console.log("As alterações foram salvas")
                produto.setNomeDoProduto(newNomeDoProduto)
                produto.setValorDoProduto(valorDoProduto)
                produto.setTipoDoProduto(tipoDoProduto)
                console.log(produto)
            }
        }
    } 

    else console.log("Ative o estoque antes de realizar essa ação")

    }

    deleteProduto(nomeDoProduto: string) {
        for(let produto of this.estoqueDeProdutos) {
            if(produto.nomeDoProduto === nomeDoProduto) {
                const index = this.estoqueDeProdutos.indexOf(produto)
                this.estoqueDeProdutos.splice(index, 1)
            }
        }
    }
}



