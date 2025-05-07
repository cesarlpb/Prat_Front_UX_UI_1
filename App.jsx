// useId es un hook que genera un ID único y estable para cada componente.
//
import { useId } from 'react';

function App() {
  const idNombre = useId();
  const idEmail = useId();

  return (
    <main style={{padding: '5rem', fontFamily: 'Arial'}}>
      <h1>Formulario</h1>
      <form>
        <div>
          <label htmlFor={idNombre}>Nombre:</label>
          <input id={idNombre} name="nombre" type="text" />
        </div>
        <br />
        <div>
          <label htmlFor={idEmail}>Email:</label>
          <input id={idEmail} name="email" type="email" />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default App;
// useId es un hook de React que genera un ID único y estable para cada componente. Se introdujo en React 18.
// No puedes llamarlo dentro de bucles o condiciones.
// useId no debe usarse para generar keys en una lista

// ¿Cuándo usarlo?
// asociar un <label> con un <input> (htmlFor)
// Crear componentes reutilizables donde se necesite un ID único

// Preguntas (elige 4):
// - Rendimiento: ¿Cómo afecta useId al rendimiento de la aplicación cuando se usa en grandes cantidades de formularios dinámicos?
// - SSR/SSG: ¿Cómo se comporta useId en aplicaciones con renderizado en el servidor (SSR) o generación estática (SSG)?
// - Migración: ¿Cuál sería la mejor manera de migrar formularios existentes que usan uuid o nanoid a useId?
// - Testing: ¿Qué consideraciones especiales hay que tener en cuenta al escribir pruebas unitarias para componentes que usan useId?
// - Accesibilidad: ¿Cómo se comportan los IDs generados con lectores de pantalla y otras herramientas de accesibilidad?
// - Colisiones: ¿Es posible que los IDs generados entren en conflicto con IDs estáticos en el mismo documento?
// - Personalización: ¿Es posible personalizar el prefijo de los IDs generados por useId para propósitos de nombrespacing?
// - Uso avanzado: ¿Cuáles son los casos de uso avanzados de useId más allá de la asociación label-input?
// - Compatibilidad: ¿Qué sucede si la aplicación necesita ser compatible con versiones de React anteriores a la 18?
// - Rendizado condicional: ¿Cuál es la mejor práctica para manejar componentes que usan useId pero que podrían estar condicionalmente renderizados?