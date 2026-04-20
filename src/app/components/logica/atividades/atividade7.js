// 🧪 Exercício 7

// 👉 Mostre números pares e maiores que 5

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

// Guardar valores do mey array
let resultado = []

// o for vai percorrer minha lista e o I vai começar em zero e I for menor que numeros.lenth vai me mostrar os valores do array, e i++ icrementa
for(let i = 0; i < numeros.length; i++) {

    //Minha condição se numeros forem pares e maior que 5 imprima
    if(numeros[i] % 2 === 0 && numeros[i] > 5) {
        resultado.push(numeros[i])
    }
}

console.log('Meu resultado é: ', resultado)