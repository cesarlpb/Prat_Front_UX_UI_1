// useForm es un hook de React que sirve para gestionar formularios con 
// facilidad. Toma un objeto como argumento opcional. 

import React from 'react'
import { useForm } from 'react-hook-form'

function FormularioContrasena() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onChange' // Valida a medida que se escribe
  })

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data)
    reset()
  }

  // Para poder verificar a tiempo real 
  const contraseña = watch("contrasena")

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>🛡️ Formulario de Registro</h2>

      <div>
        <label>Nombre:</label>
        <input
          {...register("nombre", { required: "El nombre es obligatorio" })}
        />
        {errors.nombre && <p>{errors.nombre.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "El email es obligatorio",
            // Para poder usar una expresion regular usamos, pattern
            pattern: {
              value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/,
              message: "Formato de email no válido"
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          {...register("contrasena", {
            required: "La contraseña es obligatoria",
            minLength: { value: 6, message: "Mínimo 6 caracteres" }
          })}
        />
        {errors.contrasena && <p>{errors.contrasena.message}</p>}
      </div>

      <div>
        <label>Confirmar contraseña:</label>
        <input
          type="password"
          {...register("confirmar", {
            required: "Confirma tu contraseña",
            validate: (value) =>
              value === contraseña || "Las contraseñas no coinciden"
          })}
        />
        {errors.confirmar && <p>{errors.confirmar.message}</p>}
      </div>

      <br />
      <button type="submit" disabled={!isValid}>
        Registrarse
      </button>
    </form>
  )
}

export default FormularioContrasena

// Preguntas para profundizar (elige 4):
// - Rendimiento: ¿Cómo optimiza React Hook Form el rendimiento en comparación con otras bibliotecas de formularios?
// - Validación avanzada: ¿Cómo se implementaría la validación asíncrona, como verificar si un email ya está registrado?
// - Formularios complejos: ¿Cuál es la mejor manera de manejar campos dinámicos o arrays de campos?
// - Integración con UI Libraries: ¿Cómo se integra con bibliotecas de componentes como Material-UI o Chakra UI?
// - Testing: ¿Cuáles son las mejores prácticas para probar formularios con React Hook Form?
// - Accesibilidad: ¿Cómo se manejan los errores de validación para usuarios de lectores de pantalla?
// - Rendimiento en formularios grandes: ¿Cuál es el impacto en el rendimiento cuando se tienen muchos campos?
// - Migración: ¿Cuál sería la estrategia para migrar desde Formik o Formularios Controlados de React?
// - Patrones avanzados: ¿Cómo implementar formularios multi-paso con persistencia de datos entre pasos?
// - Seguridad: ¿Qué medidas de seguridad se deben considerar al manejar contraseñas en formularios?