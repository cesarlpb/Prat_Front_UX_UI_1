// useOptimistic es un hook de React que permite actualizar el estado de forma optimista, es decir, antes de que la operación asincrónica se complete.
import "./ejercicio.css";
import { useRef, startTransition, useState } from "react";
import useOptimistic from "./useOptimistic";
import loading from "./imagenes/Loading.gif";

function Ejercicio() {
  const formRef = useRef();

  // Estado inicial de los mensajes
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  // Use useOptimistic hook
  const [optimisticMessages, setOptimisticMessages] = useOptimistic(messages, (prev, newMessage) =>
    [...prev, { ...newMessage, sending: true }]
  );

  // Acción del formulario
  function formAction(formData) {
    const newMessage = { text: formData.get("message"), sending: true };
    console.log('Optimistic update - Adding message:', newMessage);

    // Añade el mensaje de forma optimista
    setOptimisticMessages(newMessage);

    // Resetea el formulario
    formRef.current.reset();

    // Simula el envío del mensaje
    startTransition(async () => {
      await sendMessageAction(newMessage);
    });
  }

  // Simula el envío del mensaje
  async function sendMessageAction(newMessage) {
    try {
      setError(null);
      console.log('Starting message send:', newMessage);
      
      const sentMessage = await new Promise((resolve) =>
        setTimeout(() => {
          console.log('Message sent successfully:', { ...newMessage, sending: false });
          resolve({ ...newMessage, sending: false });
        }, 1000)
      );

      // Actualiza los mensajes reales y elimina el estado "enviando"
      startTransition(() => {
        console.log('Updating real messages:', sentMessage);
        setMessages((prev) => [sentMessage, ...prev]);
        setOptimisticMessages((prev) =>
          prev.map((msg) =>
            msg.text === newMessage.text ? sentMessage : msg
          )
        );
      });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Error sending message');
      setOptimisticMessages((prev) =>
        prev.filter((msg) => msg.text !== newMessage.text)
      );
    }
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
            <div className="message-item">
              <p>{message.text}</p>
              {message.sending ? (
                <small><img src={loading} className="loading" alt="Loading..." /></small>
              ) : error ? (
                <small className="error">{error}</small>
              ) : null}
            </div>
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

/**
 * Preguntas (elige 4 para profundizar):
 ---------------------------------
  * 2. ¿Qué impacto tiene en la experiencia de usuario?
  --- Un impacto claro que se me ocurre seria el feedback insantaneo de respuesta a la acción que estes haciendo, ejemplo si escribes un comentario
      y sale un mensaje que dice "Enviado!" sabes al momento que se esta enviando o se ha enviado sin tener que esperar a ver el mensaje escrito.
  * 3. ¿Hay casos en los que podría ser perjudicial?
  --- Cuando hay un fallo, crees que se ha ejecutado la acción y luego ha habido algun fallo y no se termina efectuando, el usuario puede creer que
      ha hecho dicha acción.
  * 14. ¿Qué tipos de errores podrían ocurrir?
   --- Un fallo en el envio, desincronización de estado conflictos de ID (ID duplicado)...
  * 15. ¿Cómo se podría hacer más robusto el manejo de errores?
   --- Mostrar mensajes, hacer comprobaciones con try catch, Rollback del estado en caso de error..
      --------------------------------
 * 1. ¿Cuáles son los beneficios y desventajas de usar carga optimista en este componente específico?    
 * 4. ¿Cómo afecta al manejo de errores?
 * 5. ¿Cómo se implementaría este mismo componente sin usar carga optimista?
 * 6. ¿Qué cambios se necesitarían en el estado?
 * 7. ¿Cómo se manejaría el estado de carga?
 * 8. ¿Qué impacto tendría en la experiencia de usuario?
 * 9. ¿Qué alternativas existen para manejar estados de carga en React que no sean la carga optimista?
 * 10. ¿Qué otras técnicas podrían usarse?
 * 11. ¿Cuándo sería más apropiado usar cada una?
 * 12. ¿Qué trade-offs implican cada enfoque?
 * 13. ¿Cómo se podría mejorar el manejo de errores en el enfoque optimista actual?
  --- 

 * 16. ¿Qué información adicional sería útil mostrar al usuario en caso de error?
 */

export default Ejercicio;
