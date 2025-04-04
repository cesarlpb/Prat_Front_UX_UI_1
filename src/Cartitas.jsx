import cartiatas from "./imagenes/cartiatas.png";
import carta1 from "./imagenes/espadas_1.png";
import carta2 from "./imagenes/espadas_2.png";
import carta3 from "./imagenes/espadas_3.png";
import carta4 from "./imagenes/espadas_4.png";
import carta5 from "./imagenes/espadas_5.png";
import carta6 from "./imagenes/espadas_6.png";
import carta7 from "./imagenes/espadas_7.png";
import carta10 from "./imagenes/espadas_10.png";
import carta11 from "./imagenes/espadas_11.png";
import carta12 from "./imagenes/espadas_12.png";
import bastos1 from "./imagenes/bastos_1.png";
import bastos2 from "./imagenes/bastos_2.png";
import bastos3 from "./imagenes/bastos_3.png";
import bastos4 from "./imagenes/bastos_4.png";
import bastos5 from "./imagenes/bastos_5.png";
import bastos6 from "./imagenes/bastos_6.png";
import bastos7 from "./imagenes/bastos_7.png";
import bastos10 from "./imagenes/bastos_10.png";
import bastos11 from "./imagenes/bastos_11.png";
import bastos12 from "./imagenes/bastos_12.png";
import copas1 from "./imagenes/copas_1.png";
import copas2 from "./imagenes/copas_2.png";
import copas3 from "./imagenes/copas_3.png";
import copas4 from "./imagenes/copas_4.png";
import copas5 from "./imagenes/copas_5.png";
import copas6 from "./imagenes/copas_6.png";
import copas7 from "./imagenes/copas_7.png";
import copas10 from "./imagenes/copas_10.png";
import copas11 from "./imagenes/copas_11.png";
import copas12 from "./imagenes/copas_12.png";
import oros1 from "./imagenes/oros_1.png";
import oros2 from "./imagenes/oros_2.png";
import oros3 from "./imagenes/oros_3.png";
import oros4 from "./imagenes/oros_4.png";
import oros5 from "./imagenes/oros_5.png";
import oros6 from "./imagenes/oros_6.png";
import oros7 from "./imagenes/oros_7.png";
import oros10 from "./imagenes/oros_10.png";
import oros11 from "./imagenes/oros_11.png";
import oros12 from "./imagenes/oros_12.png";
import dorso from "./imagenes/dorso.png";
import excalidraw from "./imagenes/excalidraw2.png";
import photopea from "./imagenes/photopea.png";
import "./Cartitas.css";
import { useState, useEffect } from 'react';


function Game() {
  const [nombre, setNombre] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(true);
  const [paloSeleccionado, setPaloSeleccionado] = useState("espadas");
  const [cartasBarajadas, setCartasBarajadas] = useState([]);
  const [cartasVolteadas, setCartasVolteadas] = useState([]);
  const [cartasPareja, setCartasPareja] = useState([]);
  const [paresEncontrados, setParesEncontrados] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);

  const cartasPorPalo = {
    espadas: [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta10, carta11, carta12],
    bastos: [bastos1, bastos2, bastos3, bastos4, bastos5, bastos6, bastos7, bastos10, bastos11, bastos12],
    copas: [copas1, copas2, copas3, copas4, copas5, copas6, copas7, copas10, copas11, copas12],
    oros: [oros1, oros2, oros3, oros4, oros5, oros6, oros7, oros10, oros11, oros12],
  };

  useEffect(() => {
    setCartasVolteadas(new Array(cartasBarajadas.length).fill(false));
    setCartasPareja([]);
  }, [cartasBarajadas]);

  const handleConfirmar = () => {
    if (nombre.trim() !== '') {
      setMostrarPopup(false);
    }
  };

  const barajarCartas = () => {
    const valoresConDibujos = [0, 9, 10, 11]; // Índices para 1, 10, 11, 12
    let cartasSeleccionadas = [];

    Object.values(cartasPorPalo).forEach(palo => {
      valoresConDibujos.forEach(indice => {
        if (palo[indice]) {
          cartasSeleccionadas.push(palo[indice]);
        }
      });
    });

    const cartasUnicas = [];
    while (cartasUnicas.length < 8 && cartasSeleccionadas.length > 0) {
      const randomIndex = Math.floor(Math.random() * cartasSeleccionadas.length);
      const carta = cartasSeleccionadas[randomIndex];
      
      if (!cartasUnicas.includes(carta)) {
        cartasUnicas.push(carta);
      }
      
      cartasSeleccionadas.splice(randomIndex, 1);
    }

    const cartasParaJuego = [...cartasUnicas, ...cartasUnicas];
    for (let i = cartasParaJuego.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cartasParaJuego[i], cartasParaJuego[j]] = [cartasParaJuego[j], cartasParaJuego[i]];
    }

    setCartasBarajadas(cartasParaJuego);
    setPaloSeleccionado("");
    setParesEncontrados(0);
  };

  const manejarClicCarta = (index) => {
    if (cartasVolteadas[index] || cartasPareja.length === 2 || bloqueado) return;

    const nuevasVolteadas = [...cartasVolteadas];
    nuevasVolteadas[index] = true;
    setCartasVolteadas(nuevasVolteadas);

    const nuevasParejas = [...cartasPareja, index];
    setCartasPareja(nuevasParejas);

    if (nuevasParejas.length === 2) {
      setBloqueado(true);
      
      if (cartasBarajadas[nuevasParejas[0]] === cartasBarajadas[nuevasParejas[1]]) {
        setTimeout(() => {
          setCartasPareja([]);
          setParesEncontrados(paresEncontrados + 1);
          setBloqueado(false);
        }, 500);
      } else {
        setTimeout(() => {
          const resetVolteadas = [...nuevasVolteadas];
          resetVolteadas[nuevasParejas[0]] = false;
          resetVolteadas[nuevasParejas[1]] = false;
          setCartasVolteadas(resetVolteadas);
          setCartasPareja([]);
          setBloqueado(false);
        }, 1000);
      }
    }
  };
  const limpiarJuego = () => {
    setPaloSeleccionado("");
    setCartasBarajadas([]);
    setCartasVolteadas([]);
    setCartasPareja([]);
    setParesEncontrados(0);
  };

  return (
    <div>
      {mostrarPopup ? (

        <div className='popup'>
          <h1>¿Quieres ver mis cartas de baraja 
            <a href="https://www.youtube.com/watch?v=GWCldYPEsl4" target="_blank" rel="noopener noreferrer">
            <span className="highlight1"> esp</span>
            <span className="highlight2">añ</span>
            <span className="highlight3">ola </span>
            </a>
            hechas con el dedo to cutres?
          </h1>
          <h2 className="excalidraw-text">
            Dibujadas en:
          </h2>
          <a href="https://excalidraw.com/" target="_blank" rel="noopener noreferrer">
           <img src={excalidraw} alt="Excalidraw" className="excalidraw" />
          </a>
          <h2 className="photopea-text">
            Editadas en:
          </h2>
          <a href="https://www.photopea.com/" target="_blank" rel="noopener noreferrer">
            <img src={photopea} alt="Photopea" className="photopea" />
          </a>
          <div className='popup2'>
            <img src={cartiatas} alt="Juego de cartas" className="titulo" />
            <h2>Introduce tu nombre:</h2>
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleConfirmar()}
            />
            <button className="botonPopUp" onClick={handleConfirmar}>Confirmar</button>
          </div>
        </div>
      ) : (
        <div className="game-container">
          <img src={cartiatas} alt="Juego de cartas" className="titulo2" />
          <h1>Hola <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {nombre}
          </a>!!
          </h1>
          
          <label htmlFor="cards"><h2>Elije las cartas que quieres que se muestren:</h2></label>
          <select
            name="cards"
            id="cards"
            value={paloSeleccionado}
            onChange={(e) => setPaloSeleccionado(e.target.value)}
          >
            <option value="espadas">Espadas</option>
            <option value="bastos">Bastos</option>
            <option value="copas">Copas</option>
            <option value="oros">Oros</option>
          </select>
          
          <h1>Cartas de <span className="highlight4">{paloSeleccionado}</span>:</h1>
          <button 
            className="botonClear" 
            onClick={limpiarJuego}
          >
            {cartasBarajadas.length > 0 ? "Cerrar Juego" : "Limpiar"}
          </button>
          <button className="random" onClick={barajarCartas}>Barajar Cartas</button>

          {cartasBarajadas.length > 0 && (
            <div className="contador-pares">
            Pares encontrados: {paresEncontrados} de 8
          
            {paresEncontrados === 8 && (
              <div className="ganador">
                <h2>¡Felicidades, {nombre}! Has encontrado todos los pares.</h2>
              </div>
            )}
          </div>
          )}


          <div className="carta-container">
            {cartasBarajadas.length > 0 ? (
              cartasBarajadas.map((carta, index) => (
                <div 
                  key={`carta-${index}`}
                  className={`carta ${cartasVolteadas[index] ? 'flipped' : ''}`}
                  onClick={() => manejarClicCarta(index)}
                >
                  <div className="carta-interna">
                    <img src={dorso} alt="Dorso de la carta" className="cara frente" />
                    <img src={carta} alt={`Carta ${index}`} className="cara detras" />
                  </div>
                </div>
              ))
            ) : (
              cartasPorPalo[paloSeleccionado]?.map((carta, index) => (
                <img 
                  key={`${paloSeleccionado}-${index}`}
                  src={carta} 
                  alt={`Carta de ${paloSeleccionado} número ${index + 1}`} 
                  className="carta-simple" 
                />
              ))
            )}
          </div>
        </div>
      )}
      
      <footer className="footer">
        <p>© 2025 Cartitas - <a 
        href="https://www.linkedin.com/in/ethan-hernandez-botia/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Ethan Hernández Botia
      </a> -</p>
      </footer>
    </div>
  );
}

export default Game;