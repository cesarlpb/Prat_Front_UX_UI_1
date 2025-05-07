import { useInsertionEffect } from 'react';
import PropTypes from 'prop-types';

const insertedRules = new Set();

function getStyleForRule(ruleText, className) {
  const style = document.createElement('style');
  style.textContent = `.${className} { ${ruleText} }`;
  return style;
}

function useCSS(ruleText, className) {
  useInsertionEffect(() => {
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

  return <button className={className}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node
};

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <p>El estilo del botón se inyecta en tiempo de ejecución, justo antes del render.</p>
      <Button>Botón</Button>
    </div>
  );
}

export default App;
