## 🧪 Tarjeta de Canción tipo Spotify

### 🎯 Objetivo
Reproducir visualmente una tarjeta de canción al estilo Spotify, utilizando **React** y **Tailwind CSS**. Este ejercicio no requiere lógica avanzada ni conexión a APIs.

---

### 📝 Enunciado

Crea un componente en React llamado `<SongCard />` que reciba por props la información de una canción y la muestre con el siguiente contenido:

- 📀 Imagen de portada de la canción o álbum
- 🎵 Título de la canción
- 👤 Nombre del artista
- ⏱️ Duración (ej. 3:24)
- ▶️ Un icono de "Play" (puedes usar emoji, una imagen o un icono de librería como Heroicons)

---

### 🎁 Bonus (si te sobra tiempo)

- Añade un **hover** que cambie el fondo de la tarjeta.
- Muestra el botón de "Play" solo cuando el cursor está encima.

---

### 🧠 Pistas para comenzar

- Usa `props` para pasar los datos de la canción al componente.
- Puedes maquetar con Tailwind usando `flex`, `gap`, `rounded`, `shadow`, etc.
- Usa un placeholder para los datos, por ejemplo:

  ```js
  const song = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:20",
    image: "https://via.placeholder.com/150"
  }
  ```

Para iconos, puedes usar:

- Emoji: ▶️
- Heroicons (con @heroicons/react)
- FontAwesome (si ya lo tienes configurado)

```bash
# Estructura de carpetas:
/src
  /components
    SongCard.jsx
  App.jsx
  index.css
```

- 🕒 **Tiempo estimado:** 30 minutos

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


