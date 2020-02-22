const carros = ['Forrd', 'toypta', 'Tesla', 'Mazda'];

let i = 0;

console.warn('WHILE');
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

//undefined null false -> condiciones falsas

while (carros[i]) {
    if (i === 1) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}


console.warn('do WHILE');
// Do while ejecuta el bloque interno una vez

j = 0;
do {
    console.log(carros[j]);
    j++

} while (carros[j])