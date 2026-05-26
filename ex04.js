const r = require("readline-sync")
console.log(" ========== Lista de Nome ========== ")
console.log("") 
let nomes = ["felipe", "lucas", "miguel", "alexander", "davi"] 

for(let i = 0; i < nomes.length; i++){
    console.log("")
    console.log(`${i}° nome: ${nomes[i]}`) 
    console.log("")
}
