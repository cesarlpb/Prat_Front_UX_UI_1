// HeavyList.jsx

// Lab 15 – HeavyList starter
// -----------------------------------------------------------------------------
// Este borrador genera una lista muy grande para poner a prueba el FPSMeter.
// Sigue las pistas (TODO) para completar la implementación y para optimizarla
// más adelante con memoización o técnicas de virtualización.
// -----------------------------------------------------------------------------
import { memo, useMemo } from "react";

/**
 * HeavyList – Renderiza "count" elementos de texto y color aleatorio.
 * Empareja este componente con <FPSMeter /> para observar la caída de FPS.
 *
 * Pistas:
 *   1. Empieza sin optimizar: devuelve todos los elementos directamente.
 *   2. Mide los FPS (deberían bajar a medida que aumenta "count").
 *   3. Añade React.memo a <ListItem> y mide de nuevo.
 *   4. Experimenta con useMemo para memorizar la lista generada.
 *   5. Bonus: instala react-window y crea una versión virtualizada.
 */
export default function HeavyList({ count = 7_500 }) {
  // ✅ TODO: genera un array de longitud "count" con useMemo
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: randomColor(),
    }));
  }, [count]);

  return (
    <ul style={{ maxHeight: "60vh", overflow: "auto", padding: 0 }}>
      {items.map((item) => (
        <ListItem key={item.id} color={item.color} index={item.id} />
      ))}
    </ul>
  );
}

// TODO: envuelve este componente con React.memo una vez hayas medido FPS iniciales
const ListItem = memo(function ListItem({ color, index }) {
  // Memoizamos el objeto style para no recrearlo en cada render
  const style = useMemo(
    () => ({
      background: color,
      padding: "4px 8px",
      color: "#fff",
      margin: 0,
      listStyle: "none",
      fontFamily: "system-ui, sans-serif",
    }),
    [color]
  );

  return <li style={style}>Item {index}</li>;
});

function randomColor() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h} 70% 50%)`;
}
