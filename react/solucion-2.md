## ✅ PARTE 2 – Pausar y reanudar el timer con `useRef`

### 🧠 Objetivo:
- Usar `useRef` para guardar `intervalId`
- Añadir botón para pausar/reanudar

### 💡 Código:

```jsx
import React, { useState, useEffect, useRef } from "react";

export default function TimerAvanzado() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (activo) {
      intervalRef.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [activo]);

  const toggleTimer = () => {
    setActivo(!activo);
  };

  return (
    <div>
      <h2>Timer: {segundos} segundos</h2>
      <button onClick={toggleTimer}>
        {activo ? "Pausar" : "Reanudar"}
      </button>
    </div>
  );
}
```

---

### 🎓 Explicación clave:
- `useRef` mantiene su valor entre renders sin causar re-render.
- Cuando `activo` cambia, el `useEffect` se ejecuta:
  - Si `activo` es `true`, inicia el `setInterval`.
  - Si no, se limpia automáticamente el intervalo anterior.
