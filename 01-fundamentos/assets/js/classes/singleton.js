// Tener una unica instancia sin importar el new , siempre regresa la misma instancia de la clase
// Es util para compartir informacion a lo largo de la app

class Singleton {

    static intancia; // null..unidefined?
    nombre = '';

    constructor(nombre = '') {
        //comprobar si la nstancia tiene un calvor

        // const a = undefined;
        // console.log(a);
        // console.log(!a);
        // console.log(!!a);
        
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.intancia = this;
        this.nombre = nombre;

        // un construnctor puede regresar una instancia de la misma clase
        // return this;
    }
}

const instancia1 = new Singleton('Mario');
const instancia2 = new Singleton('Daniela');
const instancia3 = new Singleton('Robin');


console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`); 
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`); 
console.log(`Nombre en la instancia1 es: ${instancia3.nombre}`); 