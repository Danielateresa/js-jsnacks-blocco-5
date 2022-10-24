/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b” */


//const numA < numB
//const numB <= list.length;
const numA = 2;
const list = [3, 2, 6, 8, 9, 1];
const numB = 4;




function newArray(array, num1, num2) {

    let generatedList = [];

    array.forEach((element, index, array) => {
        if (array[index] > num1 && array[index] >= num2 + 1) {
            generatedList.push(array[index])
        }
    });
    return generatedList
}

const newList = newArray(list, numA, numB);
console.log(newList);
