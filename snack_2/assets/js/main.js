/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */


const zucchine = [
    {
        varieta: 'tonda',
        peso: 1,
        lunghezza: 10
    },
    {
        varieta: 'napoletana',
        peso: 3,
        lunghezza: 13
    },
    {
        varieta: 'tonda',
        peso: 2,
        lunghezza: 10
    },
    {
        varieta: 'trombetta',
        peso: 1,
        lunghezza: 20
    },
    {
        varieta: 'nera',
        peso: 1,
        lunghezza: 30
    },
    {
        varieta: 'tonda',
        peso: 3,
        lunghezza: 9
    },
    {
        varieta: 'napoletana',
        peso: 1,
        lunghezza: 25
    },
    {
        varieta: 'tonda',
        peso: 4,
        lunghezza: 30
    },
    {
        varieta: 'trombetta',
        peso: 1,
        lunghezza: 8
    },
    {
        varieta: 'nera',
        peso: 2,
        lunghezza: 10
    }
]

//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//filter


//zucchine che misurano meno di 15
const less15length = zucchine.filter(zucchina => {

    return zucchina.lunghezza < 15
})
console.log(less15length, 'sono le zucchine che misurano meno di 15 cm');

let less15lengthWeight = 0;
less15length.forEach(zucchina => {
    less15lengthWeight += zucchina.peso;
});
console.log(less15lengthWeight, 'è il peso totale delle zucchine che pesano meno di 15 cm');


//zucchine che misurano più di 15
const more15length = zucchine.filter(zucchina => {

    return zucchina.lunghezza > 15
})
console.log(more15length, 'sono le zucchine che misurano più di 15 cm');

let more15lengthWeight = 0;
more15length.filter(zucchina => {
    more15lengthWeight += zucchina.peso;
})

console.log(more15lengthWeight, 'è il peso totale delle zucchine che pesano più di 15 cm');