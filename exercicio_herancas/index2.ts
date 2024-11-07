

class Animal {
    constructor(public name: string, public age: number, public species: string, public race: string, public weigth: number) {}

    emitirSom(): void {console.log("som desconhecido")}
}


class Mammal extends Animal {
    constructor(public name: string, public age: number, public species: string, public race: string, public weigth: number, public typePelage: string, public breastfeed: boolean) {
        super(name, age, species, race, weigth)
    }

    emitirSom(): void {
        console.log("uuuuuu aaaaa uaaaaa (claramente um macaco) ")
    }


}

class Bird extends Animal {
    constructor(public name: string, public age: number, public species: string, public race: string, public weigth: number, public spreadWings: number, public typeBeak: string) {
        super(name, age, species, race, weigth)
    }

    emitirSom(): void {
        console.log("pri pri pri pri psiu")
    }


}


class Fish extends Animal {
    constructor(public name: string, public age: number, public species: string, public race: string, public weigth: number, public aquariumSize: number, public typeFeeding: string ) {
        super(name, age, species, race, weigth)
    }

    emitirSom(): void {
        console.log("peixe faz som? (blup blup)")
    }

}

class Zoo {

    animais: Array<Animal> = []

    cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal)
    }


    alimentarAnimal(animal: Animal): void {
        console.log("você está alimentando o animal da especie " + animal.species)
        console.log("ele vai fazer algum barulho !!!!!!")
        animal.emitirSom()
    }

    brincarComAnimal(animal: Animal): void {
        console.log("você está brincando com o animal da especie " + animal.species)
        console.log("o nome dele é " + animal.name)
        console.log("ele ficou animado")
        animal.emitirSom()
    }
 
}

const zoo1 = new Zoo()
const an = new Mammal("macaco", 7, "macaco", "primata", 80, "muiyo pelo", true)
const an2 = new Fish("Nemo", 17, "peixe palhaço", "peixe", 7, 300, "pequenos peixes")

zoo1.cadastrarAnimal(an)
zoo1.cadastrarAnimal(an2)
zoo1.alimentarAnimal(an)
zoo1.brincarComAnimal(an)

console.log(zoo1.animais)