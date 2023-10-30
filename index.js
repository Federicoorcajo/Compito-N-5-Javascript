/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltÃ  puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non Ã¨ stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Ci sono diversi tipi ma tra i piu famosi sono:
STRING : Fa conto che io ho un cane e si chiama Tomy, bene.. il cane è una variabile, Tomy è un string (Un string e una serie di lettere ceh possono formare una parola e puo utilizzarsi per nominare qualcosa)
BOOLEAN : è un metodo per detettare cose false e cose vere, immagina io abbia un "metal detector" per controllare se hai le monete. Se passo il "metal detector" e hai le monete in tasca, suonera. Se non hai niente, non lo farà. Bene, allora.. il Metal Detector rappresenta un Boolean, il suono rappresenta il true (vero), e il silenzio rappresenta falso (false)
NUMBER : Si usa per dare un numero alle variabili, esempio chiaro: Dammi il tuo number.  E tu mi dirai: Ok, 3902073987
NULL : si utlizza per dare un valore 0, esempio: Quante figurine hai? Null (0 o niente)
UNDEFINED : è simile a dire "non lo so", esempio: Quante volte hai tentato di comprare figurine nella tua vita? UNDEFINED (non lo so o indefinido)   */

/* ESERCIZIO 2
 Descrivi cos'Ã¨ un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto si trova dentro di una variabile, ad esempio let utente = {
    name : "Carlos";
    eta : 26;
    cittaDiNascita : Buenos Aires;
} 
L'oggetto è 'utente' e ha 3 propietà */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let anniLavorati = 12
let anniNonLavorati = 30
console.log(anniLavorati + anniNonLavorati)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Federico";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let anniMutuoPagato = 4;
console.log("Anni ancora da pagare: " + (x - anniMutuoPagato));

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: Ã¨ la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "jhon";
let name2 = "Jhon";
console.log(name1 !== name2); // true :(cioè conferma che non è uguale) 

let name3 = "jhon";
let name4 = "Jhon";

console.log(name3 === (name4.toLowerCase())); // adesso è uguale perche toLowerCase converte tutto in minuscola.