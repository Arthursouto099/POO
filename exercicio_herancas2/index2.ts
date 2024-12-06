

// class Food {
//     followup: string = ''
//     constructor( public price: number, public peso: number, public preparationMode: string, public ingredients: string[] ) {}
// }


// class Pizza extends Food {
//     constructor( public price: number, public peso: number,public preparationMode: string, public ingredients: string[] ,public quantityFlavors: number, public flavors: string[] ) {
//         super(price, peso, preparationMode, ingredients)
//     }
// }


// class Hamburger extends Food {
//     constructor( public price: number, public peso: number, public preparationMode: string, public ingredients: string[], public quantityMeats: number ) {
//         super(price, price, preparationMode, ingredients)
//     }
// }


// class Client {
//     dishes: Array<Food> = []
//     constructor(public name: string, public cpf: string) {}
// }


// class RestaurantProcess {
//     static order(client: Client, dishes: Array<Food>, followup: Array<string> ): void {
//         for(let food of dishes) {client.dishes.push(food)}
//         for(let i = 0; i < followup.length; i ++) {dishes[i].followup = followup[i]}
//     }
// }


// const cliente1 = new Client("tavares", "142568987")
// const pizza = new Pizza(89, 10, "forno", ["molho", "tomate", "queijo"], 4, ["calabresa", "quatro queijos", "frango", "chocolate"])
// const hambur = new Hamburger(70, 5, "ter pão", ["carne", "queijo", "pão"], 2)

// RestaurantProcess.order(cliente1, [pizza, hambur], ["muitooo queijo", "mais uma carne"])

// console.log(pizza)
// console.log(hambur)
// console.log(cliente1)