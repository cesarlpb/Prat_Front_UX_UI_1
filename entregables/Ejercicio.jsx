import "./ejercicio.css";
import { useRef, startTransition, useState } from "react";
import loading from "./imagenes/Loading.gif";

function Ejercicio() {
  const formRef = useRef();

  // Estado inicial de los mensajes
  const [messages, setMessages] = useState([
    { text: "", sending: false },
  ]);

  // Estado optimista
  const [optimisticMessages, setOptimisticMessages] = useState(messages);

  // Acción del formulario
  function formAction(formData) {
    const newMessage = { text: formData.get("message"), sending: true };

    // Añade el mensaje de forma optimista
    setOptimisticMessages((prev) => [newMessage, ...prev]);

    // Resetea el formulario
    formRef.current.reset();

    // Simula el envío del mensaje
    startTransition(async () => {
      await sendMessageAction(newMessage);
    });
  }

  // Simula el envío del mensaje
  async function sendMessageAction(newMessage) {
    const sentMessage = await new Promise((resolve) =>
      setTimeout(() => resolve({ ...newMessage, sending: false }), 1000)
    );

    // Actualiza los mensajes reales y elimina el estado "enviando"
    startTransition(() => {
      setMessages((prev) => [sentMessage, ...prev]);
      setOptimisticMessages((prev) =>
        prev.map((msg) =>
          msg.text === newMessage.text ? sentMessage : msg
        )
      );
    });
  }

  return (
    <div className="container">
      <h1>Mensajes</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current);
          formAction(formData);
        }}
        ref={formRef}
      >
        <input type="text" name="message" placeholder="Escribe un mensaje..." />
        <button type="submit">Enviar</button>
      </form>
      <div className="messages">
  {optimisticMessages.map((message, index) => (
    <div key={index}>
      <h2>
        {message.text}
        <p></p>
        {message.sending && <small><img src={loading} className="loading" /></small>}
      </h2>
    </div>
  ))}
  <p></p>
  <button
  onClick={() => {
    setMessages([]); 
    setOptimisticMessages([]);
  }}
>
  Reset
</button>
</div>
    </div>
  );
}

export default Ejercicio;