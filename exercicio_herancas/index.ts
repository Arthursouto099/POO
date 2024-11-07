
enum GeneroFilme {
    Ficcao,
    NaoFiccao
}

enum TipoUser {
    Aluno,
    Professor,
    Funcionario
}


class ItemBiblioteca {
    constructor(public titulo: string, public dataPublicacao: number) {}

    obterInformacoes(): void {}
}

class Livro extends ItemBiblioteca {
    constructor(public titulo: string, public autor: string, public isbn: number, public paginas: number, public genero: GeneroFilme, public dataPublicacao: number) {
        super(titulo, dataPublicacao)
    }

    obterInformacoes(): void {
        console.log("Informações do Livro")
        console.log(`
        ${this.titulo}--->
        ${this.autor}--->
        ${this.isbn}--->
        ${this.paginas}--->
        ${this.genero}--->
        ${this.dataPublicacao}--->
        `)
    }
}


class Revista extends ItemBiblioteca {
    constructor(public titulo: string, public editora: string, public issn: number, public numeroEdicoes: number, public dataPublicacao: number) {
        super(titulo, dataPublicacao)
    }


    obterInformacoes(): void {
        console.log("Informações da Revista")
        console.log(`
           ${this.titulo}
           ${this.editora}
           ${this.issn}
           ${this.numeroEdicoes}
           ${this.dataPublicacao} 
        `)
    }
}


class Usuario {
    itensEmprestados: Array<Livro | Revista> = []

    constructor(public nome: string, public matricula: number, public tipo: TipoUser) {

    }


    obterInformacoes(): void {
        console.log(this)
    }
}

class Emprestimo {


    constructor(public dataEmprestimo: number, public dataDevolucao: number, public usuario: Usuario,  public itemEmprestado: Livro | Revista) {
        
    }

    obterInformacoes(): void {
        console.log(this)
    }
}



class Livraria {
    usuarios: Array<Usuario> = []
    livros: Array<Livro> = []
    revistas: Array<Revista> = []
    emprestimos: Array<Emprestimo> = []

    constructor(public name: string) {}
  
    cadastrarUsuario(nome: string, matricula: number, tipo: TipoUser): void {
        const user: Usuario = new Usuario(nome, matricula, tipo)
        this.usuarios.push(user)
    }

    cadastrarLivro(titulo: string, autor: string, isbn: number, paginas: number, genero: GeneroFilme, dataPublicacao: number): void {
        const livro: Livro = new Livro(titulo, autor, isbn, paginas, genero, dataPublicacao)
        this.livros.push(livro)
    }

    cadastrarRevista( titulo: string, editora: string, issn: number,  numeroEdicoes: number, dataPublicacao: number): void {
        const revista: Revista = new Revista(titulo, editora, issn, numeroEdicoes, dataPublicacao)
        this.revistas.push(revista)
    }

    realizarEmprestimo( dataEmprestimo: number,  dataDevolucao: number, usuario: Usuario,  itemEmprestado: Livro | Revista): void {
        const emprestimo: Emprestimo = new Emprestimo(dataEmprestimo, dataDevolucao, usuario, itemEmprestado)
        usuario.itensEmprestados.push(itemEmprestado)
        this.emprestimos.push(emprestimo)
    }

}


const livrosMais: Livraria = new Livraria("livrosmais")
livrosMais.cadastrarUsuario("tavares", 1863910, TipoUser.Aluno)
livrosMais.cadastrarLivro("vingança do world", "tata", 10897079, 305, GeneroFilme.Ficcao, 11092007)
livrosMais.realizarEmprestimo(10112008, 10172008, livrosMais.usuarios[0], livrosMais.livros[0])
livrosMais.cadastrarRevista("Melhores play do fortnite", "vagzoide", 1222222, 5, 10072020)
livrosMais.realizarEmprestimo(10112008, 10172008, livrosMais.usuarios[0], livrosMais.revistas[0])

console.log(livrosMais.usuarios)

livrosMais.livros[0].obterInformacoes()