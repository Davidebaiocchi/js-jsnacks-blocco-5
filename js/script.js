// Creare un array di oggetti.
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
var bici = [
    {
        nome : 'bolt',
        peso : 5
    },
    {
        nome : 'red',
        peso : 3
    },
    {
        nome : 'white',
        peso : 3
    }
];


var pesoMin = bici[0];

for(var i = 1; i < bici.length; i++){
    if(bici[i].peso < pesoMin.peso){
        pesoMin = bici[i];
    }
}

console.log(pesoMin);



// Crea un array di 10 oggetti che rappresentano una zucchina, 
// indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
var zucchine = [
    {
        varieta : 1,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 2,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 3,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 4,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 5,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 6,
        peso : 1,
        lunghezza : 10
    },
    {
        varieta : 7,
        peso : 1,
        lunghezza : 10
    },
    {
        varieta : 8,
        peso : 1,
        lunghezza : 10
    },
    {
        varieta : 9,
        peso : 1,
        lunghezza : 10
    },
    {
        varieta : 10,
        peso : 1,
        lunghezza : 10
    },
];

// stampo il peso delle zucchine
somma = 0;
for(i = 0; i < zucchine.length; i++){
    somma += zucchine[i].peso;
}
console.log(somma);



// Crea un array di 10 oggetti che rappresentano una zucchina. 
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine
var zucchine = [
    {
        varieta : 1,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 2,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 3,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 4,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 5,
        peso : 1,
        lunghezza : 20
    },
    {
        varieta : 6,
        peso : 2,
        lunghezza : 10
    },
    {
        varieta : 7,
        peso : 2,
        lunghezza : 10
    },
    {
        varieta : 8,
        peso : 2,
        lunghezza : 10
    },
    {
        varieta : 9,
        peso : 2,
        lunghezza : 10
    },
    {
        varieta : 10,
        peso : 2,
        lunghezza : 10
    },
];

// divido in 2 array le zucchine in base alla lunghezza
var zucchineCorte = [];
var zucchineLunghe = [];

for(i = 0; i < zucchine.length; i++) {
    if(zucchine[i].lunghezza <= 15){
        zucchineCorte.push(zucchine[i]);
    } else {
        zucchineLunghe.push(zucchine[i]);
    }   
}
console.log(zucchineCorte);
console.log(zucchineLunghe);

// stampo il peso delle zucchine dei due array
somma = 0;
for(i = 0; i < zucchineCorte.length; i++){
    somma += zucchine[i].peso;
}
console.log(somma);

for(i = 0; i < zucchineLunghe.length; i++){
    somma += zucchine[i].peso;
}
console.log(somma);