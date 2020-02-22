const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false
}


console.warn('Not negacion');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true

console.warn('and'); // true si todos lo valores son verdaderps
console.log(true && true); // true
console.log(!false && true); // false


console.log('=============');
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('and')
regresaFalse() && regresaTrue()
console.log('4 condiciones', true && true && true && false); // false

console.log('Or'); // debe regresar true siemore
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log('4 condiciones', true || true || true || false); // true

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNUll = null;
const soyFalse = false;

const a1 = true && 'Hola mundo';
const a2 = 'Hola' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso'
const a4 = soyFalse || soyUndefined || soyNUll || 'Ya no so falso de nuevo'
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no so falso de nuevo'

console.log({ a1, a2, a3, a4, a5 });

if (true || true || true || false) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}