// **Tema global (light/dark)**: Implementar un proveedor de tema y consumirlo
// desde distintos componentes.

import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";

// 1. Crear contexto
const ThemeContext = createContext();

// 2. Hook personalizado (opcional pero limpio)
const useTheme = () => useContext(ThemeContext);

// 3. Componente Button que consume el contexto
function Button() {
  const { theme } = useTheme();

  return (
    <button
      style={{
        padding: "10px",
        backgroundColor: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      Soy un botón ({theme})
    </button>
  );
}

// 4. Header también usa el contexto
function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Button />
    </header>
  );
}

// 5. Layout no necesita saber del tema
function Layout() {
  return (
    <main>
      <Header />
    </main>
  );
}

// 6. App que provee el contexto
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme }}>
      <h1>Context API Example</h1>
      <button onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "dark" : "light"}
      </button>
      <Layout />
    </ThemeContext.Provider>
  );
}
