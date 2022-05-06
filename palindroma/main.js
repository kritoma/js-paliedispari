// function
function palindroma(w) {
    let lowWord = w.toLowerCase()
    let wLength = lowWord.length
    let wordReverse = "";

    for (let i = wLength - 1; i >= 0 ; i--) {
        wordReverse += lowWord[i]
        
    }
    if (lowWord === wordReverse) {
        return true
    } 
    return false
}

// main
const word = prompt("inserisci un parola");

if (palindroma(word)) {
    console.log("la parola è palindroma");
} else {
    console.log("la parola non è palindroma");
};