

var array =[];


var numero_iterazioni = 0;
while(array.length < 16) {
    var numero = generaRandom(1,100);
    console.log(numero);

    if(array.includes(numero)) {
        numero_iterazioni--;
    }else{
        array.push(numero);
        console.log(array);

     }
    numero_iterazioni++;
    console.log('numero iterazioni: ' + numero_iterazioni);
}

console.log(array);





function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
