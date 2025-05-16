import { useState, memo } from "react";

const Greeting = memo(function Greeting() {
  const [name, setName] = useState("");
  console.group("Sin Memo");
  console.log("⚡ render", name);
  console.groupEnd();
  return (
    <>
      <div className="flex">
        <h2>Sin Memo:</h2>  
        <input
          type="text"
          placeholder="Nombre..."
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hola {name}</p>
      </div>
    </>
  );
});

export default Greeting;
