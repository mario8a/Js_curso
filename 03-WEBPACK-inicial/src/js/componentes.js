import '../css/componentes.css';


export const saludar = (nombre) => {
    console.log('Eriqueta s4');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Que honda, como estas ${nombre}`

    document.body.append(h1);
}