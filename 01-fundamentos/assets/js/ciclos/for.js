const heroes = ['btm', 'super', 'inviseble', 'yoahievo'];


console.warn('For tradiciona');

// for ( inicializar la variable,  condicion , incrementador)

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
    // la i solo vive centro de este ciclo
}

console.warn('For In');

for (let i in heroes) {
    console.log(heroes[i]);
}


console.warn('For of');

for (let heroe of heroes) {
    console.log(heroe);
    // se acostumbra a poner el singular del arreglo o lo que se esta barriendo
    // no se pone i
}