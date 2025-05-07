import { useEffect, useState, createContext, useContext } from "react";
import Timer from "./Timer.jsx";
import Timer2 from "./Timer2.jsx";
import Form from "./Form.jsx";
import ThemeChanger from "./ejercicios/ThemeChanger.jsx";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import Pokemons from "./ejercicios/Pokemons.jsx";
import EnfocarInput from "./ejercicios/EnfocarInput.jsx";

export default function Contador() {
  // Ejemplo del primer timer:
  // const [contador, setContador] = useState(0);
  //
  const [theme, setTheme2] = useState("light");

  const toggleTheme = () => {
    setTheme2(theme === "light" ? "dark" : "light");
    console.log("Theme2 cambiado en contexto: " + theme);
  };

  const ThemeContext = createContext({ modo: theme, setModo: setTheme2 });
  // No usamos setModo pero se puede pasar a otro componente:
  const { modo } = useContext(ThemeContext);
  // const { modo } = useTheme();
  console.log("modo:", modo);

  useEffect(() => {
    // Solo cuando carga el componente
    // console.log("Renderizado inicial del componente");
    toast("Renderizado inicial del componente", {
      theme: "dark",
    });
  }, []);

  // useEffect(() => {
  //   // Cada vez que cambia el estado
  //   document.title = `Contador: ${contador}`;
  //   console.log("Contador actualizado:", contador);
  //   toast("Contador:" + contador, {
  //     theme: "dark"
  //   });
  // }, [contador]);

  return (
    <ThemeContext.Provider value={{ modo }}>
      <div className="App">
        {/* El tamaño de los h1 va a cambiar próximamente (este año) 
        -> Hay que colocar estilos y no dejarlos con los defaults
        */}
        {/* <section>
          <h1>nivel 1</h1>
          <section>
            <h1>nivel 1 anidado</h1>
            <section>
              <h1>nivel 1 anidado 2</h1>
              <section>
                <h1>nivel 1 anidado 3</h1>
              </section>
            </section>
          </section>
        </section> */}

        {/* Ejemplo con contador básico */}
        {/* <h1>Contador: {contador}</h1> */}

        {/* Ejercicio: hacer un botón de decrementar */}
        {/* Ejercicio: hacer un botón de resetear a 0 */}

        {/* <button onClick={() => setContador(contador + 1)}>Incrementar</button> */}
        {/* <hr /> */}
        {/* Final del ejemplo con contador básico */}

        <ToastContainer />
        <h1>My Awesome App is amazing!</h1>

        <div>
          <button onClick={toggleTheme}>
            {/* colocamos el valor desde el contexto: */}
            Cambiar a {modo}
          </button>
        </div>
        <hr />

        <EnfocarInput />
        <hr />

        <Pokemons />
        <hr />

        <ThemeChanger />
        <hr />

        <h2>Timer</h2>
        <Timer />

        <h2>Timer 2</h2>
        <Timer2 />

        <hr />

        <h2>Form</h2>
        <Form />
      </div>
    </ThemeContext.Provider>
  );
}
