enum Season {
    Winter,
    Summer,
 
 

}

class Clothing {
    constructor(public color: string, public size: number, public material: string, public price: number) {}
    simulatePurchase(season: Season): void {}
    
}


class Tshirt extends Clothing{
    constructor(public color: string, public size: number, public material: string, public price: number,public shirtCollar: string, public tshirtType: string ) {
        super(color, size, material, price )
    }

    simulatePurchase(season: Season): void {
        if(season === Season.Summer) {
            console.log("Opa você ganhou o desconto de verão")
            console.log(`O preço abaixou de ${this.price} para ${this.price - this.price * 0.05  }`)
            console.log("Desconto de " + this.price * 0.05 + " %")
        }
        else console.log("nenhum desconto aplicado, compra realizada com sucesso")
    }

    
}

class Pants extends Clothing {
    constructor(public color: string, public size: number, public material: string, public price: number ,public pantsType: string, public fit: string) {
        super(color, size, material, price)
    }

    simulatePurchase(season: Season): void {
        if(season === Season.Winter) {
            console.log("Opa você ganhou o desconto de inverno")
            console.log(`O preço abaixou de ${this.price} para ${this.price - this.price * 0.09  }`)
            console.log("Desconto de " + this.price * 0.09 + " %")
        }
        else console.log("nenhum desconto aplicado, compra realizada com sucesso")
    }
}


const camisa: Tshirt = new Tshirt("blue", 58, "material", 80, "grossa", "oversize")
camisa.simulatePurchase(Season.Summer)