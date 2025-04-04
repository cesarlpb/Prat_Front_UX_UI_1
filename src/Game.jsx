import "./Game.css";
import { useState } from 'react';
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

function Game() {
    const [nombre, setNombre] = useState('');
    const [mostrarPopup, setMostrarPopup] = useState(true); 
    const [paloSeleccionado, setPaloSeleccionado] = useState("espadas");

    const cartasPorPalo = {
                espadas: [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta10, carta11, carta12],
                bastos: [bastos1, bastos2, bastos3, bastos4, bastos5, bastos6, bastos7, bastos10, bastos11, bastos12],
                copas: [copas1, copas2, copas3, copas4, copas5, copas6, copas7, copas10, copas11, copas12],
                oros: [oros1, oros2, oros3, oros4, oros5, oros6, oros7, oros10, oros11, oros12],
            };

    const handleConfirmar = () => {
        if (nombre.trim() !== '') {
            setMostrarPopup(false); 
        }
    };
    const [cartasBarajadas, setCartasBarajadas] = useState([]);
    
    return (
        <div>
            {mostrarPopup && (
                <div className='popup'>
                    <h1>¿Quieres ver mis cartas de baraja <span class="highlight1">esp</span><span class="highlight2">añ</span><span class="highlight3">ola </span>
                         echas con el dedo to cutres?</h1>
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
            )}

            {!mostrarPopup && (
                <div className="game-container">
                    <img src={cartiatas} alt="Juego de cartas" className="titulo2" />
                    <h1>Hola <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{nombre} </a>!!</h1>
                    
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
                    
                    <h1>Cartas de <span class="highlight4">{paloSeleccionado}</span>:</h1>
                    <button className="botonClear" onClick={() => setPaloSeleccionado("")}>Limpiar</button>

                        <div className="carta-container"> 

                        {/* Aqui empieza el codigo para girar la carta */}
                        <div className="carta" onClick={(e) => e.currentTarget.classList.toggle('flipped')}>
                            <div className="carta1">
                        <img src={dorso} alt="Dorso de la carta"  className="cara" />
                        <img src={bastos12} alt="Carta de bastos 12"className="cara detras" />
                        </div>
                        </div>
                        {/* Aqui termina el codigo para girar la carta */}
                        

                        {cartasPorPalo[paloSeleccionado]?.map((carta, index) => (
                            <img 
                                key={`${paloSeleccionado}-${index}`}
                                src={carta} 
                                alt={`Carta de ${paloSeleccionado} número ${index + 1}`} 
                                className="carta" 
                            />
                        ))}
                    </div>
                </div>
            )}
            <footer className="footer">
        <p>© 2025 Cartitas - <a href="https://www.linkedin.com/in/ethan-hernandez-botia/">Ethan Hernández Botia</a> -</p>
    </footer>
        </div>
        
    );
}

export default Game;