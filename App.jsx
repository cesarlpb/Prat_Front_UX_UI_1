// useMemo es un gancho de React que permite almacenar en caché el resultado de 
// un cálculo entre repeticiones.

import React, { useState, useMemo } from 'react';

/**
 * Función costosa que simula un cálculo intensivo
 * @param {number|string} inputValue - Valor de entrada para el cálculo
 * @returns {string} Resultado procesado
 */
const expensiveFunction = (inputValue) => {
  console.log('Ejecutando cálculo costoso...');
  
  // Operación costosa simulada
  let result = Number(inputValue) * 42;
  
  // Bucle para simular procesamiento pesado
  for (let i = 0; i < 1_000_000; i++) {
    // Operación vacía para consumir tiempo de CPU
    Math.sqrt(i);
  }
  
  return 'World';
};

/**
 * Versión mejorada del componente que muestra el uso de useMemo
 * para optimizar cálculos costosos
 */
const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(0);

  // Sin useMemo - se ejecuta en cada renderizado
  const withoutMemo = expensiveFunction(inputValue);
  
  // Con useMemo - solo se recalcula cuando inputValue cambia
  const withMemo = useMemo(
    () => expensiveFunction(inputValue),
    [inputValue]  // Dependencias: solo se recalcula si inputValue cambia
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  console.log('--- Renderizado del componente ---');
  console.log('Valor del input:', inputValue);
  console.log('Contador:', count);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Optimización con useMemo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>
          Input (cambia para ver la diferencia):
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <button onClick={incrementCount} style={{ marginBottom: '20px' }}>
        Incrementar contador (renderiza el componente)
      </button>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
          <h2>Sin useMemo</h2>
          <p>Valor: {withoutMemo}</p>
          <p>Se recalcula en cada renderizado</p>
        </div>
        
        <div style={{ border: '1px solid #4CAF50', padding: '15px', borderRadius: '5px' }}>
          <h2>Con useMemo</h2>
          <p>Valor: {withMemo}</p>
          <p>Solo se recalcula cuando el input cambia</p>
        </div>
      </div>
      
      <p style={{ marginTop: '20px', color: '#666' }}>
        <strong>Nota:</strong> Abre la consola del navegador para ver cuándo se ejecutan los cálculos
      </p>
    </div>
  );
};

export default App;

/*
PREGUNTAS PARA PROFUNDIZAR:
1. ¿Por qué el cálculo sin useMemo se ejecuta en cada renderizado del componente, incluso cuando solo cambia el contador? ¿Cómo afecta esto al rendimiento?
-React recalcula las funciones en cada renderizado para que la IU se actualice rápidamente. Lo malo es que si son muchas funciones o muy complejas, afecta al rendimiento

2. ¿Qué sucedería si elimináramos el array de dependencias en el useMemo?
   ¿Y si añadiéramos una dependencia que cambia frecuentemente como 'count'?
 -Si eliminaramos el array el cálculo se ejecutará en cada renderizado y tendríamos problema de rendimiento.
 -Y si añadieramos un 'count' lo sobrecargariamos porque la memoria se actualizaría en cada renderizado

3. ¿Cómo podríamos medir el impacto real en el rendimiento del uso de useMemo
   en una aplicación real? ¿Qué herramientas de desarrollo podríamos usar?
 -Existen extensiones como Lighthouse y Sentry que ayudan a poder ver el rendimiento y corregirlo.
  Habría que provar la funcion con y sin useMemo a ver si compensa 


4. ¿En qué casos NO es recomendable usar useMemo? ¿Puede el uso excesivo
   de useMemo tener un impacto negativo en el rendimiento?
 - Cuando es una función sencilla. Ya que un uso excesivo del useMemo puede provocar
   fallos en el rendimiento

*/
