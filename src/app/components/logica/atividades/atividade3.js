// 🧪 Exercício 3

// 👉 Mostre apenas números menores que 10

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10]

// o for vai percorrer minha lista e o I vai começar em zero e I for menor que numeros.lenth vai me mostrar os valores do array, e i++ icrementa + 1
for (let i = 0; i < numeros.length; i++) {
    //Minha condição se numeros for menores que 10 imprima
    if (numeros[i] < 10){
        console.log(numeros[i])
    } 
}