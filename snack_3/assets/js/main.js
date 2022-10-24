/* Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */
let word = 'Ciao';


function generateReversedWord(word) {
    let reversed = word.split('').reverse().join('')
    return reversed;
}


console.log(generateReversedWord(word));
