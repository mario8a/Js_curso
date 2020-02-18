// function crearPersona(nombre, apellido) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
// }


// Redirla
// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }

// Funcion de flecha
const pesonaFlecha = (nombre, apellido) => ({ nombre, apellido }) //Solo tiene un valor



const persona = pesonaFlecha('Mario', 'Ochoa');
console.log(persona);




function imprimeArgs() {
    console.log(arguments);
}

//flecha
const argumentos2 = (edad, ...args) => {
    // console.log(args);
    // console.log({ edad }); // es independiente
    return args
}

// ... hace que todos los argumentos se hagan un arreglo
// despues de ese parametro no puede ir otro

// imprimeArgs(10, 20, 'saras', true);
// argumentos2(10, 20, 'saras', true) // da error sin no se envia algun parametro la funcion
const [casado, vivo, nombre, saludo] = argumentos2(10, 20, 'saras', true);
// console.log(argumentos); // antes la const = argumentos
console.log({ casado, vivo, nombre, saludo });



////


const { apellido: nuevoApellido } = pesonaFlecha('Mario', 'Ochoa');
console.log({ nuevoApellido });

//Destructuracion de elementos

let mario = {
    nombre: 'Mario Ochoa',
    codeName: 'Coder Mario',
    vivo: true,
    // // edad: 23,
    trajes: ['Mark1', 'Mark2', 'Formal'],
};

// const imprimeProp = (personaje) => {
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.trajes);
// }

// imprimeProp(mario)


const imprimeProp = ({ nombre, edad = 0, codeName, vivo, trajes }) => {


    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}


imprimeProp(mario)