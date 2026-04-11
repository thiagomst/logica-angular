// 🧪 Exercício 14

// 👉 Conte quantos números são maiores que 5

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

let contador = 0

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 5) {
        contador++
    }
}

console.log(contador)