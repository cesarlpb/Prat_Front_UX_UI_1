# 🧠 Ejercicios por Hook en React

## 🔁 `useState` – 5 ejercicios

1. **Contador simple**: Crear un contador con botones para aumentar y disminuir el valor.
2. **Formulario controlado**: Implementar un formulario que muestre en tiempo real el valor ingresado.
3. **Lista dinámica**: Crear una lista donde el usuario pueda añadir y eliminar elementos.
4. **Mostrar/Ocultar texto**: Botón que alterna entre mostrar y ocultar un mensaje.
5. **Cambiar tema manualmente**: Cambiar entre light/dark sin contexto, solo con estado local.

---

## 🕒 `useEffect` – 5 ejercicios

1. **Contador con título dinámico**: Actualizar el título del documento según el valor del contador.
2. **Simular carga de datos**: Usar `setTimeout` para simular una API y mostrar un "Cargando..." inicial.
3. **Detectar cambio de prop**: Mostrar un mensaje cada vez que una prop cambie.
4. **Evento global**: Agregar y quitar un `eventListener` (por ejemplo, para detectar tecla presionada).
5. **Timer**: Crear un temporizador que se actualiza automáticamente cada segundo.

---

## 🔍 `useRef` – 5 ejercicios

1. **Enfocar input**: Al hacer clic en un botón, enfocar un campo de texto.
2. **Acceder al valor actual sin re-render**: Usar `useRef` para guardar un valor que cambia sin causar re-render.
3. **Contador de renders**: Mostrar cuántas veces se ha renderizado el componente.
4. **Reproducir/pausar video**: Controlar un elemento de video directamente con referencias.
5. **Scroll al final de una lista**: Hacer scroll automático hacia un mensaje nuevo en una lista de chat.

---

## 🌐 `useContext` – 5 ejercicios

1. **Tema global (light/dark)**: Implementar un proveedor de tema y consumirlo desde distintos componentes.
2. **Idioma (i18n) dinámico**: Cambiar entre español/inglés desde un contexto.
3. **Autenticación**: Crear un `AuthContext` con usuario, login y logout.
4. **Contador global**: Controlar un valor numérico desde cualquier componente sin pasar props.
5. **Config app (modo compacto, accesibilidad)**: Almacenar configuraciones generales para la UI.

---

## 🧩 Ejercicio combinado (useState + useEffect + useRef + useContext)

**Chat interactivo básico**: Crear una aplicación de chat que incluya:

- `useState` para almacenar los mensajes.
- `useEffect` para simular recepción de mensajes cada X segundos.
- `useRef` para hacer scroll al último mensaje.
- `useContext` para el usuario actual y el tema (light/dark).

---

# 💡 Casos de uso comunes por hook (sugerencias de ejercicios adicionales)

## 🔁 `useState`
- **Carrito de compras**: Controlar los ítems agregados.
- **Pestañas dinámicas**: Alternar entre distintos componentes renderizados.

## 🕒 `useEffect`
- **Sincronizar con API**: Hacer una llamada a una API externa al cargar un componente.
- **Verificar conexión**: Escuchar cambios de red (`navigator.onLine`).

## 🔍 `useRef`
- **Animaciones personalizadas**: Acceder a elementos DOM para usar con bibliotecas tipo GSAP o framer-motion.
- **Validación de formularios sin re-render**: Guardar referencias a los inputs para validar antes de enviar.

## 🌐 `useContext`
- **Modo global de accesibilidad**: Cambiar tamaño de texto o colores desde cualquier componente.
- **Multi-tema o diseño adaptable**: Implementar un selector de temas con estilos personalizados.

---

Más ejercicios por niveles en [más ejercicios](./mas-ejercicios.md) 🧙‍♂️
