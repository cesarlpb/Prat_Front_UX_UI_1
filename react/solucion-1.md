## ✅ PARTE 1 – `Timer` básico con `useEffect` y `useState`

### 🧠 Objetivo:
- Aprender cómo usar `setInterval` con `useEffect`
- Mostrar segundos transcurridos

### setInterval y clearInterval en JavaScript

- setInterval: ejecuta una función cada X milisegundos
- clearInterval: parar la ejecución de la función

```javascript
  let ahora = new Date().toLocaleTimeString();
  console.log(ahora);

  const timer = setInterval(() => {
    console.log("Hora actual: " + new Date().toLocaleTimeString())  
  }, 1_000); // 1 seg

  // Hora actual: 17:57:11
  // Hora actual: 17:57:12
  // Hora actual: 17:57:13
  // Hora actual: 17:57:14

  clearInterval(timer); // Parar la ejecución del timer
```

### 💡 Código:

```jsx
import { useState, useEffect } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000);

    // Limpiar el intervalo cuando se desmonte el componente
    return () => clearInterval(intervalId);
  }, []); // Solo se ejecuta al montar (una vez)

  return (
    <div>
      <h2>Timer: {segundos} segundos</h2>
    </div>
  );
}
```