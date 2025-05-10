import { useState, useEffect } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState(""); // ""
  const [email, setEmail] = useState(""); // ""

  const handleChange = (e) => {
    console.log("valor actual (e.target.value):", e.target.value); // ✅ Sí tiene el valor actual correcto
    setNombre(e.target.value); // actualizamos el estado con el setter
    console.log("estado (nombre):", nombre); // 🚨 Aquí nombre no tiene el valor más actual
  };

  useEffect(() => {
    console.log("nombre actual (nombre):", nombre);
    // ✅ Si aplico lógica con el estado tengo el valor más actual
  }, [nombre]);

  useEffect(() => {
    console.log("email actual (email):", email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch para enviar a un endpoint los datos del form
    // axios, etc.
    // HTTP POST con el endpoint
    console.log("enviando...");
    // handle del reponse => ok, error
  };

  return (
    <div>
      <h2>My Awesome Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={nombre}
          onChange={(e) => handleChange(e)}
          placeholder="Tu nombre"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
        />

        <input type="submit" value="Enviar" />
      </form>

      <p>Hola, {nombre || "invitado"}!</p>
      <p>Email: {email || "no hay email"}</p>
      {/* "" o "invitado" => "invitado" */}
      {/* "pepe" o "invitado"  => "pepe" */}
    </div>
  );
}
