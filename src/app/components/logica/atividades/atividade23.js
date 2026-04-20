// 🧠 NÍVEL 7 – DESAFIOS REAIS
// 🧪 Exercício 23

// 👉 Encontre o segundo número ímpar do array

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

let result = 0

for(let i = 0; i < numeros[i]; i++) {
    if (numeros[i] % 2 !== 0) {
        result ++

        if(result === 2) {
            console.log(numeros[i])
            break
        }
    }
}