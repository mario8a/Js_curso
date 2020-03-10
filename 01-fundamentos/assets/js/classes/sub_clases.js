class PersonaNatural {

    // propiedades y metodos estaticos
    // Propiedades de la clase
    // constructor
    // Set y get
    // Metodos

    static _conteo = 0;

    static get conteo() {
        return PersonaNatural._conteo + 'instance'
    }

    static mensaje() {
        console.log(this.nombre); // undefined  
    }

    nombre;
    codigo;
    frase;
    comida;

    constructor(nombre, codigo, frase) {

        this.nombre = nombre;
        this.frase = frase;
        this.codigo = codigo;

        PersonaNatural._conteo++;
    }


    set setComidaFavorita(comida) {
        // Solo recibe un argunmento
        this.comida = comida
    }

    get getComidaFav() {
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }

    //metodo
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice : ${this.frase}`);
    }
}

class Heroe extends PersonaNatural {
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase)
        // Super ahce referencia a la clase donde se extiende
        // Toda propiedad con this debe ir despues del super
        this.clan = 'Vengadores'
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}


//creando la instancia de esa clase

// const spider = new PersonaNatural('Peter', 'SPidey', 'Tu amigo');
const spider = new Heroe('Peter', 'SPidey', 'Tu amigo');
// const spider = new Heroe();
spider.quienSoy();
console.log(spider);

