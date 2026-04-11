// 🧪 Exercício 4

// 👉 Mostre apenas números pares

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10]

// o for vai percorrer minha lista e o I vai começar em zero e I for menor que numeros.lenth vai me mostrar os valores do array, e i++ icrementa + 1
for (let i = 0; i < numeros.length; i++){
    //Minha condição se numeros forem Pares imprima
    if(numeros[i] % 2 === 1) {
        console.log(numeros[i])
    }
}