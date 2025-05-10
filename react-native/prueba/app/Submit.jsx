// useFormStatus es un hook de React que nos permite acceder al estado de un formulario
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus();
  console.log('Estado de envío:', { pending });
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

/**
 * Responde a 4 de las siguientes preguntas:
 * ¿Qué sucede si intentamos enviar el formulario dos veces rápidamente?
 * - Que se guarde los datos duplicados en la base de datos, pero con el estado de pending se puede prevenir
 * 
 * ¿Se deshabilita el botón correctamente?
 * ¿Cómo afecta esto a la experiencia del usuario?
 * 
 * ¿Cómo podríamos mejorar el feedback visual durante el envío?
 * - Mostrar un mensaje que diga que se ha enviado o no
 * 
 * ¿Podemos agregar animaciones o estilos adicionales?
 * - Sí, podemos agregar animacion y estilos personalizados usando iconos animados
 * 
 * ¿Qué otros estados podríamos mostrar además de "Submitting..."?
 * - Podemos mostrar un icono de carga
 * 
 * ¿Qué sucede con el estado pending después de que el formulario se envía?
 * ¿Se restaura automáticamente a false?
 * ¿Necesitamos limpiar el estado manualmente?
 * ¿Cómo podríamos hacer este componente más reutilizable?
 * ¿Podemos agregar props para personalizar el texto del botón?
 * ¿Podemos agregar estilos personalizados?
 * ¿Podemos manejar diferentes tipos de envío (submit, reset, etc.)?
 */