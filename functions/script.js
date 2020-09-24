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
    if(typeof str === "number") {
        return "Et pourquoi pas 42 ?";
    }
    return str.toString();
}
console.log(myPutStr('ok'));
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
function createButton() {
    document.querySelector('body').insertAdjacentHTML('beforeend','<button onclick="detectMyAgeByNight()"> Entrer dans la boite de nuit</button>');
}
createButton();

