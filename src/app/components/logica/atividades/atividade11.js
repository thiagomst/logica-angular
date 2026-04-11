// 🧪 Exercício 11

// 👉 Mostre o primeiro número par e pare

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 1) {
        console.log(numeros[i])
        break
    }
}