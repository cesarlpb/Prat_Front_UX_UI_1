# C5 · Día 15 – Performance y Memoización en React

## Objetivos de la sesión

* Entender cómo React decide cuándo volver a renderizar un componente.
* Aplicar técnicas de memoización (`React.memo`, `useMemo`, `useCallback`) para evitar renders innecesarios.
* Implementar *code‑splitting* con `React.lazy` y `Suspense`.
* Medir y comparar el impacto de las optimizaciones usando React Profiler y las DevTools del navegador.

---

## 1. ¿Por qué optimizar?

Cuando una UI crece, cada render puede desencadenar cálculos costosos, operaciones de layout y repintados. Al reducir renders evitamos *jank*, bajamos consumo de batería y mejoramos la percepción de fluidez (FPS).

En React, cada vez que cambia el **estado** o las **props** de un componente, este (y sus hijos) se “vuelven a renderizar” virtualmente. El Virtual DOM difiere el trabajo pesado, pero la reconciliación, los efectos y el commit al DOM siguen teniendo coste.

> [!TIP]
> **Regla de oro :** ¡Optimiza solo cuando tengas un problema real y puedas medirlo!

---

## 2. `React.memo` – memoización de componentes

`React.memo` envuelve un componente **funcional** y memoriza su resultado mientras las props "shallow equal" no cambien.

```jsx
import React from "react";

const Greeting = React.memo(function Greeting({ name }) {
  console.log("⚡ render", name);
  return <p>Hola {name}</p>;
});

export default Greeting;
```

### Custom comparison

Se realiza una comparación entre los ids de los props y el resultado de la 
función de comparación.

Si se encuentra un match, el componente no se volverá a renderizar => ahorramos 
actualizaciones en el DOM.

```jsx
export default React.memo(MyComp, (prev, next) => prev.id === next.id);
```

---

## 3. `useMemo` y `useCallback` – memoizando valores y funciones

| Hook              | Cuándo usarlo                                                                                  | Ejemplo                                                        |
| ----------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| **`useMemo`**     | Cálculo **puro** y costoso que depende de variables.                                           | `const filtered = useMemo(() => list.filter(...), [list]);`    |
| **`useCallback`** | Crear **referencias de función estables**, sobre todo para pasar callbacks a hijos memoizados. | `const handleClick = useCallback(() => setOpen(o => !o), []);` |

> [!WARNING]
> **Warning :** No abuses del uso de estos hooks; añadir memoización innecesaria
 también consume memoria y CPU.

---

## 4. *Suspense* y *Code‑Splitting*

### React.lazy

`React.lazy` es una función que permite cargar componentes de forma “lazy” 
(*vaga*), es decir, cuando el componente es renderizado por primera vez, se 
carga el bundle necesario.

```jsx
const Chart = React.lazy(() => import("./HeavyChart"));
```

### Suspense boundary

`Suspense` es un componente que permite mostrar un placeholder mientras se 
carga un componente enlazado, por ejemplo, un spinner mientras aparece una tabla
o un componente con el texto `"Loading..."` mientras se carga un gráfico, etc.

> [!NOTE]
> `Suspense` se introdujo en React 16.6.

```jsx
<Suspense fallback={<Spinner />}> <Chart /> </Suspense>
```

Esto divide el *bundle* en varios *chunks* y pospone la descarga de los 
componentes más pesados hasta que realmente se necesiten. Esos componentes deben
envolverse con `React.Suspense`, que mostrará un elemento de *fallback* 
mientras se resuelven. Úsalo tanto con `React.lazy` (carga diferida de código) 
como con secciones de la interfaz que dependen de operaciones asíncronas —por 
ejemplo, peticiones a una API— para evitar que el resto de la UI quede bloqueada
mientras llegan los datos.

---

## 5. Medición y herramientas

1. **React Profiler** (integrado en React DevTools) → mide tiempos de render y 
los componentes que más tardan.
2. **Chrome → Performance → FPS Meter** para ver fotogramas perdidos.
3. **Lighthouse** → mediciones de *Time to Interactive* y *Performance Score*.

> Guarda capturas o exporta el perfil para demostrar mejoras.

---

## 6. Buenas prácticas rápidas

* Mantén los componentes pequeños y con responsabilidades claras.
* Evita crear objetos/funciones nuevos en cada render si los pasas como props.
* Prefiere datos **normalizados** y pasa identificadores en lugar de objetos 
grandes.
* Usa `key` estables en listas.
* Lista desplegables muy largas → virtualización (react‑window, tanstack‑virtual).

---

## Mini‑Labs (∼45 min cada uno)

- [Lab FPS & memoización](../labs/1.lab-fps.md)
- [Lab Code‑Splitting](../labs/2.code-splitting.md)

---

## Recursos adicionales

* [React → Memoization docs](https://react.dev/reference/react/memo)
* [React Profiler (devtools)](https://react.dev/learn/profiler)
* [Guía oficial de Code‑Splitting](https://react.dev/learn/code-splitting)

---
