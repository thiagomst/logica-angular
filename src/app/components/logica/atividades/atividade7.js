// 🧪 Exercício 7

// 👉 Mostre números pares e maiores que 5

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

// Guardar valores do mey array
let resultado = []

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0 && numeros[i] > 5) {
        resultado.push(numeros[i])
    }
}

console.log('Meu resultado é: ', resultado)