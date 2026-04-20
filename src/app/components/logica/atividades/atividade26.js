// 🧪 Exercício 26

// 👉 Remova números repetidos de um array

let numeros = [1, 2, 2, 5, 8, 12, 3, 9, 9, 11, 10, 10, 13, 14, 18]

// let result = [...new Set(numeros)]
// console.log(result)

let result = []

// for (let i = 0; i < numeros.length; i++) {
//     if(!result.includes(numeros[i])){
//         result.push(numeros[i])
//     }
// }

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]
    
    if(!result.includes(numero) && numero > 2) {
        result.push(numero)
    }
}
console.log(result)