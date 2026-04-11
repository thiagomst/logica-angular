// 🧪 Exercício 15

// 👉 Conte quantos números são pares

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

let contador = 0

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        contador ++
    }
}

console.log(contador)