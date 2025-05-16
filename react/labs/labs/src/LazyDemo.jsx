// Lab 15 – Code‑Splitting starter with React.lazy + Suspense
// -----------------------------------------------------------------------------
// Objetivo: cargar HeavyList de forma diferida para comparar el rendimiento y el
// impacto en el bundle. Completa los TODO marcados.
// -----------------------------------------------------------------------------
import { lazy, Suspense } from 'react';
import FPSMeter from './FPSMeter';
// https://www.davidhu.io/react-spinners/
import { PacmanLoader } from "react-spinners";


// 🔹 TODO 1: cambia la ruta si guardaste HeavyList en otro lugar.
// const HeavyList = lazy(() => import('./HeavyList'));
// Envuelve el import en un Promise con setTimeout
// const HeavyList = lazy(() =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       import('./HeavyList').then(module => resolve(module));
//     }, 3_000); // 3 segundos
//   })
// );

// const Loader1 = () => <p style={{ fontSize: 24, color: 'greenyellow' }}>Cargando lista pesada…</p>;

const HeavyChart = lazy(() => import("./HeavyChart"));

export default function LazyDemo() {
  return (
    <div style={{ 
      padding: 12, 
      width: 800,
      fontFamily: 'sans-serif', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center' 
      }}>
      <h1>Demo - Code Splitting con React.lazy</h1>

      {/* FPS meter siempre visible para monitorizar la fluidez */}
      <FPSMeter />

      {/* 🔹 TODO 2: añade un botón o enlace para montar HeavyList bajo demanda
          y así poder medir la diferencia entre carga inicial y diferida. */}

      {/* Componentes cargados de forma perezosa necesitan Suspense con fallback */}
      
      <Suspense fallback={ <div style={{
          marginTop: 20,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <PacmanLoader color="#00ff00" />
        </div>
        }>
        {/* 🔹 TODO 3: controla con estado cuándo renderizar HeavyList y HeavyChart */}
        {/* <HeavyList /> */}
        <HeavyChart />
        {/* Next: se puede colocar el memo con los props de los puntos para que no se haga render si no cambian los props */}
        {/* Colocar alguna transición para pasar a mostrar el componente, más info: https://react.dev/reference/react/Suspense */}
      </Suspense>
    </div>
  );
}

/*
 Instrucciones rápidas
 --------------------
 1. Coloca este archivo en `src/LazyDemo.jsx`.
 2. Asegúrate de que `HeavyList.jsx` y `FPSMeter.jsx` están en la misma carpeta o
    ajusta las rutas en el import.
 3. En `App.jsx` importa y renderiza `<LazyDemo />`.
 4. Ejecuta `npm run dev` y abre las DevTools de React para ver el camino de
    renderizado y los chunks generados en `network`.

 Reto extra:
   – Añade `React.memo` a HeavyList para evitar renders tras su primer pintado.
   – Mide el tamaño del bundle con y sin lazy‑loading usando `npm run build`.
 */