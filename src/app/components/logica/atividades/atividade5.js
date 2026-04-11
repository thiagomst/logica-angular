// 🧪 Exercício 5

// 👉 Mostre apenas números ímpares

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10]

// o for vai percorrer minha lista e o I vai começar em zero e I for menor que numeros.lenth vai me mostrar os valores do array, e i++ icrementa
for(let i = 0; i < numeros.length; i++) {
    // Minha condição se numeros forem Ipares imprima
    if (numeros[i] % 2 !== 0) {
        console.log(numeros[i])
    }
}