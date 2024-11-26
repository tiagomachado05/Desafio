const prompt = require('prompt-sync')()

let numberTyped = Number(prompt("digite um numero: "))

function numPrimo(N) {

    if (N <= 1 || !Number.isInteger(N)) {
        throw new Error("Apenas NÚMEROS INTEIROS MAIORES que 1")
    }

    function primo(num) {

        if (num > 1) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0)
                    return false
            }
        }
        return true

    }

    function listaPrimos(number, primos =[]) {
        if (number > N) return primos
        if (primo(number)) {
            primos.push(number)
        }
        return listaPrimos(number + 1, primos)
    }
    return listaPrimos(2)

}

console.log(numPrimo(numberTyped))