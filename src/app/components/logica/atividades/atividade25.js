// 🧪 Exercício 25

// 👉 Retorne o menor número do array

let numeros = [1, 2, 5, 8, 12, 3, 9, 11, 0, 10, 13, 14, 18]

let menor = numeros[0]

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] < menor){
        menor = numeros[i]
    }
}

console.log(menor)