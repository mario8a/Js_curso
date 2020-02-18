const arr = new Array(10); // No es comun
console.log(arr);

const arr2 = [];
console.log(arr2);

let videojuegos = ['Mario 3', 'Megaman', 'treufe'];
console.log({ videojuegos });
console.log(videojuegos[0]);

let arregloCosas = [
    true,
    123,
    'Hola',
    1 + 2,
    function() {},
    () => {},
    { a: 1 },
    ['X', 'Marco', 'Zero', 'DrLigh', [
        'Dr malito',
        'Zumba'
    ]]
];

// console.log({ arregloCosas });
// console.log(arregloCosas[2]);
console.log(arregloCosas[7][4][0]); // para seleccionar un arreglo dentro de otro arreglo, ejercicio