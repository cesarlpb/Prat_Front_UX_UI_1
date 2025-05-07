import React, { useState, useTransition } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(false);


  const sumarContador = () => {
    setLoading(true);
    startTransition(() => {
      setTimeout(() => {
        setContador((prev) => prev + 10);
        setLoading(false);
      }, 2000); // Esperar 2 segundos de hacer la sumar
    //   
    });
  };

  return (
    <div>
      {/* Mientras se espera 2s, el estado loading es true, y se muestra el texto "Cargando...",
      cunado es flase, se muestra el valor del contador */}
      <h2>{loading ? "Cargando..." : `Contador: ${contador}`}</h2> 
      <button onClick={sumarContador}>Sumar 10</button>
    </div>
  );
};

export default Contador;