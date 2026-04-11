// 🧪 Exercício 9

// 👉 Mostre números maiores que 5 ou menores que 3

// 💡 dica: use ||

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

// Guardar valores do mey array
let resultado = []

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 5 || numeros[i] < 3) {
        resultado.push(numeros[i])
    }
}

console.log(resultado)