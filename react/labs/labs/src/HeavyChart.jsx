// Lab 15 – HeavyChart starter
// -----------------------------------------------------------------------------
// Este componente genera un dataset grande y lo pinta con Recharts para poner a
// prueba el rendimiento del navegador. Úsalo junto al FPSMeter y compara antes
// y después de optimizar (memoización, throttling, virtualización del tooltip,
// etc.).
// -----------------------------------------------------------------------------

import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'; // npm i recharts

/**
 * HeavyChart – dibuja N puntos con Recharts.
 *
 * Props:
 * - points (number)   → cantidad de muestras a generar (default 50_000)
 * - height (number)   → alto del wrapper en px (default 300)
 */
export default function HeavyChart({ points = 100_000, width = 800, height = 300 }) {
  // Generamos los datos una sola vez.
  const data = useMemo(() => {
    // TODO: sustituir por un generador más realista (p.e. ruido de Perlin)
    const arr = [];
    for (let i = 0; i < points; i++) {
      arr.push({ x: i, y: Math.sin(i / 50) * 50 + Math.random() * 10 });
    }
    return arr;
  }, [points]);

  return (
    <div className="w-full" style={{ width, height }}>
      {/* TODO: Explorar <ResponsiveContainer debounce={50}> para reducir renders */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="x" tick={false} hide />
          <YAxis tick={false} hide domain={['auto', 'auto']} />
          <Tooltip isAnimationActive={false} wrapperClassName="backdrop-blur-sm" />
          <Line
            type="monotone"
            dataKey="y"
            strokeWidth={1}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/*
 * Sugerencias de optimización para la segunda parte del lab:
 * 1. Memoiza el componente completo con React.memo.
 * 2. Reduce la frecuencia de actualización del tooltip (custom Tooltip+throttle).
 * 3. Experimenta con un dataset menor o con down‑sampling (p. ej., lod‑ash sampleSize).
 * 4. Explora librerías alternativas (e.g. light‑weight Canvas / WebGL charts).
 */