const prompt = require('prompt-sync')()

let numberTyped = Number(prompt("digite um numero: "))

function numPrimo(N) {

    if (N <= 1 || !Number.isInteger(N)) {
        throw new Error("Apenas NÚMEROS INTEIROS MAIORES que 1")
    }

    const primos = []

    function primo(num) {

        if (num > 1) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0)
                    return false
            }
        }
        return true

    }

    for (let i = 2; i <= N; i++) {
        if (primo(i)) {
            primos.push(i)
        }
    }
    return primos
}
console.log(numPrimo(numberTyped))