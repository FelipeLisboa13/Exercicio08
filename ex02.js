const r = require("readline-sync")

let cidades = []
console.log("")
console.log("-------------- Digite 3 cidades ----------------")
console.log("")
for(let i = 0; i < 3; i++){
    let cidade = r.question(`Informe a ${i + 1}° cidade:`)
    cidades.push(cidade)
console.log("")

}
console.log("------------------------------")
console.log("")
console.log(cidades)
console.log("")

