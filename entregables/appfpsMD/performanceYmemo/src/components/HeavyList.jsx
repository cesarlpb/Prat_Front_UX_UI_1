// .jsx

// Lab 15 – HeavyList starter
// -----------------------------------------------------------------------------
// Este borrador genera una lista muy grande para poner a prueba el FPSMeter.
// Sigue las pistas (TODO) para completar la implementación y para optimizarla
// más adelante con memoización o técnicas de virtualización.
// -----------------------------------------------------------------------------
import React, { useMemo } from 'react';

export default function HeavyList({ count = 100000 }) {
    // TODO: genera un array de longitud "count" con useMemo
  const items = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: randomColor(),
    }));
  }, [count]);

  return (
    <ul style={{ maxHeight: '60vh', overflow: 'auto', padding: 0 }}>
      {items.map((item) => (
        <ListItem key={item.id} color={item.color} index={item.id} />
      ))}
    </ul>
  );
}

const ListItem = React.memo(function ListItem({ color, index }) {
    // TODO: envuelve este componente con React.memo una vez hayas medido FPS iniciales
  const style = {
    background: color,
    padding: '4px 8px',
    color: '#fff',
    margin: 0,
    listStyle: 'none',
    fontFamily: 'system-ui, sans-serif',
  };
  return <li style={style}>Item {index}</li>;
});

function randomColor() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h} 70% 50%)`;
}
