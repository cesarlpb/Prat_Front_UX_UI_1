# 📘 useState en React – Ejemplos prácticos

`useState` es un hook que te permite añadir estado a tus componentes funcionales en React.

## ✨ Sintaxis básica

```js
const [estado, setEstado] = useState(valorInicial);
```

---

## 🧮 1. Contador simple

```jsx
import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## 🧑‍💻 2. Input controlado

```jsx
import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Tu nombre"
      />
      <p>Hola, {nombre || "invitado"}!</p>
    </div>
  );
}
```

---

## ✅ 3. Checkbox con estado booleano

```jsx
import { useState } from "react";

export default function Checkbox() {
  const [acepta, setAcepta] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={acepta}
          onChange={() => setAcepta(!acepta)}
        />
        Acepto los términos
      </label>
      <p>{acepta ? "Gracias por aceptar" : "Por favor acepta"}</p>
    </div>
  );
}
```

---

## 📝 4. Lista de tareas

```jsx
import { useState } from "react";

export default function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [nueva, setNueva] = useState("");

  const agregarTarea = () => {
    if (nueva.trim() === "") return;
    setTareas([...tareas, nueva]);
    setNueva("");
  };

  return (
    <div>
      <input
        value={nueva}
        onChange={(e) => setNueva(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🔄 5. Cambiar temas (modo oscuro/claro)

```jsx
import { useState } from "react";

export default function Tema() {
  const [oscuro, setOscuro] = useState(false);

  return (
    <div style={{
      backgroundColor: oscuro ? "#222" : "#fff",
      color: oscuro ? "#fff" : "#000",
      padding: "1rem"
    }}>
      <button onClick={() => setOscuro(!oscuro)}>
        Cambiar a modo {oscuro ? "claro" : "oscuro"}
      </button>
    </div>
  );
}
```

---

## 📌 Notas importantes

- `useState` se ejecuta **en cada render**.
- Siempre usa la función `setEstado()` para actualizar el valor.
- No modifiques el estado directamente (ej: `estado.push(x)` ❌).
- Si el nuevo estado depende del anterior, usa la función:
  
```js
setContador(prev => prev + 1);
```

---

## 📦 ¿Quieres más ejemplos?

- Contador con pasos configurables
- Tabs activos
- Cambio de idioma con objeto `useState({ lang: 'es' })`
- Temporizadores con `setTimeout` / `setInterval`

---

**Happy coding! 🚀**
```