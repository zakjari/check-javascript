
//  Inverser une chaîne

function inversionDeChaine(text) {
    var result = ''
    console.log(text.length)
     for(let i = text.length -1; i> -1 ; i--){        // Boucle 'for' 
        result = result + text[i]
    }
    console.log(result)
}
inversionDeChaine("bonjour")

// Compter les caractères

function CompterLesCaractères(bonjour) {
  return bonjour.length ;
}
let bonjour = 'hello'
let x = CompterLesCaractères (bonjour)
console.log(x)

//   Mettre les mots en majuscule 
    
function slt(salut) {
  let word = salut.split(' ');     //diviser la phrase(split)
  let traiter = word.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);     //le premier caractère en majuscule(toUpperCase)
  }).join (' ');
  console.log(traiter);
}
slt('bonjours mes camarades')
//   Somme d'un tableau
function Max(tableau) {
  return Math.max(...tableau);
}

let nombres = [6, 1, 4, 9, 2, 7];
let max = Max(nombres);
console.log("maximale est : " + max);


function Min(tableau){
  return Math.min(...tableau)
}
let min = Min(nombres);
console.log('minimun est :'+ min)
//   Filtrer le tableau

 function calculer(tableau){
  let somme = 0;
  for (let i=0; i < tableau.length; i++){
  somme += tableau[i];
  
  }
  return somme;
 }
 let tableau  = [3, 7, 9, 8, 5, 10];
 let somme = calculer(tableau);
 console.log("La somme : " + somme);


//Filtrer le tableau
function filtrerTableau(tab, condition) {
  return tab.filter(condition);
}

let tab = [3, 7, 9, 8, 5, 10];
let tabFiltre = filtrerTableau(tab, function(element) {
  return element > 5;
});

console.log("Tab filtré : " + tabFiltre);


//   Factorielle 
function factorielle(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorielle(n - 1);
  }
}

// Exemple d'utilisation
let nombre = 5;
let resultat = factorielle(nombre);
console.log("La factorielle de " + nombre + " est : " + resultat);


//   Vérification des nombres premiers
function estNombrePremier(n) {
  if (n <= 1) {
      return false;  
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;  
      }
  }

  return true;  
}

let chiffre = 7;
let q = estNombrePremier(chiffre);
console.log(nombre + " est un nombre premier : " + q);


//   Suite de Fibonacci

function fibonacci(n) {
  let sequence = [0, 1]; 
  for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n); 
}

console.log(fibonacci(10)); 

