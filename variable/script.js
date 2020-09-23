'use strict';

/**
* Exercice 1
*/

// My digital School Forever


/**
* Exercice 2
*/
 
/** 
* My 
* digital 
* School 
* Forever
* Every
* Day
*/

 /**
* Exercice 3
*/

var string = 'Quarante-deux';
var number = 42;
var float = 42.0;
var boolean = true;
var array = [42,42,42];
var date = Date(42);
var object = {"value":42}
var indefinie = undefined;
var vide = null;
console.log("Exercice 3: " + string, number, float, boolean, array, date, object, indefinie, vide);

/**
* Exercice 4
*/

var my42count = "Quarante-deux";
var characterCount = my42count.length;
console.log("Exercice 4: " + characterCount);

/**
* Exercice 5
*/

var isset; 
isset = undefined || 42;
console.log("Exercice 5: " + isset);



/**
* Exercice 6
*/

var myArray42 = ["Q","u","a","r","a",'n','t','e','-','d','e','u','x'];
console.log("Exercice 6: " + myArray42);

/**
* Exercice 7
*/

var myArray42Len = myArray42.length;
console.log("Exercice 7: " + myArray42Len);

/**
* Exercice 8
*/

var myArray42str = myArray42.join('')+' la grande réponse sur la vie, l\'univers et le reste'
console.log("Exercice 8: " +  myArray42str);

/**
* Exercice 9
*/

var rand = [Math.floor((Math.random() * 42) + 1)];
console.log("Exercice 9: " + rand, rand.includes(42));

/**
* Exercice 10
*/

console.log("Exercice 10: " + typeof string, typeof number, typeof float, typeof boolean,typeof array, typeof date, typeof object, typeof indefinie, typeof vide);

/**
* Exercice 11
*/

var compute42 = 21*2;
compute42 = compute42.toString();
console.log("Exercice 11: " + compute42);


/**
* Exercice 12
*/

var many42 = 42424242;
many42 = many42.toString();
many42 = many42.split(42);
many42 =many42.join("Quarante-deux");
console.log("Exercice 12: " + many42);

/**
* Exercice 13
*/

var a = 24;
var b = 42;
var temp;
temp = a;
a = b;
b = temp;
console.log("Exercice 13: " + a,b);