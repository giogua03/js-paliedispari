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


alert('INIZIA IL GIOCO')
let eleDipari = prompt('SCEGLIERE TRA PARI O DISPARI')
console.log(eleDipari)
let eleNumero = prompt('INSERISCI UN NUMERO')
console.log(eleNumero)
let eleRandom = parseInt(Math.floor(Math.random() * 5 ) + 1)
console.log(eleRandom)

function somma(a,b){
    let sommaNumero = a + b
    if (sommaNumero % 2 === 0 ){
        return 'pari'
    }else{
        return'dispari'
    }

}
let risultato = somma(eleNumero,eleRandom);
alert(risultato)
console.log(risultato)

function vittoria(c,d){
    if(c = d){
        return'ha vinto utente'
    }else{
        return'ha vinto PC'
    }
}
let risultato2 = vittoria(eleNumero,risultato)
alert(risultato2)
console.log(risultato2)
 




