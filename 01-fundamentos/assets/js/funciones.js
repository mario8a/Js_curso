// function saludar() {
//     console.log('Hola mundo');
// }

// var saludar = 123; // da error grave
// let saludar = 123; // da error

//funcion anonima
// const saludar2 = function() {
//     console.log('Hola mundo');
// }
//Ventaja: No puede ser reutilizado en la aplciaicon


// saludar();
// saludar2()

// funciones con argumentos
function saludo(nombre) {
    // console.log('Hola ' + nombre);

    //retornos
    // return 1;
    return [1, 2, 3, 4, 5]

}

// saludo('Mario');

const saludo2 = function(nombre) {
    console.log('Holaa ' + nombre);
}

// todas las funciones tradicionales, internamente cuando se ejecutan tienen un objeto llamado arguments
function saludo3(nombre) {
    console.log(arguments);
    console.log('Hola ' + nombre);
}

// saludo('Mario');
// saludo2('Maiooo');

//arguments va hacer refertencia a todos los argumentos que esten
// saludo3('Mario', 30, true)


// Funciones flecha
const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlechaConArgumentos = (nombre) => {
    console.log('Hola flecha' + nombre);
}

// saludarFlecha();
// saludarFlechaConArgumentos('Vanessa');

// Todas las funciones anteriores regresan undefined, si no llevan return no regresa nada


const retornoDeSaludar = saludo('Mario', 444, 'Hola', 55);
console.log('Retorno', retornoDeSaludar[0]);


function sumar(a, b) {
    return a + b;
    // return 'Hola mundo' // sin importar los valores, regresara este valor
}

const sumarDosFlecha = (a, b) => {
    return a + b;
}

// Si solo regresa un valor, se puede resumir asi:
const sumarDosFlechaResumido = (a, b) => a + b;


console.log(sumar(1, 2));
console.log(sumarDosFlecha(3, 4));
console.log('ResumidoFlecha', sumarDosFlechaResumido(4, 2));

function Aleatorio() {
    return Math.random()
}

//transformar en funcion de flecha, que no tenga llaves

const Aleatorio2 = () => Math.random()

console.log(Aleatorio());
console.log('Aleatorio2', Aleatorio2());