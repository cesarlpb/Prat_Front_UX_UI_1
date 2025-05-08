import React, { useState, useTransition } from 'react';

/**
 * Componente que demuestra el uso del hook useTransition para manejar
 * actualizaciones de estado que no son críticas para la experiencia del usuario.
 * 
 * useTransition es útil para marcar ciertas actualizaciones de estado como de baja prioridad,
 * lo que permite que otras actualizaciones más importantes se realicen primero.
 */
const Contador = () => {
  const [contador, setContador] = useState(0);
  // isPending: indica si hay una transición en curso
  // startTransition: función para marcar actualizaciones como no urgentes
  const [isPending, startTransition] = useTransition();
  
  // Efecto para rastrear cambios en isPending
  useEffect(() => {
    console.log(`isPending cambió a: ${isPending}`);
  }, [isPending]);
  const [loading, setLoading] = useState(false);

  /**
   * Maneja el incremento del contador con una transición
   * Muestra un estado de carga mientras se completa la operación
   */
  const sumarContador = () => {
    console.log('1. Iniciando sumarContador - Configurando loading en true');
    setLoading(true);
    // Envuelve la actualización en startTransition para marcarla como no urgente
    console.log('2. Iniciando transición...');
    startTransition(() => {
      // Simula una operación pesada o una llamada a API
      console.log('3. Dentro de la transición - Iniciando timeout');
      setTimeout(() => {
        console.log('4. Dentro del timeout - Actualizando contador');
        setContador((prev) => {
          const nuevoValor = prev + 10;
          console.log(`5. Contador actualizado: ${prev} -> ${nuevoValor}`);
          return nuevoValor;
        });
        console.log('6. Configurando loading a false');
        setLoading(false);
      }, 2000); // Simula un retraso de 2 segundos
    });
  };

  return (
    <div>
      {/* 
        Mientras se espera, se muestra "Cargando..."
        Cuando termina, se muestra el valor actual del contador
        
        NOTA: Aquí podríamos usar isPending en lugar de loading para controlar
        el estado de carga, ya que useTransition ya proporciona esta información
      */}
      <h2>{loading ? "Cargando..." : `Contador: ${contador}`}</h2> 
      <button onClick={sumarContador}>
        Sumar 10
      </button>
      
      {/* Estado interno de la transición */}
      <p>isPending: {isPending.toString()}</p>
    </div>
  );
};

export default Contador;

// He añadido varios console.log estratégicos para rastrear el flujo de la transición. 
// Ahora, cuando hagas clic en el botón "Sumar 10", verás en la consola:

// 1. Flujo de ejecución:
// - Inicio de la función sumarContador
// - Inicio de la transición
// - Dentro de la transición (timeout)
// - Actualización del contador
// - Finalización del proceso
// 2. Seguimiento de isPending:
// - Se ha añadido un useEffect que muestra cuándo cambia el valor de isPending
// 3. Valores intermedios:
// - Muestra el valor anterior y nuevo del contador
// - Indica cuándo se actualiza el estado de loading
// 4. Para ver los logs:
// - Abre las herramientas de desarrollo del navegador (F12)
// - Ve a la pestaña "Console"
// - Haz clic en el botón "Sumar 10" y observa los mensajes en orden

/*
PREGUNTAS PARA PROFUNDIZAR:

1. ¿Cuál es la diferencia entre usar el estado `loading` local vs. el valor `isPending` 
   que devuelve useTransition? ¿Cuándo sería más apropiado usar uno u otro?

    UseTransition devuelve isPending para saber si hay actualizaciones de baja prioridad 
    en curso y startTransition para envolver esas actualizaciones.El estado loading local 
    es simplemente un valor booleano controlado manualmente con useState, para manejar el
    estado de carga en la UI.

    El loading local se usa cuando el proceso es crítico y bloqueante para la interacción,
    y quieres controlar explícitamente el estado de carga. En cambio, isPending se usa 
    cuando necesitas priorizar las interacciones del usuario y mantener la UI responsiva,
    mientras se procesan actualizaciones más pesadas en segundo plano.


2. ¿Qué ventajas tiene usar useTransition en lugar de un simple estado de carga 
   para manejar operaciones asíncronas en React?
    Permite diferenciar entre actualizaciones urgentes y no urgentes, 
    y por tanto evita que la interfaz se congele o retrase en transiciones pesadas. 
    Es decir, puede mantener el contenido actual visible mientras prepara la nueva UI
    y puede seguir respondiendo a eventos interactivos mientras se procesa


3. ¿Cómo manejarías los errores dentro de la transición? ¿Qué pasaría si ocurre 
   un error dentro del setTimeout?

   Si ocurre un error dentro del setTimeout, el contador no se actualizaría, 
   el estado de carga se mantendría como activo (loading sería true), 
   y la interfaz de usuario podría quedar en un estado visible "Cargando...",
   pero sin que realmente el contador haya cambiado.

   Los errores se deberían manejarse con "try-catch" dentro del setTimeout del error y que 
   el loading se establezca en false si ocurre un fallo.


4. ¿Qué impacto tiene el uso de useTransition en el rendimiento de la aplicación 
   cuando se tienen múltiples actualizaciones de estado concurrentes?

   El uso de useTransition mejora el rendimiento de la aplicación cuando hay múltiples
   actualizaciones de estado simultáneas, ya que permite que React maneje las 
   actualizaciones de alta y baja prioridad. Con useTransition, las actualizaciones que 
   no son críticas para la interactividad inmediata se marcan como de baja prioridad 
   mediante startTransition. Esto le permite a React priorizar las interacciones del 
   usuario, asegurando que la interfaz de usuario permanezca ágil.


5. Bonus: ¿Cómo podrías modificar este ejemplo para usar useTransition con 
   una llamada a una API real en lugar de un setTimeout?

   Dentro del startTransition, se haría una función asíncrona para realizar
   la llamada a la API usando el fetch, y se esperaría a la respuesta utilizando await. 
   La respuesta de la API se procesaría con .json(). Una vez que la API haya respondido,
   se actualizaría el contador con setContador.

   El código del setTranstion sería:
   startTransition(async () => {
      const response = await fetch('enlace');
      const data = await response.json();
      setContador((prev) => prev + 10);
      setLoading(false);
    });

*/