const pepe = {
    nombre: 'Mario',
    edad: 45
}

const grec = {
    nombre: 'Carl',
    edad: 77,
    imprimir() {
        console.log(`nombre: ${this.nombre}`);
    }
}

/////
// imprimir();

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`nombre: ${this.nombre}`);
    }
}

const mario = new Persona('Mario', 23);
console.log(mario);
mario.imprimir();