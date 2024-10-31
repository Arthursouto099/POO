const rl = require("readline-sync")

function soma(a , b) {
   console.log(a + b)
}


function somaEAindaMandaBeijo(calback) {
    let a = rl.questionInt("numero 1: ")
    let b = rl.questionInt("numero 2: ")

    calback(a, b)
}

somaEAindaMandaBeijo(soma)