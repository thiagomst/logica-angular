// 🧪 Exercício 2

// 👉 Mostre apenas números maiores que 5

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10]

// o for vai percorrer minha lista e o I vai começar em zero e I for menor que numeros.lenth vai me mostrar os valores do array, e i++ icrementa + 1
for (let i = 0; i < numeros.length; i++) {
    //Minha condição se numeros for maior que 5 imprima
    if(numeros[i] > 5){
        console.log(numeros[i])
    }
}