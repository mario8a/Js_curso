class PersonaNatural {

    // propiedades de las clases
    nombre;
    codigo;
    frase;

    constructor(nombre, codigo, frase) {



        this.nombre = nombre;
        this.frase = frase;
        this.codigo = codigo;
    }
}


//creando la instancia de esa clase

const spider = new PersonaNatural('Peter', 'SPidey', 'Tu amigo');
console.log(spider);