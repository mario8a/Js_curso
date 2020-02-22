let a = 5;


//recibe un booleano
if (a >= 10) {
    console.log('A es mayot a 10 o igual');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDate()
console.log({ dia }); // me da el dia

if (dia === '19') {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
    // console.log('No es domingo');

    // if (dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }


} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es martes miercoles ni domingo');
}


// = Esto es una asignacion
// == Esto confirma si el valor es igual sin importar que tipo de dato e
// === Esto hace que el tipado sea el mismo 5 === '5', esto daria falso 
// console.log(5 === '5');
// console.log(5 == '5');
// console.log(5 = '5'); error



/// EJERCICIO
// sin usar if-else o switcj, unicamente objetos
dia = 0; // 0: domingo, 1: lunes....

let diasSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(diasSemana[dia] || 'Dia no definido');


//imprimir en consola el dia de la semana