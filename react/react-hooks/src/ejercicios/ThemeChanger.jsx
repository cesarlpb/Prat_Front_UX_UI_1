// Cambiar tema manualmente: Cambiar entre light/dark sin contexto, 
// solo con estado local.

import { useState } from "react";
import "./ThemeChanger.css"

export default function ThemeChanger(){

  const [theme, setTheme] = useState("dark");
  // Nota: También podemos usar un boolean

  const handleThemeChange = () => {
    setTheme(theme == "dark" ? "light" : "dark");
    // setTheme(!theme) // usando un boolean
  }

  return (
    <>
      <h2>ThemeChanger</h2>
      <button className={theme} onClick={handleThemeChange}>Botón {theme}</button>
    </>
  )
}