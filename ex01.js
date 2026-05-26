const r = require("readline-sync")
console.log("")
console.log("-------------- Digite 3 nomes ----------------")
console.log("")
let nomes = []

for(let i = 0; i < 3; i++){
let nome = r.question(`Digite o ${i + 1}° nome: `)
nomes.push(nome)
}
console.log("------------------------------")
console.log("")
console.log(nomes)
console.log("")