import React, { useState, useEffect, memo } from 'react';

// 1) Componente memoizado que sólo vuelve a renderizar si cambia `name`
const Display = memo(function Display({ name }) {
  console.group("Con memo");
  console.log("⚡ Display render", name);
  console.groupEnd();
  return <p>Hola {name}</p>;
});

function GreetingMemo() {
  // 2) Lazy init desde localStorage
  const [name, setName] = useState(() => {
    return window.localStorage.getItem('name') || '';
  });

  // Sincroniza localStorage cada vez que name cambie
  useEffect(() => {
    window.localStorage.setItem('name', name);
  }, [name]);

  console.log("⚡ Greeting render");

  return (
    <>
    <div className="flex">
    <h2>Con Memo:</h2>
      <input
        type="text"
        placeholder="Nombre..."
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {/* Sólo se volverá a renderizar Display si `name` cambia */}
      <Display name={name} />
      </div>
    </>
  );
}

export default GreetingMemo;
