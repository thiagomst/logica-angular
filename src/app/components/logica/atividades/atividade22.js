// 🧪 Exercício 22

// 👉 Se não encontrar, mostre:

// "Nenhum número encontrado"

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

// let result = numeros.find((n) => n == 10)

// if(result === undefined) {
//     console.log("Nenhum número encontrado")
// }else {
//     console.log("Número encontrado: ",result)
// }

// ⚔️ Próximo passo

// 👉 tenta isso:

// procurar um número que existe (ex: 14)
// e um que não existe (ex: 99)

// 👉 e tratar os dois casos 😏

let existe = numeros.find((n) => n === 14)
let naoExiste = numeros.find((n) => n === 19)

if(existe === undefined) {
    console.log("Nem um número encontrado")
}else{
    console.log("Número encontrado:", existe)
}

if(naoExiste === undefined) {
    console.log("Nem um número encontrado")
}else{
    console.log("Número encontrado", naoExiste)
}