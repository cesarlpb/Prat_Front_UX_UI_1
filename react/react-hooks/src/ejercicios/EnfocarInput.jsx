// Enfocar input: Al hacer clic en un botón, enfocar un campo de texto.

import { useRef } from "react";

export default function EnfocarInput() {
  const inputRef = useRef(null);

  const enfocar = () => {
    console.log(inputRef.current); // <input placeholder="Escribe algo">
    inputRef.current.focus(); // enfoca el input -> se puede escribir
  };

  return (
    <div>
      <h2>Enfocar Input con useRef</h2>
      <input ref={inputRef} placeholder="Escribe algo" />
      <button onClick={enfocar}>Enfocar input</button>
    </div>
  );
}