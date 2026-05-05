// Crie um for que mostre a tabuada de um número, onde o usuário informe qual número será usado, 
// e o valor inicial e o valor final da tabuada.

const readline = require("readline-sync")

let n = readline.questionFloat("Qual é o número da tabuada: ")
let n2 = readline.questionFloat("qual é o número que você quer multiplicar: ")
let n3 = readline.questionFloat("Até onde você quer a tabuada:")

console.log("-------------- Tabuada --------------")
console.log("")
console.log(`Especificações do Usuário: Começa no ${n} é multiplicado por ${n2} e acaba no ${n3} `)
console.log("")

for(let i = n2; i <= n3; i++){ 
console.log(` ${n} x ${i} = ${n*i}`)
}
