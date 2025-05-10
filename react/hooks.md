

## 🧠 Hooks en React (+ ejemplo en React Native)

### ⏱ Duración: 1h 30min  

---

## 1️⃣ ¿Qué son los Hooks?

> **Definición**: Los hooks son funciones que permiten a los componentes funcionales tener estado, efectos secundarios, y otras capacidades de React que antes estaban solo disponibles en clases.

- [Extensión React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### ⚡ Objetivo:
- Entender que los hooks reemplazan a las clases para lógica de estado, efectos, refs, etc.

---

## 2️⃣ Hooks que cubrimos

| Hook         | Qué hace                                                  |
|--------------|-----------------------------------------------------------|
| `useState`   | Guarda y actualiza estado dentro del componente           |
| `useEffect`  | Ejecuta efectos secundarios (como fetch, timers, etc.)    |
| `useRef`     | Guarda referencias mutables sin provocar renders          |
| `useContext` | Accede a valores globales definidos en un Context         |

Más hooks de React 18/19 en [más hooks](./mas-hooks.md)

---

## 3️⃣ Ejemplo en React (web)

```jsx
import { useState, useEffect } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## 4️⃣ Mismo ejemplo en React Native

```jsx
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Contador actualizado:", contador);
  }, [contador]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}
```

---

## 🧪 Actividad sugerida para los alumnos

1. Crear un componente `Timer` que:
   - Use `useEffect` para empezar un contador con `setInterval`.
   - Use `useState` para mostrar segundos transcurridos.
   - Limpie el intervalo en `useEffect` con return.

   - Variante: Pomodoro (temporizador de X minutos)

2. Ampliar el componente:
   - Añadir botón para pausar/reanudar.
   - Añadir `useRef` para guardar el `intervalId`.

---

## 🎁 Bonus: React Native CLI vs Expo

- **Expo** es ideal para empezar: más fácil de instalar, sin necesidad de Xcode/Android Studio.
- Puedes usar Expo en el navegador (`snack.expo.dev`) o instalar Expo Go en móvil.