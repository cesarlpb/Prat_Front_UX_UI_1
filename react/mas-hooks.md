# 🚀 Hooks en React 19

En **React 19** (actualización planificada para 2024/2025), se introducen **nuevos hooks** además de los hooks estándar que ya existen desde React 16.8.

Aquí tienes una lista actualizada de hooks implementados oficialmente en React 19, organizados por categoría:

---

## 🧩 Hooks de Estado y Ciclo de Vida

| Hook                | Descripción                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `useState`          | Manejo de estado local en componentes funcionales.                          |
| `useReducer`        | Alternativa a `useState` para lógica de estado compleja.                    |
| `useEffect`         | Efectos secundarios después del renderizado.                                |
| `useLayoutEffect`   | Igual a `useEffect` pero se ejecuta sincrónicamente después del render.     |
| `useInsertionEffect`| Se ejecuta antes de que los estilos sean insertados en el DOM (CSS-in-JS). |

---

## 🔁 Hooks de Referencia

| Hook                 | Descripción                                                              |
|----------------------|--------------------------------------------------------------------------|
| `useRef`             | Referencia mutable que persiste entre renders. Acceso directo al DOM.    |
| `useImperativeHandle`| Controla qué métodos expone un componente con `ref`.                     |

---

## 🧠 Hooks de Contexto

| Hook         | Descripción                              |
|--------------|------------------------------------------|
| `useContext` | Acceso al valor de un contexto React.    |

---

## 📦 Hooks de Renderizado y Performance

| Hook              | Descripción                                                                  |
|-------------------|-------------------------------------------------------------------------------|
| `useMemo`         | Memoriza valores calculados para evitar recomputación.                       |
| `useCallback`     | Memoriza funciones para evitar recrearlas en cada render.                    |
| `useDeferredValue`| Retrasa el valor hasta que el sistema esté más libre (UX más fluida).        |
| `useTransition`   | Permite diferenciar entre actualizaciones urgentes y no urgentes.            |

---

## 🌐 Nuevos Hooks React 19 (Concurrent Features)

| Hook             | Descripción                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| `use`            | ✅ **Nuevo en React 18/19**. Suspende directamente en componentes para datos asíncronos.       |
| `useFormStatus`  | ✅ **Nuevo en React 19**. Saber si un formulario está enviando, con errores, etc.             |
| `useFormState`   | ✅ **Nuevo en React 19**. Manejo de estado para formularios con server-actions.               |
| `useOptimistic`  | ✅ **Nuevo en React 19**. Maneja *actualizaciones optimistas* antes de confirmación del backend. |

---

## 🧪 Experimental/Avanzados (usados con cautela)

| Hook                  | Descripción                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `useSyncExternalStore`| Integra fuentes externas de estado (Redux, etc.) con suscripciones seguras. |
| `useId`               | Genera IDs únicos y estables por render. Útil para accesibilidad.            |

---

## 📌 Nota sobre React Server Components

React 19 potencia el modelo de **Server Components**, por lo tanto, hooks como `useFormStatus`, `useFormState` y `useOptimistic` están pensados para usarse en este nuevo paradigma en frameworks como **Next.js 14+**.
