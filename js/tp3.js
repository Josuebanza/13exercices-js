// Exercise 1 Algorithm Mot de Passe

let passWord = "azerty";
let pw = prompt('Veuillez saisir le mot de passe');

if (pw !== passWord) {
    console.log('erreur de mot de passe');
} else {
    console.log('Bienvenue');
}

// Exercice 2  suite pair jusqu' au nombre  

let nombre = prompt('Entrez un nombre');
let pair = nombre % 2 == 0;
let impair = nombre % 2 == 1;

if (pair) {
    for (let i = 0; i <= nombre; i = i + 2) {
        console.log(i);
    }
    console.log();
}
if (impair) {
    for (let i = 0; i <= nombre; i = i + 2) {
        console.log(i);

    }
    console.log(x);
}

//Exercice  2b  suite de nombre impaire jusqu'au nombre 

let nombre2 = prompt('Entrez un nombre');


if (pair) {
    console.log(0);
    for (let i = 1; i < nombre2; i = i + 2) {
        console.log(i);
    }
    console.log(nombre2);
}
if (impair) {
    console.log(0);
    for (let i = 1; i < nombre2; i = i + 2) {
        console.log(i);

    }
    console.log(nombre2);
}

//Exercice 3  echange des valeurs   
let n1 = prompt('entrez la première valeur');
let n2 = prompt('entrez la seconde valeur');
let n3 = n1;
n1 = n2
n2 = n3
console.log(`la valeur de a vaut :  + ${a} + la valeur vaut : ${b}`);

//Exercice 4 année bissextile 

let annee = prompt('veuillez écrire une année (YYYY)');
let bissextile = annee % 4 == 0;

if (bissextile) {
    console.log("Oui c'est une année Bissextile");
} else {
    console.log("Non ce n'est pas une année Bissextile");
}

// Exercice 5 Equations du second degré

let a = prompt("entrez la valeur de a ") * 1
let b = prompt("entrez la valeur de b ") * 1
let c = prompt("entrez la valeur de c ") * 1

let delta = Math.pow(b, 2) - (4 * (a * c));
let x1;
let x2;

if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(`La solution de l'équation est : ${x1} et ${x2} .`);
} else if (delta == 0) {
    x1 = -b / (2 * a)
    console.log(`La solution de l'équation est : ${x1}`);
} else {
    console.log("pas defini dans l'ensemble R ");
}

// Exercice 6 nombre compris entre 1  et 3 

let nombre3 = prompt("entrez un nombre compris entre 1 et 3 ");

while (!(nombre3 > 1) && !(nombre3 < 3)) {
    nombre3 = prompt("entrez une valeur");
}

// Exercice 7 un nombre entre 10 et 20 

let nombre4 = prompt("entrez un nombre compris entre 10 et 20 ");

while (!(nombre4 > 10) && !(nombre4 < 20)) {
    if (nombre4 < 10) {
        console.log("Plus Petit!");
    } else if (nombre4 > 20) {
        console.log("Plus Grand!");
    }
    nombre4 = prompt("entrez encore une valeur");
}

// Exercice 8 dix nombres suivants

let nombre5 = prompt("entrez un nombre")

for (let index = 0; index < 10; index++) {
    nombre5 = nombre5 + 1
    console.log(nombre5);

}

// exercice 9   Table de multiplication du nombre

let nombre6 = prompt("entrez un nombre");
let nombreP = nombre6

for (let index = 0; index < 11; ++index) {
    nombre6 = nombreP * index
    console.log(`${nombreP} X ${index} = ${nombre6}`);
}

// Exercice 10  le nombre calculer

let nombre7 = prompt("entrez le nombre ");
let som = nombre7;

while (nombre7 > 0) {
    nombre7 = nombre7 - 1
    som = som + nombre7
}
console.log(som);

// Exercices 11 calcul la factoriel du nombre 

let nombre8 = prompt("entrez le nombre ");
let fact = nombre8;

while (nombre8 > 1) {
    nombre8 = nombre8 - 1
    fact = fact * nombre8;
}
console.log(fact);

// Exercice 12  le plus grand 

let n;
let plusGrand = 0;

for (let index = 1; index < 21; index++) {
    n = prompt(`entrez un nombre ${index}`)
    if (n > plusGrand) {
        plusGrand = n
    }
}
console.log(`le plus grand est ${n}`);

// Exercices 13

let index = 0;
while (n !== 0) {
    index = index + 1
    n = prompt(` ntrez le nombre ${index}`)
    if (n > plusGrand) {
        plusGrand = n
    };
};
console.log(`le plus grand est ${n}`);