const prompt = require('prompt-sync')()

let numberTyped = Number(prompt("digite um numero: "))

function fibonacci(N) {

    if (N < 0 || !Number.isInteger(N)) {
        throw new Error("Deve ser um NÚMERO inteiro maior ou igual a zero")
    }

    if (N <= 1) return "fib(" + N + ") = " + N

    let fibo0 = 0
    let fibo1 = 1
    for (let i = 2; i <= N; i++) {
        let sum = fibo0 + fibo1
        fibo0 = fibo1
        fibo1 = sum
    }

    return "fib(" + numberTyped + ") = " + fibo1
}
console.log(fibonacci(numberTyped))