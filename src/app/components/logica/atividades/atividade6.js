// ⚔️ NÍVEL 2 – CONDIÇÕES COMPOSTAS
// 🧪 Exercício 6

// 👉 Mostre números maiores que 5 e menores que 12

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

// Guardar valores do mey array
let resultado = []

// o for vai percorrer minha lista e o I vai começar em zero e I for menor que numeros.lenth vai me mostrar os valores do array, e i++ icrementa
for (let i = 0; i < numeros.length; i++) {
    
    //Minha condição se numeros fo maior que 5 e menor que 12 imprima
    if(numeros[i] > 5 && numeros[i] < 12) {
        resultado.push(numeros[i])
    }
}

console.log('Meu resultado é: ', resultado)