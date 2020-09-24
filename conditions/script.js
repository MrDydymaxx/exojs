'use strict';

/**
* Exercice 1
*/

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

/**
* Exercice 2
*/

var temperature = Math.floor((Math.random() * 31));
if( 0 <= temperature && temperature <= 10 ) {
  alert("Cool");
}
if(11 <= temperature && temperature <= 20 ) {
  alert("Tepid");
}
if(21 <= temperature && temperature <= 30 ) {
  alert("Warm");  
}

/**
* Exercice 3
*/

switch(Date().split(" ")[0]) {
    case "Mon":
        alert("Lundi");
        break;
    case "Tue":
        alert("Mardi");
        break;
    case "Wed":
        alert("Mercredi");
        break;
    case "Thu":
        alert("Jeudi");
        break;
    case "Fri":
        alert("Vendredi");
        break;
    case "Sat":
        alert("Samedi");
        break;
    case "Sun":
        alert("Dimanche");
        break;
    default:
    alert('Jour inconnu!');
}

/**
* Exercice 4
*/

alert('Vous croisez un homme étrange vêtu de noir et dissimulant son visage... Il se rapproche de vous et vous demande si vous vous sentez plus scientifique ou littéraire ...');
var choiceSubject = prompt('Quelle question étrange... vous décidez tout de même d\'y répondre, quel est votre choix?\n(s = scientifique \ l = littéraire)');
if(choiceSubject === 's') {
    alert('Oh! Vous vous considerez donc comme un scientifique? Interessant, voyons donc ça!');
    choiceSubject = prompt('Êtres-vous : \n- Un mathématicien, grand génie des chiffres\n- Un physicien, incollable sur les lois qui nous entourent\n- Un chimiste, maître incontesté des éléments?\n(m = mathématicien, p = physicien, c = chimiste)');
    if (choiceSubject === 'm') {
        alert('Vous atteignez la connaissance absolue grâce à la puissance du nombre 42!');
    } else if (choiceSubject === 'p'){
        alert('Ah... Vous aussi vous regardez les pommes tomber des arbres?');
    } else if (choiceSubject === 'c') {
        alert('Vous êtres sûr de votre choix? Avoir déjà mélangé des Mentos et du Coca ne fait pas de vous un chimiste!');        
    }
}
else if(choiceSubject === 'l') {
    alert('Fumer en sarouel c\'est la belle vie n\'est ce pas?');
    choiceSubject = prompt('Vous vous sentez plutot :\n- Un artiste, l\'art de faire passer un message par la vision\n- Un écrivain, l\'art de manier les mots\n- Un philosophe, l\'art d\'ajouter des problèmes dans sa vie\n(a = artiste, e = écrivain, p = philosophe)');
    if(choiceSubject === 'a'){
            alert('Tu as du talent c\'est sur! Mais jamais tu n\'égalera Picasso.');
    } else if(choiceSubject === 'e') {
        alert('Tu manipule les mots avec une précision extreme pour écrire des romans... Dois-je en déduire que tu fais la même chose avec les gens?');
    } else if(choiceSubject === 'p') {
        alert('Tu es de loin le plus perché, je ne t\'ai jamais compris...');
    }
}

/**
* Exercice 5
*/

/* Nous ne pouvons pas faire de Early return car nous ne sommes pas dans une fonction. Le faire entrainerait la fin du programme*/

/**
* Exercice 6
*/

var exists;
var check = exists ? 42 : "Cette variable n'existe pas";
alert(check);

/**
* Exercice 7
*/

var family = Math.floor((Math.random() * 41));
var parent;
switch(family-family%10){
    case 10:
        var parent = 10;
        break;
    case 20:
        var parent = 20;
        break;
    case 30:
        var parent = 30;
        break;
    case 40:
        var parent = 40;
        break;
    default:
        var parent = "unités";
        break;
}
alert('Ce chiffre ('+family+') fait partie de la famille des '+parent);