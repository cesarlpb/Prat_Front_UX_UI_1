// use es una API de React que te permite leer el valor de un recurso como una Promesa o contexto.
// useContext es una API de React que te permite leer el valor de un contexto.

// 1. ¿Qué pasaría si movemos el hook use fuera del condicional en el componente Button?
// Respuesta 1: Moverlo fuera significaría que el recurso se intentaría leer en cada renderizado del componenete Button, independeientemente de esa condición.
// 2. ¿Cómo se comportaría la aplicación si el ThemeContext.Provider no estuviera presente?
// Respuesta 2: La aplicación se comportaría de manera inesperada o incluso fallar si intenta acceder a propiedades de este valor por defecto.
// 3. ¿Por qué es útil poder usar el hook use dentro de condicionales?
// Respuesta 3: Ofrece varios beneficios como: Acceso declarativo a recursos, Lógica más simple y Menos código repetitivo.
// Y, finalmente, cómo se haría esto si no tuviésemos el hook use, ¿sería posible?
// Respuesta 4: Sí, sería posible lograr la funcionalidad de manera similar (especialmente el acceso condicional a recursos) sin el hook use, pero generalmente requeríria más código y un enfoque diferente.
//

/** Revisión de respuestas:
 * Nota: 8/10
 *
 * 1, 3, 4 son correctas
 * Respuesta 2 podría ser más precisa sobre el error específico que ocurriría
 * Falta mención de la regla fundamental de React sobre el orden de los hooks
 * No se menciona la práctica recomendada de usar null en lugar de false en el componente Button
 * Falta un ejemplo práctico de cómo implementar la solución alternativa mencionada en la respuesta 4
 */

import { createContext, use } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Bienvenido">
      <Button show={true}>Registrarse</Button>
      <Button show={false}>Iniciar sesión</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = use(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ show, children }) {
  if (show) {
    const theme = use(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
      </button>
    );
  }
  return false
}
