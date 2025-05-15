# 🎵 Ejercicio React: Componente `<SongCard>`;

El objetivo es construir un componente visual que represente una canción, parecido a una tarjeta de Spotify. Este ejercicio se divide en tres niveles de dificultad, de modo que puedas abordarlo según tu ritmo y conocimientos actuales.

---

## 🟢 Nivel 1 – Básico (sin props, estático)

> **Objetivo:** aprender la estructura de un componente con JSX y clases básicas de TailwindCSS.

- [starter](https://github.com/cesarlpb/Prat_Front_UX_UI_1/releases/download/spotify-card-starter/spotify-card-starter.zip)

### Requisitos

- Crear el componente `SongCard`.
- Mostrar en la tarjeta:
  - Una imagen fija (puede ser un link directo a cualquier portada).
  - Título fijo (ej: “Shape of You”).
  - Artista fijo (ej: “Ed Sheeran”).
  - Duración fija (ej: “3:52”).
  - Icono de reproducción (ej: `▶️`).

### Limitaciones

- No usar `props`.
- Todo el contenido es hardcoded (fijo).
- Puedes usar solo HTML + Tailwind básico (no interacciones).

---

## 🟡 Nivel 2 – Intermedio (con props)

- [starter](https://github.com/cesarlpb/Prat_Front_UX_UI_1/releases/download/spotify-card-starter/spotify-card-starter.zip)
- [solución 1](https://github.com/cesarlpb/Prat_Front_UX_UI_1/releases/download/spotify-card-starter/spotify-card-starter-solucion-1.zip)

### Requisitos

- Recibe por props un objeto `song` con las siguientes claves:
  ```js
  {
    title: "string",
    artist: "string",
    duration: "string",
    coverUrl: "string"
  }
  ```

* Usa esos datos para mostrar:

  * Imagen.
  * Título.
  * Artista.
  * Duración.
* Incluye un icono de reproducción (`▶️`) alineado a la derecha.

### Extras opcionales

* Si no hay `coverUrl`, usar una imagen por defecto.
* Mostrar en consola el objeto `song` al montar el componente (`console.log(song)` dentro del body).

---

## 🔵 Nivel 3 – Avanzado (interactivo + animado)

> **Objetivo:** diseño profesional + interacción visual + lógica condicional.

- [starter](https://github.com/cesarlpb/Prat_Front_UX_UI_1/releases/download/spotify-card-starter/spotify-card-starter.zip)

### Requisitos

* Usa TailwindCSS con:

  * `hover:shadow-lg`, `transition`, `rounded-xl`, etc.
* Añade efectos:

  * Hover: resalta fondo o eleva la tarjeta.
  * Aparece el botón de reproducción solo al hacer hover.
* El icono cambia:

  * `▶️` si la canción está detenida.
  * `⏸️` si está en reproducción.
* Controla el estado con `useState`.

```js
const [isPlaying, setIsPlaying] = useState(false);
```

* Al hacer clic sobre el icono, se alterna entre play/pause.

### Extras opcionales

* Badge con la duración en una esquina.
* Mostrar un mensaje en consola cuando se hace clic en play.

---

## 🎯 Objetivos del ejercicio

* 🧠 Entender props y cómo se usan.
* 🧱 Practicar diseño visual con Tailwind.
* 🌀 Introducir interactividad con estado (`useState`).
* 💡 Reflejar progresión del aprendizaje con ejemplos reales.

---
