

class Forma {
    constructor(public nome: string, public cor: string) {}

    calcularArea(): void {}

  
}

class Circulo extends Forma {
    constructor(public nome: string, public cor: string ,public raio: number) {super(nome, cor)}

    calcularArea(): void {
        const area = Math.PI * (this.raio ** 2)
        console.log(area)
    }

}

class Retangulo extends Forma {
    constructor( public nome: string, public cor: string,public base: number, public altura: number) {super(nome, cor)}

    calcularArea(): void {
        const area = this.base * this.altura
        console.log(area)
    }

}

class Triangulo extends Forma {
    constructor(public nome: string, public cor: string,public base: number, public altura: number) {super(nome, cor)}

    calcularArea(): void {
        const area = (this.base * this.altura) / 2
        console.log(area)
    }
    

}