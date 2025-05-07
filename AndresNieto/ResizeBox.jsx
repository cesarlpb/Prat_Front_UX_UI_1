// useLayoutEffect es una versión de useEffect que se activa antes de que el navegador vuelva a pintar la pantalla.
// Es útil para lecturas síncronas del DOM que deben realizarse antes de que el navegador pinte.

// CÓMO MEDIR EL RENDIMIENTO:
// 1. Abre las Herramientas de Desarrollo del Navegador (F12)
// 2. Ve a la pestaña "Rendimiento"
// 3. Haz clic en "Grabar" y redimensiona la caja
// 4. Detén la grabación y revisa cuántas veces se ejecuta el callback

// OPCIÓN 1: Sin debounce (más preciso pero más pesado)
// - Se ejecutará en cada frame de animación durante el redimensionamiento
// - Mayor precisión pero puede afectar el rendimiento en dispositivos lentos

// OPCIÓN 2: Con debounce (más eficiente pero menos preciso)
// - Se ejecutará solo después de que el usuario deje de redimensionar
// - Mejor rendimiento pero puede perder algunas actualizaciones intermedias

// EJERCICIO: Prueba ambas versiones y compara:
// 1. ¿Cuántas veces se ejecuta el callback en cada caso?
// 2. ¿Notas diferencia en la fluidez al redimensionar?
// 3. ¿Qué ventajas tiene cada enfoque?
// 4. ¿En qué casos preferirías uno sobre el otro?

// NOTA: Para implementar debounce, descomenta el código comentado más abajo
// y comenta la implementación actual del ResizeObserver

// CÓMO IMPLEMENTAR DEBOUNCE:
// 1. Crea un timeoutId fuera del observer
// 2. Limpia el timeout anterior en cada llamada
// 3. Establece un nuevo timeout para la actualización
// 4. Ajusta el valor del timeout (100ms es un buen punto de partida)

// EJEMPLO DE IMPLEMENTACIÓN CON DEBOUNCE:
/*
  useLayoutEffect(() => {
    if (boxRef.current) {
      let timeoutId;
      
      const resizeObserver = new ResizeObserver(entries => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          for (let entry of entries) {
            const newWidth = entry.contentRect.width;
            const newHeight = entry.contentRect.height;
            setBoxWidth(newWidth);
            setBoxHeight(newHeight);
          }
        }, 100); // Ajusta este valor según sea necesario
      });

      resizeObserver.observe(boxRef.current);

      return () => {
        clearTimeout(timeoutId);
        resizeObserver.disconnect();
      };
    }
  }, []);
*/
//
// Elige 4 preguntas e intenta hacer la comparativa con y sin useLayoutEffect:
// ¿Cómo afecta al rendimiento el uso de useLayoutEffect en este caso?
// ¿Sería más eficiente usar useEffect en lugar de useLayoutEffect? ¿Por qué?
// Ciclo de vida:
// ¿Qué pasaría si el componente se desmonta y vuelve a montar rápidamente?
// ¿Cómo podrías optimizar las actualizaciones de estado para evitar renders innecesarios?
// Accesibilidad:
// ¿Cómo podrías mejorar la accesibilidad de este componente para usuarios con discapacidades?
// ¿Qué atributos ARIA podrías añadir para hacerlo más accesible?
// Pruebas:
// ¿Cómo probarías este componente?
// ¿Qué casos de prueba considerarías importantes?
// Uso en producción:
// ¿Hay alguna limitación o consideración importante al usar ResizeObserver en producción?
// ¿Cómo manejarías el soporte para navegadores más antiguos que no admitan ResizeObserver?
//
import React, { useLayoutEffect, useRef, useState } from 'react';

function ResizeBox() {
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const newWidth = entry.contentRect.width;
          const newHeight = entry.contentRect.height;
          setBoxWidth(newWidth);
          setBoxHeight(newHeight);
        }
      });

      resizeObserver.observe(boxRef.current);

      // Limpieza al desmontar
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    
    <div style={{ padding: '20px' }}>
      <div
      
        ref={boxRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          resize: 'both',
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          border: '0px solid red',
          borderRadius: '4px',
        }}
      >
        CAMBIA EL TAMAÑO DE LA CAJA
      </div>
      <p>Ancho calculado con useLayoutEffect: {boxWidth}px</p>
      <p>Ancho calculado con useLayoutEffect: {boxHeight}px</p>
    </div>
  );
}

export default ResizeBox;
