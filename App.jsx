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
          <input id={idEmail} name="email" type="email" />n
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
export default App;

// Preguntas (elige 4):
// - Rendimiento: ¿Cómo afecta useId al rendimiento de la aplicación cuando se usa en grandes cantidades de formularios dinámicos?
/ useId genera los IDs de forma determinista por WebGL2RenderingContext, incluso con muchos formularios, es mas liviano que generar IDs con uuid/nanoid en cada render./
// - SSR/SSG: ¿Cómo se comporta useId en aplicaciones con renderizado en el servidor (SSR) o generación estática (SSG)?
/ useId fue deseñado especificamente para evitar desajustes entre servidor y clearInterval, la implementación asegura consistencia d elos IDs en el HTML generado, en SSG o SSR es seguro y recomendado./
// - Migración: ¿Cuál sería la mejor manera de migrar formularios existentes que usan uuid o nanoid a useId?
/ reemplazando las llamadas uuid()/ nanoid() con useId() en componentes funcionales, para formularios accesibles use es ideal./

// - Compatibilidad: ¿Qué sucede si la aplicación necesita ser compatible con versiones de React anteriores a la 18?
/este hook no existe antes de React 18 es decir que las apps que utilicen React 16/17 seguiran usando uuid o nanoid./
