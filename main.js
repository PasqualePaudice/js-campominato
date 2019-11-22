

var array =[];


var numero_iterazioni = 0;

while(array.length < 16) {

    var numero = generaRandom(1,100);

    console.log(numero);

    if(array.includes(numero)) {

        numero_iterazioni= numero_iterazioni - 1;

    }else{

        array.push(numero);


     }
    numero_iterazioni++;

}

console.log(array);

var punteggio = 0;

var num_utente = 0;

var presente = false;

var contatore = 0 ;

while ( (presente == false) && (contatore < 84) ) {

    num_utente = parseInt(prompt('inserisci un numero da 1 a 100'));

    console.log('num-utente ' + num_utente);


   if(array.includes(num_utente)){


       console.log('Hai perso, hai beccato una mina!');

       presente = true;

       console.log('true');


   }else {

       punteggio = punteggio + 1 ;


   }

    contatore = contatore + 1 ;



}

console.log('il tuo punteggio è: ' + punteggio);




function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
