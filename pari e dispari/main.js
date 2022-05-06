// function

// numero casuale
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

// stabilere se è pari o dispari
function isOdd(n) {
    if (n % 2 === 1) {
        return true;
    };
    return false;
};

// main  
// scelta pari o dispari
let userChoice;
do {
    userChoice = prompt("pari o dispari");
} while ( (userChoice === "pari") || (userChoice === "dispari"));
// scelta numero
let numUser;
do {
    numUser = Number(prompt("inserisci un numero tra 1 a 5"));
} while ( isNaN(numUser) && num > 5);

const numCpu = getRandomNumber(1,5);
console.log(numCpu)
const sum = numCpu + numUser;

if (isOdd(sum)) {
    console.log("il risultato è dispari : " + sum)
} else {
    console.log("il risultato è pari : " + sum)
}
