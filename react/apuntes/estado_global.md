# C5 · Día 16 – Patrones de Estado Global “Ligero”

## Objetivos de la sesión

* Comprender cuándo **Context API** es suficiente y cuándo conviene un *state manager* externo como **Zustand** o **Jotai**.
* Diseñar un *custom hook* que oculte la implementación de contexto.
* Implementar persistencia básica en `localStorage`.
* Comparar ergonomía, *bundle size* y rendimiento entre opciones.

---

## 1 · React Context API – recordatorio rápido

| Ventajas                                                 | Limitaciones                                                                                   |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Zero‑dep (incluido en React).                            | Cada cambio de contexto provoca *re‑render* de **todos** los consumidores del mismo proveedor. |
| API declarativa con `<Provider>` y hooks (`useContext`). | Dificulta la composición de varios contextos profundos.                                        |
| Muy útil para *theme*, autenticación, *i18n*.            | Sin middlewares, *opt‑in* dev‑tools ni persistencia nativa.                                    |

### Patrón «Provider + Hook»

```jsx
// file: auth-context.jsx
import { createContext, useContext, useState } from 'react';
const AuthCtx = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login  = (u) => setUser(u);
  const logout = () => setUser(null);
  return <AuthCtx.Provider value={{ user, login, logout }}>{children}</AuthCtx.Provider>;
}
export const useAuth = () => useContext(AuthCtx);
```

> [!TIP]
> Exporta el *hook* (`useAuth`) en lugar del contexto. Así encapsulas detalles y evitas el *import‑chain* de `useContext(AuthCtx)` en cada archivo.

---

## 2 · Estado global minimalista con Zustant | Jotai

### 2.1 Zustand

* API: `createStore` (Preact style) → devuelve un hook `useStore`.
* *Selectors* para leer porciones y evitar renderizado excesivo.
* Persistencia fácil: `persist` middleware → `localStorage`.

```jsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(persist(
  (set) => ({ user: null, login: (u) => set({ user: u }), logout: () => set({ user: null }) }),
  { name: 'auth-storage' }
));
```

### 2.2 Jotai

* Basado en **átomos** (similar a Recoil) → cada átomo provoca renderizado sólo donde se usa.
* Tamaño < 5 kB.
* Dev‑tools para inspeccionar átomos.

```jsx
import { atom, useAtom } from 'jotai';
const userAtom = atom(null);
```

|             | Bundle (min+gzip) | Dev‑tools                 | Persistencia oficial            |
| ----------- | ----------------- | ------------------------- | ------------------------------- |
| Context API | 0 KB extra        | React DevTools (limitado) | ❌                               |
| Zustand     | ≈ 3,5 kB          | Sí                        | Middleware `persist()`          |
| Jotai       | ≈ 4 kB            | Sí                        | *jotai/utils* `atomWithStorage` |

---

## 3 · Persistencia con `localStorage`

Ejemplo manual (Context):

```jsx
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem('user'));
  if (saved) setUser(saved);
}, []);

useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user));
}, [user]);
```

> [!NOTE]
> Cifra o minimiza la información sensible; nunca guardes tokens JWT sin fecha de expiración.

---

## 4 · Mini‑Labs

- [Lab Refactor en Context](../labs/1.lab-fps.md)
- [Lab ](../labs/1.lab-fps.md)

---

## 5 · Recursos adicionales

* React Docs → *Context* [https://react.dev/reference/react/useContext](https://react.dev/reference/react/useContext)
* Zustand Docs [https://docs.pmnd.rs/zustand](https://docs.pmnd.rs/zustand)
* Jotai Docs [https://jotai.org/docs/introduction](https://jotai.org/docs/introduction)
* Video: *Scaling React State* – "Why & When to Replace Context with a Store" (YouTube).
