'use strict';

/**
* Exercice 1
*/

/**
 * myPutStr
 * @param {number || string} str
 * @return {String} toString
 */

function myPutStr(str) {
    if (typeof str !== "string") {
        return "Et pourquoi pas 42 ?";
    }

    return str;
}
console.log(myPutStr('15'));
console.log(myPutStr(15));

/**
* Exercice 2
*/

/**
 * myPutStr
 * @param {number} height
 * @param {number} width
 * @return {number} surface
 */

function computeSurfaceM2(height,width) {
    return height*width;
}
console.log(computeSurfaceM2(10,20));
console.log(computeSurfaceM2(4,3));

/**
* Exercice 3
*/

/**
 * detectMyAgeByNight
 */

function detectMyAgeByNight() {
    var age = prompt('Entrez votre age :');
    if(0 <= age && age < 18) {
      alert('Vous ne pouvez pas entrer, vous n\'avez que ' + age + ' ans');
    } else if ( 18 <= age && age <= 41) {
      alert('Vous pouvez entrer, vous êtes majeur et vous avez ' + age + ' ans');
    } else if(age >= 42) {
      alert('Vous avez ' + age + ' ans. Vous êtes donc le BOSS!');
    } else {
      alert('Votre age n\'est pas valide!');  
    }
} 

/**
 * createButton
 */

function createButton() {
    document.querySelector('body').insertAdjacentHTML('beforeend','<button onclick="detectMyAgeByNight()"> Entrer dans la boite de nuit</button>');
}
createButton();

/**
* Exercice 4
*/

/**
 * matrixGenerator
 * @param {array} matrice
 */


var matrice = [[1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 0, 0, 1, 1]];
function matrixGenerator(matrice) {
    document.querySelector('body').appendChild(document.createElement('table'));
    document.querySelector('body').appendChild(document.createElement('tbody'));
    for(var i = 0; i < matrice.length; i ++) {
        document.querySelector('body').appendChild(document.createElement('tr'));
        for(var j = 0; j <matrice[0].length; j++) {
            document.querySelector('body').insertAdjacentHTML('beforeend','<td>'+ matrice[i][j] +' </td>');
        }
    }
}
matrixGenerator(matrice);

/**
* Exercice 5
*/

function clock() {
    var date = new Date();
    document.querySelector('body').appendChild(document.createElement('div'));
    document.querySelector('div').innerHTML = '<h1>'+date.getHours()+' : '+date.getMinutes()+' : '+date.getSeconds()+'</h1>';
}
setInterval(clock, 1000);

/**
* Exercice 6
*/

var arrayFibonacci = [1];
var newArrayFibonacci = [];
var i = 0;

function computeFibonacci(arrayFibonacci) {
    i++;

    if (arrayFibonacci.length == 1) {
        arrayFibonacci[i] = 1;
        computeFibonacci(arrayFibonacci);
    }

    if (i < 10) {
       arrayFibonacci[i] = arrayFibonacci[i-1]+arrayFibonacci[i-2];
       computeFibonacci(arrayFibonacci);
    }
}

function saveFibonacci() {
    newArrayFibonacci = arrayFibonacci;
}

function sortFibonacci(newArrayFibonacci) {
    for (var i = 0; i < newArrayFibonacci.length; i++){
        for (var j = 0, stop = newArrayFibonacci.length-i; j < stop; j++){
            if (newArrayFibonacci[j] > newArrayFibonacci[j+1]){
                var temp = newArrayFibonacci[j];

                newArrayFibonacci[j] = items[j+1];
                newArrayFibonacci[j+1] = temp;
            }
        }
    }

    return newArrayFibonacci;
}

function totalFibonacci(arrayFibonacci) {
    var total = 0;

    for (i = 0; i < arrayFibonacci.length; i++) {
        total += arrayFibonacci[i];
    }

    return total;
}

computeFibonacci(arrayFibonacci);
console.log(arrayFibonacci);
saveFibonacci(arrayFibonacci,newArrayFibonacci);
sortFibonacci(newArrayFibonacci);
console.log(totalFibonacci(arrayFibonacci));
