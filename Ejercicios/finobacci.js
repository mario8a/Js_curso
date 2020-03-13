var primer_numero = 0
var segundo_numero = 1

var array = [primer_numero, segundo_numero];

for(i=0; i<=10; i++) {
    
    var nuevo_numero = primer_numero + segundo_numero;
    array.push(nuevo_numero);
    // redefiniendo las variables
    // Se van a ir iterando
    primer_numero = segundo_numero;
    segundo_numero = nuevo_numero;
}

console.log(array);