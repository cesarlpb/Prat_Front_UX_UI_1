import { useState, useEffect } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;
    const intervalId = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    // Limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(intervalId);
  }, [pausado]); // Solo se ejecuta al montar (una vez)

  useEffect(() => {
    console.log("segundos:", segundos);
    document.title = `Contador: ${segundos}`;
  }, [segundos]);

  // const handleInterval = () => {
  //   console.log("click");
  // };

  const handlePause = () => {
    setPausado(!pausado);
  };

  return (
    <div>
      <h2>Timer: {segundos} segundos</h2>
      {/* Añadir handleTimer para parar el setInterval con clearInterval */}
      <button onClick={() => handlePause()}>
        {pausado ? "Reanudar" : "Pausar"}
      </button>
      {/* Ejercicio: hacer un botón de resetear a 0 */}
      {/* <button onClick={() => handleInterval()}>Parar</button> */}
    </div>
  );
}
