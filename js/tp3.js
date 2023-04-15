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

let nombre = prompt('Entrez un nombre');
let pair = nombre % 2 == 0;
let impair = nombre % 2 == 1;

if (pair) {
    console.log(0);
    for (let i = 1; i < nombre; i = i + 2) {
        console.log(i);
    }
    console.log(nombre);
}
if (impair) {
    console.log(0);
    for (let i = 1; i < nombre; i = i + 2) {
        console.log(i);

    }
    console.log(nombre);
} 

//Exercice 3  echange des valeurs   
    let a =  prompt('entrez la première valeur');
    let b =  prompt('entrez la seconde valeur');
    let c = a;
    a = b
    b = c
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

let delta = Math.pow(b,2) - (4*(a*c));
let x1;
let x2;

 if (delta > 0){
    x1 = (-b + Math.sqrt(delta))/(2*a)
    x2 = (-b - Math.sqrt(delta))/(2*a)
    console.log(`La solution de l'équation est : ${x1} et ${x2} .`);
 } else if (delta == 0 ){
    x1 = -b/(2*a)
    console.log(`La solution de l'équation est : ${x1}`);
 } else {
    console.log("pas defini dans l'ensemble R ");
 }

 // Exercice 6 nombre compris entre 1  et 3 
 
let nombre = prompt("entrez un nombre compris entre 1 et 3 ");

while (!(nombre>1) && !(nombre<3)){
    nombre = prompt("entrez une valeur");
} 

// Exercice 7 un nombre entre 10 et 20 

let nombre = prompt("entrez un nombre compris entre 10 et 20 ");

while (!(nombre > 10) && !(nombre < 20)) {
    if (nombre < 10) {
        console.log("Plus Petit!");
    } else if (nombre > 20) {
        console.log("Plus Grand!");
    }
    nombre = prompt("entrez encore une valeur");
}

// Exercice 8 dix nombres suivants

let nombre = prompt("entrez un nombre")

for (let index = 0; index < 10; index++) {
    nombre = nombre + 1
    console.log(nombre);
    
}

// exercice 9   Table de multiplication du nombre

let nombre = prompt("entrez un nombre");
let nombreP = nombre

for (let index = 0; index < 11; ++index) {
    nombre = nombreP * index
    console.log(`${nombreP} X ${index} = ${nombre}`);
    
}

// Exercice 10  le nombre calculer

let nombre = prompt("entrez le nombre ");
let som = nombre;

while (nombre>0) {
    nombre = nombre-1
    som = som + nombre   
}
console.log(som);

// Exercices 11 calcul la factoriel du nombre 

let nombre = prompt("entrez le nombre ");
let fact = nombre;

while (nombre>1) {
    nombre = nombre-1
    fact = fact * nombre;   
}
console.log(fact);

// Exercice 12  le plus grand 

let n ;
let plusGrand = 0; 

for (let index = 1; index < 21; index++) {
    n = prompt(`entrez un nombre ${index}`)
    if(n > plusGrand) {
        plusGrand = n
    }
}
console.log(`le plus grand est ${n}`);

// Exercices 13

let index = 0;
while (n !== 0 ) {
    index = index + 1 
    n = prompt(` ntrez le nombre ${index}`)
    if (n > plusGrand) {
        plusGrand = n        
    };
};
console.log(`le plus grand est ${n}`);