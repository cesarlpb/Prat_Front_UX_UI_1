// useInsertionEffect permite insertar elementos en el DOM antes de que se activen los efectos de diseño.

// Preguntas sobre el uso de useInsertionEffect:
// Rendimiento y Optimización:
// ¿Por qué es más eficiente usar useInsertionEffect en lugar de useEffect o useLayoutEffect para la inyección de estilos? ¿Qué problemas podría causar usar los otros hooks en este caso?
// Gestión de Memoria:
// El código actual usa un Set global (insertedRules) para rastrear estilos. ¿Qué pasaría si el componente se desmonta y vuelve a montar? ¿Cómo podríamos mejorar esto para evitar fugas de memoria?
// Efectos Secundarios:
// ¿Qué sucede si el mismo className se usa con diferentes ruleText en diferentes componentes? El código actual solo verifica el className para evitar duplicados. ¿Es esto un problema? ¿Cómo podríamos manejarlo?
// Pruebas y Depuración:
// ¿Cómo podrías probar este componente para asegurarte de que los estilos se están aplicando correctamente? ¿Qué herramientas de desarrollo del navegador serían útiles para depurar problemas con los estilos inyectados?
//
import { useInsertionEffect, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

const insertedRules = new Set();

function getStyleForRule(ruleText, className) {
  const style = document.createElement('style');
  style.textContent = `.${className} { ${ruleText} }`;
  return style;
}

function useCSS(ruleText, className) {
  console.log('1. [useCSS] Inicialización del hook');
  
  useInsertionEffect(() => {
    console.log('3. [useInsertionEffect] Efecto de inserción ejecutándose');
    if (!insertedRules.has(className)) {
      insertedRules.add(className);
      const styleTag = getStyleForRule(ruleText, className);
      document.head.appendChild(styleTag);
      console.log(`Estilo insertado para .${className}`);
    }
  }, [ruleText, className]);

  return className;
}

function Button({ children }) {
  console.log('2. [Button] Renderizado del componente');
  
  const className = useCSS(
    `
      background-color: teal;
      color: white;
      padding: 0.75rem 1.25rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s ease;
    `,
    'custom-button'
  );

  useEffect(() => {
    console.log('4. [useEffect] Efecto estándar ejecutado');
    return () => console.log('6. [useEffect] Limpieza del efecto estándar');
  }, []);

  useLayoutEffect(() => {
    console.log('5. [useLayoutEffect] Efecto de layout ejecutado');
    return () => console.log('7. [useLayoutEffect] Limpieza del efecto de layout');
  }, []);

  console.log('2.1 [Button] Retornando JSX');
  return <button className={className}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node
};

function App() {
  console.log('0. [App] Inicio del renderizado');
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    console.log('6. [App] Efecto después del montaje');
    
    // Para ver la fase de desmontaje
    const timer = setTimeout(() => {
      console.log('--- Desmontando componente ---');
      setShowButton(false);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      console.log('8. [App] Limpieza antes de desmontar');
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <p>El estilo del botón se inyecta en tiempo de ejecución, justo antes del render.</p>
      {showButton && <Button>Botón</Button>}
      {!showButton && <p>Componente desmontado</p>}
    </div>
  );
}

export default App;

// Cómo probarlo:
// Abre la consola del navegador (F12)
// Recarga la página
// Observa los mensajes en orden
// Después de 5 segundos, verás los mensajes de limpieza
// Puntos clave a notar:
// useInsertionEffect se ejecuta antes de que el navegador pinte la pantalla, pero después del renderizado inicial.
// useLayoutEffect se ejecuta después de que el DOM se ha actualizado, pero antes de que el navegador pinte.
// useEffect se ejecuta después de que el navegador ha pintado.