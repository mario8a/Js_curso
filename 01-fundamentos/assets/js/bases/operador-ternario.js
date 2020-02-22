/**
 * Dias  de la semana se abre a las 11
 * pero los fines se abre a las 9
 */

//Entra a la pagina web para consultar si esa abierto hoy

const dia = 1; // 0: domingo , 1 : lunes ...
const horaActual = 9;

let horaApertura;
let mensaje; //esta aabierto, esta cerrado, hoy abrimos a las xxx


// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Entre semana');
//     horaApertura = 11;
// }

//RESUMIDO
// Despues del ? siguie el valor que se quiere retornar si la condicion se cumple
// SI denro del arrreglo 0 6 incliye el dia actual se cumple (si es true) ? si se cumple significa que es fin de semana y se abre a las 9
// : -> esto es un else
// : else se abre a las 11

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;


// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`
// }

// tarea --> Operacion ternaria con el mensaje

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`

console.log({ horaApertura, mensaje });