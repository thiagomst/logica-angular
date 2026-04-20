// 🧪 Exercício 21

// 👉 Encontre o primeiro número ímpar maior que 10

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 10, 13, 14, 18]

let result = numeros.find((n) => n % 2 !== 0 && n > 10 )

console.log(result)