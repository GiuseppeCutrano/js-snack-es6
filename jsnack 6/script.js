// dato questo array di obj iniziale:
// var arrayObj = [
//   {name: 'Poppy', type: 'tshirt', color: 'red'},
//   {name: 'Jumping', type: 'occhiali', color: 'blue'},
//   {name: 'CrissCross', type: 'scarpe', color: 'black'},
//   {name: 'Jenny', type: 'borsa', color: 'pink'},
// ];
// Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
// una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale



function randomLetter() {
  var lettere = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var indice = Math.floor(Math.random() * lettere.length);

  return lettere.charAt(indice)
}

const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];


console.log(arrayObj);

// creare array vuoto
const newaArrObj = [];

// Ciclare for each sull'array iniziale
arrayObj.forEach((element) => {


  let newKey = {...element, position: randomLetter()};


  newaArrObj.push(newKey);

});


console.log("New Array:", newaArrObj);
