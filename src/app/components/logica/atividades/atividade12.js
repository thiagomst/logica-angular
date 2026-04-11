// 🧪 Exercício 12

// 👉 Mostre o primeiro número ímpar maior que 5 e pare

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0 && numeros[i] > 5) {
        console.log(numeros[i])
        break
    }
}
