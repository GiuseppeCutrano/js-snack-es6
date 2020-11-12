// Partendo da un array semplice
// Chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// Quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente



const nomi = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
console.log(nomi);

// Creazione prompt
let firstPrompt = parseInt(prompt("Inserisci un numero"));
let secPrompt = parseInt(prompt("Inserisci un numero")) + 1;

// stampa scelte
console.log(`Primo num: ${firstPrompt}
Secondo num: ${secPrompt}`);


let newArr =  [...nomi]; // copia array
console.log(newArr.slice(firstPrompt, secPrompt));
