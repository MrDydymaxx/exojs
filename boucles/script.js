'use strict';

/**
* Exercice 1
*/

var tables = [1,2,3,5,8];
for(var i = 0; i < tables.length; i ++) {
    for(var j = 1 ;j < 11; j++) {
        console.log(tables[i]*j);
    }
}

/**
* Exercice 2
*/

document.querySelector('body').insertAdjacentHTML('beforeend','<ul> </ul>');
for(i = 1; i < 11; i++) {
    document.querySelector('ul').insertAdjacentHTML('beforeend','<li>'+ i + ' *5 = '+ i*5 +'</li>');
}

/**
* Exercice 3
*/
var i = 1;
while(true) {
    console.log(5*i);
    i++;
    if (i > 10 ) {
        break;
    }
}

/**
* Exercice 4
*/

[1,2,3,4,5,6,7,8,9,10].map(x => x*5);

/**
* Exercice 5
*/

var obj42 = {'name':'42','age':'42'};
var temp42 = 0;
for(var key in obj42) {
    temp42 === 0 ? temp42 = Number(obj42[key]) : temp42*= Number(obj42[key]);
}
console.log(temp42);

/**
* Exercice 6
*/

var nbr = [5,4,3,2,1];
var temp = [];
for(i = 0; i < nbr.length;i++) {
    if(nbr[i-1] === undefined) {
        temp.push(nbr[i]);
    }
    if(nbr[i]>nbr[i-1]) {
        temp.push(nbr[i]);
    }
    if(nbr[i]<nbr[i-1]) {
        temp.unshift(nbr[i]);
    }
}
console.log(temp);

/**
* Exercice 7
*/

var clothes = {'T-shirt' : {} ,'sweat-shirt' : {} ,'pullover' : {}};
var sizesArray = ['XS','S','M','L','XL','XXL'];
for(var cloth in clothes) {
    clothes[cloth].size = sizesArray[Math.floor((Math.random() * 6))];
    clothes[cloth].price = Math.floor((Math.random() * 10)+20);
    clothes[cloth].tva = clothes[cloth].price*0.2;
}
console.log(clothes);
var sizes = ['XS','S','M','L','XL','XXL'];

/**
* Exercice 8
*/

var element = document.createElement('select');
document.querySelector('body').appendChild(element);
var date = new Date().getFullYear();
for(i = 1980; i <= date; i++) {
    document.querySelector('select').insertAdjacentHTML('beforeend','<option value='+ i +'>' + i + '</option>');
}