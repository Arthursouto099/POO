class darOi {


dar(palavra: string): void
dar(palavra: string, nome: string): void
dar(palavra: string, nome: string,  idade: number): void
// obrigatoriamente todos os paramtros


dar(palavra: string, nome?:string, idade?: number) {
    if(nome === undefined) {
        console.log("oiii")
    }

    else if(idade === undefined) {
        console.log("tutut")
    }

    else if(idade !== undefined) {
        console.log('aaa')
    }
}



}


const teste = new darOi()

teste.dar("oii", "tavares", 45)