/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of hearts
 * 2S = Two of spades
 */


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

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
    console.log(deck);
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




    console.log(deck);
    console.log(carta); // carta debe de ser de la baraja
    return carta;
}

pedirCarta();