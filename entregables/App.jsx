// useCallback es un gancho de React que permite almacenar en caché la 
// definición de una función entre repeticiones.

import { useCallback, useState, memo } from 'react';
import './App.css';

/**
 * Componente de botón memoizado que solo se renderiza cuando cambian sus props
 */
const BotonIncrementar = memo(({ onClick, contador }) => {
  console.log('Renderizando BotonIncrementar');
  return (
    <button onClick={onClick}>
      Incrementar ({contador})
    </button>
  );
});

/**
 * Componente principal que demuestra el uso de useCallback
 */
function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('Hola');
  
  // useCallback memoiza la función para mantener la misma referencia entre renderizados
  // Solo se recrea cuando cambian las dependencias (en este caso, ninguna)
  const incrementar = useCallback(() => {
    console.log('Ejecutando incrementar');
    setContador(prev => prev + 1);
  }, []);

  // Versión sin useCallback (para comparación)
  const incrementarSinCallback = () => {
    console.log('Ejecutando incrementarSinCallback');
    setContador(prev => prev + 1);
  };

  console.log('--- Renderizado de App ---');

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>useCallback Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Contador: {contador}</h2>
        <p>Texto: {texto}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Escribe algo para forzar renderizados:
          <input 
            value={texto} 
            onChange={(e) => setTexto(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '20px',
        marginBottom: '20px'
      }}>
        <div style={{ border: '1px solid #4CAF50', padding: '15px', borderRadius: '5px' }}>
          <h3>Con useCallback</h3>
          <BotonIncrementar 
            onClick={incrementar} 
            contador={contador} 
          />
          <p style={{ fontSize: '0.9em', color: '#666' }}>
            El botón solo se renderiza cuando cambia el contador
          </p>
        </div>

        <div style={{ border: '1px solid #f44336', padding: '15px', borderRadius: '5px' }}>
          <h3>Sin useCallback</h3>
          <BotonIncrementar 
            onClick={incrementarSinCallback} 
            contador={contador} 
          />
          <p style={{ fontSize: '0.9em', color: '#666' }}>
            El botón se renderiza en cada cambio del input
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        <h3>¿Qué está pasando?</h3>
        <p>
          <strong>useCallback</strong> memoiza la función para mantener la misma referencia entre renderizados,
          lo que es útil cuando pasamos callbacks a componentes hijos optimizados que dependen de la igualdad de referencias
          para evitar renderizados innecesarios.
        </p>
        <p>
          Abre la consola del navegador para ver cuándo se renderizan los componentes.
        </p>
      </div>
    </div>
  );
}

export default App;

/*
PREGUNTAS PARA PROFUNDIZAR:

1. ¿Por qué el componente BotonIncrementar se renderiza cuando cambia el estado 'texto'
   en el caso de usar la función sin useCallback? ¿Cómo afecta esto al rendimiento?

2. ¿Qué sucedería si elimináramos el memo() del componente BotonIncrementar? 
   ¿Seguiría siendo útil el useCallback en ese caso?

3. ¿En qué situaciones es realmente beneficioso usar useCallback? 
   ¿Cuándo podría ser contraproducente su uso?

4. ¿Cómo se relaciona useCallback con useMemo? 
   ¿Podríamos reescribir el ejemplo usando useMemo en lugar de useCallback?
   ¿Qué ventajas y desventajas tendría cada enfoque?

5. ¿Qué pasa si añadimos una dependencia al array de useCallback? 
   ¿Cómo afecta esto al rendimiento y al comportamiento del componente?
*/
