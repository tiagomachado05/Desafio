const prompt = require('prompt-sync')()

let numberTyped = Number(prompt("digite um numero: "))

function fibonacci(N) {

    if (N < 0 || !Number.isInteger(N)) {
        throw new Error("Deve ser um NÚMERO inteiro maior ou igual a zero")
    }

    if (N <= 1) return N

    return fibonacci(N - 1) + fibonacci(N - 2)
}

console.log(fibonacci(numberTyped))