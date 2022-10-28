//Palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


///pati o dispati
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

let userParola = prompt('dammi una parola');
let eleInvertita = palindroma(userParola) 

if (userParola == eleInvertita){
    alert('Parola Palindroma');
   }else {
    alert('Parola NON Palindroma');
}

function palindroma(controllo){
    let divLettere = controllo.split("")
    let invLettere = divLettere.reverse("")
    let parolaCont = invLettere.join("")
    return parolaCont
}
 




