# 📘 useRef en React con ejemplos prácticos

`useRef` es un hook que permite:
1. Guardar una **referencia mutable** que persiste entre renders.
2. Acceder a elementos del DOM directamente.

---

## 🧠 1. Referencia a un input (focus)

```jsx
import { useRef } from "react";

export default function EnfocarInput() {
  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Escribe algo" />
      <button onClick={enfocar}>Enfocar input</button>
    </div>
  );
}
```

## 🕒 2. Guardar un intervalo (sin causar re-render)

```jsx
import { useState, useEffect, useRef } from "react";

export default function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const intervaloRef = useRef(null);

  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervaloRef.current);
  }, []);

  return <h2>Tiempo: {segundos}s</h2>;
}
```

## 🧮 3. Contador que no se renderiza

```jsx
import { useRef } from "react";

export default function ContadorSilencioso() {
  const contador = useRef(0);

  const aumentar = () => {
    contador.current += 1;
    console.log("Valor actual:", contador.current);
  };

  return (
    <div>
      <button onClick={aumentar}>Aumentar (sin render)</button>
    </div>
  );
}
```

## 📌 Notas clave

- `useRef()` devuelve `{ current: valor }`.
- Cambiar `.current` no causa re-render.
- Ideal para guardar datos entre renders, como:
  - ID de un setInterval
  - Valores previos
  - Referencias al DOM

-> **tl;dr:** usa `useRef` cuando quieras guardar algo sin redibujar el componente.