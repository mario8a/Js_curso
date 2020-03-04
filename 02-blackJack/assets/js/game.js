/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of hearts
 * 2S = Two of spades
 */


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// referencias html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHtml = document.querySelectorAll('small');

// Esta funcion crea una nueva baraja
const crearDeck = () => {


    for (let i = 2; i <= 10; i++) {

        for (let tipo of tipos) {
            deck.push(i + tipo);
        }

    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    // console.log(deck);
    deck = _.shuffle(deck);
    // console.log(deck);
    return deck;
}

crearDeck();


// Esta funcion permite tomar una nueva carta

const pedirCarta = () => {

    // no se podria hacer el pop si no hay cartas, para eso es esta condicion
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }

    const carta = deck.pop(); // pop remueve el ultimo arreglo




    // console.log(deck);
    // console.log(carta); // carta debe de ser de la baraja
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;
    // console.log({ valor });




    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1

    // if (isNaN(valor)) {
    //     // console.log('No es un numero');

    //     puntos = (valor === 'A') ? 11 : 10;

    // } else {
    //     console.log('Es un numero');
    //     puntos = valor * 1;
    // }

    // console.log(puntos);


}

//turno de la computadora 
const turnoComputadota = (puntosMinimos) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        // console.log(puntosJugador);
        puntosHtml[1].innerHTML = puntosComputadora;

        //creando imagen de forma dinamica
        // <img class="carta" src="assets/cartas/10D.png" alt="">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }


    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana')
        } else {
            alert('Computadora gana')
        }

    }, 100)

}

// const valor = valorCarta(pedirCarta());
// console.log({ valor });


// Eventos
btnPedir.addEventListener('click', () => {


    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    // console.log(puntosJugador);
    puntosHtml[0].innerHTML = puntosJugador;

    //creando imagen de forma dinamica
    // <img class="carta" src="assets/cartas/10D.png" alt="">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadota(puntosJugador);

    } else if (puntosJugador === 21) {
        console.warn('21!!!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadota(puntosJugador);
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadota(puntosJugador);
});


btnNuevo.addEventListener('click', () => {

    console.clear();


    deck = []; // vaciando el deck
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;

    divCartasComputadora.innerHTML = ''
    divCartasJugador.innerHTML = ''

    btnPedir.disabled = false;
    btnDetener.disabled = false;

});