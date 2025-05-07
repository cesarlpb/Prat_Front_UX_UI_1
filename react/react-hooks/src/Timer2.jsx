import React, { useState, useEffect, useRef } from "react";

export default function Timer2() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (activo) {
      intervalRef.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [activo]);

  const toggleTimer = () => {
    setActivo(!activo);
  };

  return (
    <div>
      <h2>Timer: {segundos} segundos</h2>
      <button onClick={toggleTimer}>
        {activo ? "Pausar" : "Reanudar"}
      </button>
    </div>
  );
}