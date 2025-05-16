/**
 * FPSMeter – mide los fotogramas por segundo usando requestAnimationFrame y actualiza
 * la cifra cada segundo. 100 % React + JavaScript, sin librerías extra.
 *
 * ## Cómo usarlo con Vite
 * 1. Crea un nuevo proyecto si lo necesitas:
 *    ```bash
 *    npm create vite@latest my-app -- --template react
 *    cd my-app
 *    npm install
 *    ```
 * 2. Copia este archivo en `src/components/FPSMeter.jsx`.
 * 3. Abre `src/App.jsx` y usa el componente:
 *    ```jsx
 *    import FPSMeter from './components/FPSMeter';
 *
 *    function App() {
 *      return (
 *        <>
 *          <h1>Demo FPS</h1>
 *          <FPSMeter />
 *        </>
 *      );
 *    }
 *
 *    export default App;
 *    ```
 * 4. Ejecuta el proyecto: `npm run dev` y abre el navegador en la URL que indique Vite.
 */

import { useEffect, useRef, useState } from "react";

export default function FPSMeter() {
  const [fps, setFps] = useState(0);
  const frames = useRef(0);
  const last = useRef(performance.now());

  // Añade al inicio del componente:
  const framesHistory = useRef([]);
  const [avgFps, setAvgFps] = useState(0);
  const [maxFps, setMaxFps] = useState(0);
  const [minFps, setMinFps] = useState(Infinity);

  // Cada vez que cambie `fps`, acumúlalo en el historial
  useEffect(() => {
    framesHistory.current.push(fps);
  }, [fps]);

  // Cada 10 segundos calcula avg, max y min, y vacía el historial
  useEffect(() => {
    const id = setInterval(() => {
      const h = framesHistory.current;
      if (h.length) {
        const sum = h.reduce((a, b) => a + b, 0);
        setAvgFps(Math.round(sum / h.length));
        setMaxFps(Math.max(...h));
        setMinFps(Math.min(...h));
        framesHistory.current = [];
      }
    }, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let rafId;

    const loop = (time) => {
      frames.current += 1;
      if (time >= last.current + 1000) {
        setFps(frames.current);
        frames.current = 0;
        last.current = time;
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    console.log("performance.now()", performance.now());

    return () => cancelAnimationFrame(rafId);
  }, []);

  const containerStyle = {
    padding: "1rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    width: "max-content",
    fontFamily: "system-ui, sans-serif",
  };

  return (
    <div style={containerStyle}>
      <strong>FPS:</strong> {fps}
      <br />
      <strong>Avg (10s):</strong> {avgFps}
      <br />
      <strong>Max:</strong> {maxFps}
      <br />
      <strong>Min:</strong> {minFps}
    </div>
  );
}
