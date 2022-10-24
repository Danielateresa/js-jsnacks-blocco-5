/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
    elementi) prendendo alternativamente gli elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const numbersList = [1, 2, 3, 4, 5, 6];

const lettersList = ['a', 'b', 'c', 'd', 'e', 'f'];


function listSum(list1, list2) {

    let newList = [];


    //col ciclo forEach ciclo nell'array , impostando come parametri elemento e posizione
    //inserisco nella nuova lista, un elemento delle due liste ad ogni iterazione con push 
    list1.forEach((element, index) => {
        newList.push(list1[index]);
        newList.push(list2[index]);
    })

    return newList

}
const mergeList = listSum(numbersList, lettersList)
console.log(mergeList);