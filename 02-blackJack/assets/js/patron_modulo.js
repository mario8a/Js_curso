const miModulo = (() => {

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // referencias html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHtml = document.querySelectorAll('small');

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHtml.forEach(elemen => elemen.innerText = 0);

        divCartasJugadores.forEach(elemn => elemn.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta funcion crea una nueva baraja
    const crearDeck = () => {

        deck = [];
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
        return _.shuffle(deck);
    }


    // Esta funcion permite tomar una nueva carta

    const pedirCarta = () => {

        // no se podria hacer el pop si no hay cartas, para eso es esta condicion
        if (deck.length === 0) {
            throw 'No hay cartas en el deck'
        }

        return deck.pop(); // pop remueve el ultimo arreglo

    }

    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);

        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10 :
            valor * 1
    }

    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHtml[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno]
    }

    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGandor = () => {

            const [puntosMinimos, puntosComputadora] = puntosJugadores;

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
        //turno de la computadora 
    const turnoComputadota = (puntosMinimos) => {

        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);


        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGandor();

    }

    // const valor = valorCarta(pedirCarta());
    // console.log({ valor });


    // Eventos
    btnPedir.addEventListener('click', () => {


        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);


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

        turnoComputadota(puntosJugadores[0]);
    });


    btnNuevo.addEventListener('click', () => {

        inicializarJuego();



    });

    // IMPORTANTE LO UNICO QUE RETORNE SERA PUBLICO Y VISIBLE DEL MODULO
    return {
        nuevoJuego: inicializarJuego
    }

})();