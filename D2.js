/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = parseInt(prompt("Inserisci numero 1"))
const num2 = parseInt(prompt("Inserisci numero 2"))
let numeroPiuGrande

if(num1 > num2){
  numeroPiuGrande = num1
}
else {
  numeroPiuGrande = num2
}
alert(`Il numero piu grande e ${numeroPiuGrande}`)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const nume =parseInt(prompt("Inserisci un numero"))

if(nume === 5){
  console.log("e` uguale")
}
else {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num = parseInt(prompt("Inserisci un numero"))

if(num / 5 === 0){
  console.log("divisibile per 5")
}
else {
  console.log("non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const nume1 = parseInt(prompt("Inserisci numero 1"))
const oper = prompt("inserisci il tipo di operazione da fare +,-,")
const nume2 = parseInt(prompt("inserisci numero 2"))

if(nume1 + nume2 === 8){
  console.log("e` uguale a 8")
}
else if(nume1 - nume2 ===8){
  console.log("e` sempre uguale a 8")
}
else {
  console.log("e` diverso da 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = parseInt(prompt("Saldo totale del carrello dell`utente"))
let spedizione

if(totalShoppingCart > 50){
  spedizione = "gratuita"
}
else {
  spedizione = "con costo fisso pari a 10"
}
alert(`la spedizione e ${spedizione}`)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*const totalShoppingCart = parseInt(prompt("Saldo totale del carrello dell`utente"))
let spedizione

if(totalShoppingCart > 50){
  spedizione = "gratuita"
}
else {
  spedizione = "con costo fisso pari a 10"
}
alert(`la spedizione e ${spedizione}`)*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const numer1 = 10;
const numer2 = 20;
const numer3 = 30;

if(numer1 < numer2 && numer2 < numer3){
  console.log(30,20,10)
}
else {
  console.log(0)
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const nu = parseInt(prompt("Inserisci un numero:"))

if(nu % 2 === 0){
  console.log("il numero e` pari")
}
else {
  console.log("il numero e` dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
  
 let val = 10

  if (val < 20) {
      console.log("Meno di 20");
    } else if (val < 30) {
      console.log("Meno di 30");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

const me = {
  name: 'John',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html',],
}

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numeri = [1,2,3,4,5,6,7,8,9,10]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

const numeri = [1,2,3,4,5,6,7,8,9,100]
