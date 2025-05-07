import React, { useState, useEffect } from 'react';
import './Cartas.css';
import cartasData from './cartas.json';

function Juego() {
    const [mazo, setMazo] = useState([]);
    const [jugadores, setJugadores] = useState([]);
    const [vidas, setVidas] = useState({});
    const [turno, setTurno] = useState(0);
    const [numJugadores, setNumJugadores] = useState(4);
    const [cartaExtra, setCartaExtra] = useState(null);
    const [juegoIniciado, setJuegoIniciado] = useState(false);

    // Inicializar el juego
    const iniciarJuego = () => {
        if (numJugadores < 2) {
            alert("Debe haber al menos 2 jugadores");
            return;
        }

        const mazoBarajado = barajarMazo(cartasData.cartas);
        setMazo(mazoBarajado);
        
        // Repartir cartas: una por jugador + una extra
        const cartasRepartidas = numJugadores + 1;
        const nuevasCartasJugadores = [];
        const nuevasVidas = {};
        
        for (let i = 0; i < numJugadores; i++) {
            nuevasCartasJugadores.push(mazoBarajado[i]);
            nuevasVidas[i] = 3; // 3 vidas por jugador
        }
        
        // La última carta del mazo inicial es la carta extra
        setCartaExtra(mazoBarajado[numJugadores]);
        
        setJugadores(nuevasCartasJugadores);
        setVidas(nuevasVidas);
        setMazo(mazoBarajado.slice(cartasRepartidas));
        setTurno(0);
        setJuegoIniciado(true);
    };

    const barajarMazo = (mazo) => {
        return [...mazo].sort(() => Math.random() - 0.5);
    };

    const rotarCarta = (jugadorActual) => {
        const jugadorDerecha = (jugadorActual + 1) % numJugadores;
        
        if (jugadores[jugadorDerecha].numero === 12) {
            return false;
        }
        
        const nuevasCartas = [...jugadores];
        const cartaTemp = nuevasCartas[jugadorActual];
        nuevasCartas[jugadorActual] = nuevasCartas[jugadorDerecha];
        nuevasCartas[jugadorDerecha] = cartaTemp;
        
        setJugadores(nuevasCartas);
        return true;
    };

    const elegirCartaExtra = () => {
        if (!cartaExtra) return;
        
        const nuevasCartas = [...jugadores];
        nuevasCartas[turno] = cartaExtra;
        setJugadores(nuevasCartas);
        setCartaExtra(null);
        
        pasarSiguienteFase();
    };

    const rechazarCartaExtra = () => {
        setCartaExtra(null);
        pasarSiguienteFase();
    };

    const pasarSiguienteFase = () => {
        if (turno === numJugadores - 1) {
            determinarPerdedor();
        } else {
            setTurno(turno + 1);
        }
    };

    const determinarPerdedor = () => {
        let valorMasBajo = Infinity;
        let perdedor = -1;
        
        jugadores.forEach((carta, index) => {
            const valorCarta = carta.numero === 10 ? 0.5 : carta.numero; // Comodín vale 0.5
            if (valorCarta < valorMasBajo) {
                valorMasBajo = valorCarta;
                perdedor = index;
            }
        });
        
        const nuevasVidas = { ...vidas };
        nuevasVidas[perdedor] -= 1;
        setVidas(nuevasVidas);
        
        if (nuevasVidas[perdedor] <= 0) {
            alert(`¡Jugador ${perdedor + 1} ha perdido el juego!`);
            setJuegoIniciado(false);
        } else {
            repartirNuevasCartas();
        }
    };

    const repartirNuevasCartas = () => {
        if (mazo.length < numJugadores + 1) {
            alert("¡No hay suficientes cartas en el mazo! Reiniciando juego...");
            setJuegoIniciado(false);
            return;
        }
        
        const nuevasCartas = [];
        for (let i = 0; i < numJugadores; i++) {
            nuevasCartas.push(mazo[i]);
        }
        
        setJugadores(nuevasCartas);
        setCartaExtra(mazo[numJugadores]);
        setMazo(mazo.slice(numJugadores + 1));
        setTurno(0);
    };

    const manejarDecision = (decision) => {
        if (decision === 'rotar') {
            const exito = rotarCarta(turno);
            if (!exito) {
                alert('No puedes rotar la carta porque el jugador de la derecha tiene un 12!');
                return;
            }
        }
        
        
        if (turno === numJugadores - 1) {
            
        } else {
            setTurno(turno + 1);
        }
    };

    if (!juegoIniciado) {
        return (
            <div className="configuracion">
                <h1>Configuración del Juego</h1>
                <div>
                    <label>Número de jugadores (2-6): </label>
                    <input 
                        type="number" 
                        min="2" 
                        max="6" 
                        value={numJugadores}
                        onChange={(e) => setNumJugadores(parseInt(e.target.value))}
                    />
                </div>
                <button onClick={iniciarJuego}>Comenzar Juego</button>
            </div>
        );
    }

    return (
        <div className="juego">
            <h1>Juego de Cartas Españolas</h1>
            <div className="jugadores">
                {jugadores.map((carta, index) => (
                    <div key={index} className={`jugador ${index === turno ? 'turno-actual' : ''}`}>
                        <h3>Jugador {index + 1} (Vidas: {vidas[index]})</h3>
                        <div className="carta">
                            <img src={carta.imagen_cara} alt={`${carta.numero} de ${carta.palo}`} />
                            <p>{`${carta.numero} de ${carta.palo}`}</p>
                        </div>
                        {index === turno && turno !== numJugadores - 1 && (
                            <div className="controles">
                                <button onClick={() => manejarDecision('quedar')}>Quedarse</button>
                                <button onClick={() => manejarDecision('rotar')}>Rotar</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mostrar opciones para el último jugador */}
            {turno === numJugadores - 1 && (
                <div className="ultimo-jugador">
                    <h2>Turno del último jugador</h2>
                    <div className="opciones">
                        <div className="carta-actual">
                            <h3>Tu carta actual:</h3>
                            <Carta carta={jugadores[turno]} />
                        </div>
                        
                        {cartaExtra && (
                            <div className="carta-extra">
                                <h3>Carta extra:</h3>
                                <Carta carta={cartaExtra} />
                                <div className="controles">
                                    <button onClick={elegirCartaExtra}>Tomar esta carta</button>
                                    <button onClick={rechazarCartaExtra}>Quedarme con la mía</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

function Carta({ carta }) {
    return (
        <div className="carta">
            <img src={carta.imagen_cara} alt={`${carta.numero} de ${carta.palo}`} />
            <p>{`${carta.numero} de ${carta.palo}`}</p>
        </div>
    );
}

export default Juego;