// 🧪 Exercício 24

// 👉 Retorne o maior número do array

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

let maior = numeros[0]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
}

console.log(maior)