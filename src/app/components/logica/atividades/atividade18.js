// 🧪 Exercício 18

// 👉 Crie um array com números ímpares maiores que 10

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

let result = numeros.filter(n => n % 2 !== 0 && n > 10)

console.log(result)