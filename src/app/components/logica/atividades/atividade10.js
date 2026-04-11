// 🔥 NÍVEL 3 – CONTROLE DE FLUXO (break)
// 🧪 Exercício 10

// 👉 Mostre o primeiro número maior que 10 e pare o loop

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

// for (let i = 0; i < numeros.length; i++) {
//     if(numeros[i] > 10) {
//         console.log(numeros[i])
//         break
//     }
// }

// Pegar o menor numero

// let menorNumero = null

// for (let i = 0; i < numeros.length; i++) {
//     if(numeros[i] > 10) {
//         if(menorNumero === null || numeros[i] < menorNumero){
//             menorNumero = numeros[i]
//         }
//     }
// }
//console.log(menorNumero)

//pegar o maior numero do meu Array
let maior1 = numeros[0] // começa com zero

// for (let i = 1; i < numeros.length; i++){
//     // compara com os outros numeros do meu array
//     if (numeros[i] > maior) {

//         // Vai atualizando
//         maior = numeros[i]
//     }
// }

//console.log(maior)

// Pegar o segundo maior do array

// let maior = -Infinity
// let segundoMaior = -Infinity

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > maior) {
//         segundoMaior = maior
//         maior = numeros[i]
//     } else if (numeros[i] > segundoMaior && numeros[i] !== maior) {
//         segundoMaior = numeros[i]
//     }
// }

//console.log(segundoMaior)

// Pega o terceiro número maior do array
 let maior = -Infinity
 let segundoMaior = -Infinity
 let terceiroMaior = -Infinity

 for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i]
    if(num > maior) {
        terceiroMaior = segundoMaior
        segundoMaior = maior
        maior = num
    } else if (num > segundoMaior && num !== maior) {
        terceiroMaior = segundoMaior
    } else if (num > terceiroMaior && num !== segundoMaior && num !== maior) {
        terceiroMaior = num
    }
 }

 console.log(terceiroMaior)