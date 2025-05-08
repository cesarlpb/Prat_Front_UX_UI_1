
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
// - El useLayoutEffect se llama cada vez que que se modifica la caja sin embargo en el debounce los useStates 
// solo se llaman cuando el usuario deja de modificar la caja
// 2. ¿Notas diferencia en la fluidez al redimensionar?
// - No mucho pero si hay una ligera diferencia cuando se usa el debounce, los movimientos de la caja va un
// poco mas fluido
// 3. ¿Qué ventajas tiene cada enfoque?
// - Sin el debaunce podemos saber el tamaño de la caja a tiempo real y usar esos datos de forma mas continua.
// con el debaunce solo se conocerá el tamaño de la caja al soltar el debounce y usar esos datos cuando ya se
// haya modificado los datos.
// 4. ¿En qué casos preferirías uno sobre el otro?
// - Si quiero cambiar la caja y los objetos aledaños a la caja en tiempo real utilizaria. El rebounce lo 
// utilizaria cuando solo cuando quiera el tamaño final.
// 

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
// - Si se ponen ciertas funciones dentro que se ejecutan cada vez que se lee el useLayoutEffect puede afectar 
// al rendimiento de 

// ¿Sería más eficiente usar useEffect en lugar de useLayoutEffect? ¿Por qué?
// - En este caso no porque pese a que la diferencia seria pequeña, para medir la caja de forma mas eficiente
// dentro del layout visual.

// ¿Cómo podrías optimizar las actualizaciones de estado para evitar renders innecesarios?
// - Primero se comprobaria que utlidad le daria al resize de la caja, si solo quiero el tamaño una vez
// ya se haya recogido el tamaño definitivo se usaria un codigo como el debounce o algo parecido para evitar
// que se actualicen los datos cuando haga falta. Tambien se volveria a renderizar la caja caundo con
// en el tamaño deseado.

// Accesibilidad:
// ¿Cómo podrías mejorar la accesibilidad de este componente para usuarios con discapacidades?
// -Haria que los bordes tubiesen algun simbolo mas grande parta que se pueda ver mejor que se puede 
// modificar el tamaño de la caja.

// Ciclo de vida:
// ¿Qué pasaría si el componente se desmonta y vuelve a montar rápidamente?
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
  var callCounter = 0
  const boxRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);

  /*
  
  useLayoutEffect(() => {
    if (boxRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          const newWidth = entry.contentRect.width;
          const newHeight = entry.contentRect.height;
          setBoxWidth(newWidth);
          setBoxHeight(newHeight);
          callCounter = callCounter +1
          console.log(callCounter)
        }

      });
      
      resizeObserver.observe(boxRef.current);

      // Limpieza al desmontar
      return () => resizeObserver.disconnect();

    }
  }, []);
   */
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
            callCounter = callCounter +1
            console.log(callCounter)
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
