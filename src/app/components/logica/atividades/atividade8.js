// 🧪 Exercício 8

// 👉 Mostre números ímpares e menores que 10

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

// Guardar valores do mey array
let resultado = []

// o for vai percorrer minha lista e o I vai começar em zero e I for menor que numeros.lenth vai me mostrar os valores do array, e i++ icrementa
for(let i = 0; i < numeros.length; i++){

    //Minha condição se numeros forem ímpares e menores que 10 imprima
    if(numeros[i] % 2 === 1 && numeros[i] < 10){
        resultado.push(numeros[i])
    }
}

console.log('O resultado é: ', resultado)