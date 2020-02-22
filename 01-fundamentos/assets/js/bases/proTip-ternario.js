const esMayor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => miembro ? '2 dolares' : '10 doalres'

console.log(esMayor(125, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'peter',
    'Pepe',
    'Karla',
    amigo ? 'thor' : 'loki',
    (() => 'nicon fuery')(),
    esMayor(10, 20)
];

console.log(amigosArr);

const notas = 100; // A+ A B B+
const grado = notas >= 95 ? 'a+' :
    notas >= 90 ? 'a' :
    notas >= 85 ? 'b+' :
    notas >= 75 ? 'b' :
    notas >= 70 ? 'c+' :
    notas >= 60 ? 'c' : 'F'

console.log({ notas, grado });