## 🔁 Ejemplo: Fetch de usuarios desde una API pública

Usaremos la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) que devuelve datos de ejemplo (usuarios).

### 📦 Si usas `fetch` (nativo):

```jsx
import React, { useEffect, useState } from "react";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar usuarios:", error);
        setCargando(false);
      });
  }, []); // Se ejecuta una sola vez al montar el componente

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {cargando ? (
        <p>Cargando usuarios...</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

---

### 🧼 Si prefieres async/await (recomendado para mayor claridad):

```jsx
useEffect(() => {
  const obtenerUsuarios = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsuarios(data);
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
    } finally {
      setCargando(false);
    }
  };

  obtenerUsuarios();
}, []);
```

---

Este patrón es muy común en React:
- `useEffect` se encarga de ejecutar lógica cuando el componente se monta o cuando cambian dependencias.
- `useState` se usa para guardar el estado de la respuesta (usuarios, loading, errores, etc).
