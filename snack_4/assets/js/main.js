/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
    elementi) prendendo alternativamente gli elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const numbersList = [1, 2, 3, 4, 5, 6];

const lettersList = ['a', 'b', 'c', 'd', 'e', 'f'];
let newList = [...numbersList, ...lettersList]

function listSum(list1, list2) {


    let listSum = [];

    newList.foreach(element => {
        listSum += element
        return listSum
    })




}
const mergeList = listSum(newList)
console.log(mergeList);