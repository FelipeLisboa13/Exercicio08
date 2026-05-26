let filmes = []

const r = require("readline-sync")

console.log("")
console.log("-------------- Digite 5 filmes ----------------")
console.log("")

for(let i = 0; i < 5; i++){
    let filme = r.question(`Informe o ${i + 1}° filme: `)
    filmes.push(filme)
    console.log("")
}
console.log("------------------------------")
console.log("")
console.log(filmes)
console.log("")