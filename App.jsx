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
