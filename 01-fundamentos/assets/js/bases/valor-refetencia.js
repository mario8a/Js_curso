let a = 10;
let b = a;
a = 30;

console.log({ a, b });


let juan = {
    nombre: 'Juan'
}

let ana = {...juan }; // operador spread (separa los elementos)
ana.nombre = 'ana'

console.log({ juan, ana });

const cambiaNombre = (persona) => {
    persona.nombre = 'Mairo'
    return persona
}

let peter = { nombre: 'Pepe' }
let paker = cambiaNombre(peter);

console.log({ peter, paker });

// Arreglos

const frutas = ['manzana', 'pera', 'piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('mango');

console.table({ frutas, otrasFrutas });