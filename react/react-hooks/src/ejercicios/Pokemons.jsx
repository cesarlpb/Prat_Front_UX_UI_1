// Simular carga de datos: Usar setTimeout para simular una API 
// y mostrar un "Cargando..." inicial.

import { useEffect, useState } from "react";
// import spectrobes from "./datasSpectrobes-v1.json";
import { pokedex } from "./pokemons";
import "./Pokemons.css"

export default function Pokemons() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // setTimeout => 1 seg de delay en la carga de datos
    setTimeout(() => {
      console.log("Esperamos 3 segundo...");
      // Cargamos los datos de otro archivo (en real sería un fetch a un API...)
      setData(pokedex.slice(0, 3));
      console.log("Cargamos los datos.");
    }, 3 * 1_000)
  }, [])
  return (
    <>
    {data.length > 0 ? (<div className="pokemons-container">
      {data.map(item => (
        <div key={item.id} className="pokemon-card">
          <p>{item.id} - {item.nombre}</p>
          <img src="https://placehold.co/150" alt={item.nombre} />
          <p>{item.descripcion}</p>
          </div>
        ))}
      </div>) : <p>Cargando...</p>}

      {/* Para usar los spectrobes hay que cargar la variables
      y cambiar los nombres de los campos... */}
    </>
  )
}