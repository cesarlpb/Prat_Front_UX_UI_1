# Ejercicios Generales de React

## React

1. **Create React App**: Inicializa un proyecto con `npx create-react-app` y renderiza “Hola Mundo”.

2. **Componentes funcionales**: Crea dos componentes que reciban props y las muestren.

3. **JSX**: Utiliza expresiones JS dentro de markup: variables, ternarios y arrays mapeados.

4. **Props dinámicas**: Pasa diferentes props (texto, números, funciones) de padre a hijo.

5. **useState básico**: Implementa un contador con botones “+” y “–” usando `useState`.

6. **Eventos en React**: Maneja `onClick`, `onChange` y `onSubmit` en formularios controlados.

7. **Listas y keys**: Renderiza un array de objetos como lista `<ul>` con `key` único.

8. **Condicionales**: Muestra u oculta un componente con operador ternario.

9. **Efectos con useEffect**: Al montar el componente, registra un mensaje en consola.

10. **Fetch en useEffect**: Trae datos de una API y muéstralos en pantalla.

11. **Formulario controlado**: Crea un `<input>` controlado por estado y valida su valor.

12. **Lifting State Up**: Comparte estado de un input entre dos componentes hermanos a través del padre.

13. **Context API**: Define un contexto de tema (claro/oscuro) y consúmelo en varios componentes.

14. **Custom Hook**: Extrae lógica de `useState`/`useEffect` en un hook propio, p.ej. para fetch.

15. **useRef**: Enfoca un input al montar el componente usando `ref`.

16. **Fragments**: Usa `<>…</>` para agrupar elementos sin nodos extra en el DOM.

17. **CSS Modules**: Aplica estilos locales con un archivo `*.module.css`.

18. **Styled-components**: (Opcional) Define un botón estilizado con styled-components.

19. **React Router**: Configura rutas básicas `/home` y `/about` con `react-router-dom`.

20. **Lazy & Suspense**: Carga un componente con `React.lazy` y muéstralo dentro de `<Suspense>`.

21. **useMemo**: Memoriza el resultado de una función costosa que renderiza una lista.

22. **useCallback**: Pasa una callback memoizada a un componente hijo para evitar re-render innecesario.

23. **Error Boundary**: Implementa un componente de clase que capture errores de renderizado.

24. **useReducer**: Refactoriza el estado de un formulario complejo usando `useReducer`.

25. **Deploy**: Publica tu aplicación React en Netlify o Vercel y comparte la URL.

---

# 📝 Ejercicios por Hooks de React

## 🔁 `useState`

### Básico
- Alternar visibilidad de un párrafo con un botón.
- Cambiar el texto de un botón según el estado (ON/OFF).
- Contador que solo permite contar hasta 10.

### Intermedio
- Crear un "ToDo list" simple con agregar y eliminar tareas.
- Formularios dinámicos que permiten añadir múltiples campos.
- Cambiar el color de fondo con botones de selección.

### Avanzado
- Wizard de pasos donde el usuario puede avanzar y retroceder.
- Formulario que muestra resumen en tiempo real conforme se completa.
- Toggle avanzado: múltiples interruptores que afectan una vista global.

---

## 🕒 `useEffect`

### Básico
- Mostrar un mensaje en consola al montar/desmontar el componente.
- Cambiar el color de fondo tras 5 segundos.
- Escuchar cambios de una variable y mostrar alertas.

### Intermedio
- Hacer fetch de datos simulados (con `setTimeout` o `fetch`).
- Implementar un reloj que se actualiza cada segundo.
- Escuchar cambios de tamaño de ventana (`resize`).

### Avanzado
- Sincronizar datos con localStorage cada vez que cambie el estado.
- Suscribirse a eventos externos (como teclas presionadas).
- Validar datos del formulario con retraso (*debounce*).

---

## 🔍 `useRef`

### Básico
- Enfocar automáticamente un input al montar el componente.
- Leer el valor de un input sin hacer re-render.

### Intermedio
- Crear un contador de renders con `useRef`.
- Controlar la reproducción de un video o audio con referencia.
- Scroll automático a un elemento específico en la página.

### Avanzado
- Animaciones personalizadas usando referencias (GSAP, Framer Motion).
- Guardar valores previos para comparación entre renders.
- Implementar un *drag and drop* básico usando referencias.

---

## 🧠 `useContext`

### Básico
- Tema global (light/dark).
- Idioma global (i18n) con español/inglés.

### Intermedio
- Contexto de autenticación (login/logout).
- Control de permisos por roles (admin/user).
- Contexto para manejar el carrito de compras.

### Avanzado
- Contexto multinivel con varios valores (tema, idioma y accesibilidad).
- Control de notificaciones globales (toast messages).
- Contexto con lógica compleja usando `useReducer` internamente.

---

## 🌐 Nuevos Hooks React 19

### `use`
- Suspender la carga de datos hasta que una promesa se resuelva.
- Mostrar un "loading spinner" mientras se cargan datos con `use`.

### `useFormStatus` y `useFormState`
- Crear un formulario que muestre un spinner mientras se envía.
- Mostrar errores de validación controlados por el servidor.

### `useOptimistic`
- Chat en tiempo real que muestra mensajes "pendientes" antes de ser confirmados.
- Añadir productos a un carrito con confirmación optimista (se muestra antes de respuesta del servidor).

---

## 🧩 Ejercicio combinado final

**Tienda con carrito, filtros y tema**:
- `useState` para manejar productos seleccionados y filtros.
- `useEffect` para cargar productos desde una API (o simular fetch).
- `useRef` para controlar scroll a un producto destacado.
- `useContext` para tema (light/dark) y carrito global.
- Opcional: usar `useOptimistic` si se conecta con un backend.

---

# 💡 Sugerencias de casos de uso reales

| Hook                  | Caso de uso real                                                    |
|-----------------------|---------------------------------------------------------------------|
| `useState`            | UI dinámicas: menús, formularios, tabs, sliders.                    |
| `useEffect`           | Carga de datos, sincronización con APIs, manejo de eventos globales.|
| `useRef`              | Animaciones, control de reproducción multimedia, enfoque de inputs. |
| `useContext`          | Autenticación, temas, configuración global, carrito de compras.     |
| `use` (React 18/19)   | Carga de datos server-side con suspensión automática.              |
| `useFormState/Status` | Formularios con validaciones servidor y estados complejos.         |
| `useOptimistic`       | Actualizaciones instantáneas mientras espera confirmación servidor. |

