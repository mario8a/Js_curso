let juegos = ['Zelda', 'WW3', 'Metal slog'];
console.log('Largo', juegos.length);

let primero = juegos[0];
let utlimo = juegos[juegos.length - 1]; // sacar el ultimo valor

console.log(primero, ',', utlimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLong = juegos.push('Mortal combat'); // Meter un nuevo elemento al final
console.log({ nuevaLong });
console.log({ nuevaLong, juegos });

nuevaLong = juegos.unshift('MarioBros');
console.log({ nuevaLong, juegos });

let juegoBorrado = juegos.pop() // borra el ultimo elementos
console.log({ juegoBorrado, juegos });

let posicion = 1;
console.log(juegos); // mostrando todos los juegos
let juegosBorra = juegos.splice(posicion, 2); // borra dos posiciones a partir de la primera
console.log({ juegosBorra, juegos });

let metroidIndex = juegos.indexOf('Metal slog') // busca la posicion
console.log({ metroidIndex }); // cuando regresa -1 significa que no encntro