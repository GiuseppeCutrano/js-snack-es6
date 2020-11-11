let palla ={
  "nome": 'palla',
  "peso": 10

}
console.log(`${palla.nome} ${palla.peso}`)

var inpUten = parseInt(prompt("Insersci il nuovo peso della palla"));
palla.peso = inpUten
console.log(`il nuovo peso della palla è ${palla.peso}`)
