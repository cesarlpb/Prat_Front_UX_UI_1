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
// sociar un <label> con un <input> (htmlFor)
// Crear componentes reutilizables donde se necesite un ID único

