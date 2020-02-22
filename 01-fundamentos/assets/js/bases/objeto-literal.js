let personaje = {
    nombre: 'Mario Ochoa',
    codeName: 'Coder Mario',
    vivo: true,
    edad: 23,
    coords: {
        lat: 12.213,
        lng: -152.10
    },
    trajes: ['Mark1', 'Mark2', 'Formal'],
    direccion: {
        cp: 15010,
        ubicacion: 'Mexico df'
    },
};
// Se puede acceder por la llave

console.log('Nombre', personaje.nombre);
console.log(personaje);

console.log('Nombre', personaje['nombre']);
console.log('edad', personaje.edad);

console.log('Coods', personaje.coords);
console.log('Coods', personaje.coords.lat);

// ejercicios
// Necesito el numero de trajes
console.log('Trajes de mario: ', personaje.trajes.length);
console.log('Ultimo traje:  ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]); // js va ver el valor de x y se ira al objeto a ver si hay alguna llave con ese nombre e imprime el valor

// MAS DETALLES
//borrar propuedades
delete personaje.edad;
console.log(personaje);

// Convitiendo en arreglos
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Crear nueva propiedad
personaje.casado = true;
const entriesPares2 = Object.entries(personaje);
console.log(entriesPares2);

// Bloquear propiedades
Object.freeze(personaje);
personaje.dinero = 123212;
personaje.casado = false;
console.log(personaje);

personaje.direccion.cp = 4444; //Este si se puede cambiar porque essta dentro de otro objeto
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje); // Arreglo 
const valores = Object.values(personaje) //es un arreglo
console.log(propiedades);
console.log(valores);