# Sprint Express – Web “La Hogaza de Pepe”  
*(Diseño, desarrollo y despliegue en una sola sesión)*  

> **Meta:** publicar la web corporativa básica (menú, formulario de encargos y dominio propio)  
> antes de que termine la clase. Cada equipo trabaja **en paralelo**; el *Team Leader* coordina.

---

## 1 · Estructura del equipo

| Rol / Sub-equipo | Responsabilidades clave | Entregable «listo» |
|------------------|-------------------------|--------------------|
| **Team Leader** (1) | ▸ Convoca reuniones flash (5 min)  <br>▸ Mantiene checklist común en Kanban/Notion  <br>▸ Revisa *pull requests*  <br>▸ Habla con profesor/cliente | Kanban actualizado + README |
| **Diseño · Figma** (2) | ▸ Mood-board ultra-rápido  <br>▸ Wireframe mobile-first  <br>▸ Exporta logo y 4 iconos | Prototipo “Ready for Dev” |
| **Maquetación / Front** (2) | ▸ Init repo (Vite/Next + Tailwind)  <br>▸ Navbar, hero, footer  <br>▸ Página “Menú” con cards de productos  | App responsive con Lighthouse ≥ 90 |
| **Back-end & DB** (2) | ▸ Endpoint `/pedido` (Node/Express o Function)  <br>▸ JSON schema + validación  <br>▸ Hook a SendGrid (e-mail de confirmación) | API funcionando (curl test) |
| **Despliegue / Nube** (1) | ▸ Conecta repo a **Vercel**  <br>▸ Crea dominio temporal (`.vercel.app`)  <br>▸ Añade variables de entorno y secretos  | URL pública + SSL |

---

## 2 · Tablero de tareas minimalista

| Estado | Tarea | Owner sugerido |
|--------|-------|----------------|
| ✅ **Done** | Repo creado + ramas protegidas | TL |
| 🔄 **Doing** | Prototipo Figma → export assets | Diseño |
| 🔄 **Doing** | Estructura HTML + Tailwind | Front |
| 🔄 **Doing** | API `/pedido` con email | Back |
| ⏳ **Next** | Conectar formulario a API | Front + Back |
| ⏳ **Next** | Dominio personalizado | DevOps |
| ⏳ **Next** | Accesibilidad rápida (alt, labels) | Front |
| ⏳ **Next** | Optimizar imágenes (< 150 KB) | Diseño |
| ⏳ **Next** | README con instalación 1-click | TL |

*(El TL mueve tarjetas en tiempo real; cada tarea debe durar ≤ 30 min.)*

---

## 3 · Definición de Hecho (DoD) ultraligera

* **Visual:** diseño aprobado por el cliente en Figma.  
* **Funcional:** formulario guarda pedido ↔ envía email de confirmación.  
* **Performance:** Lighthouse rendimiento ≥ 90.  
* **Seguridad:** HTTPS, secrets en Vercel, datos RGPD (checkbox consentimiento).  
* **Deploy:** commit en `main` ⇒ Vercel Production OK.  
* **Doc:** README con *Setup local* + *Cómo desplegar* (máx. 10 líneas).

---

## 4 · Flujo Git exprés

1. Rama `main` protegida.  
2. Cada equipo trabaja en `feat/<equipo>` y abre PR.  
3. Otra persona (cualquier equipo) revisa → squash merge.  
4. Vercel genera pre-producción automáticamente; TL valida y **promueve a producción**.

---

## 5 · Stack concreto (ready-to-use)

| Capa | Tech |
|------|------|
| **Diseño** | Figma Community icon pack “Bakery” |
| **Front** | **Vite + React + Tailwind** (`npm create vite@latest`) |
| **API** | **Vercel Serverless Function** (`api/pedido.js`) |
| **Email** | SendGrid Free (apikey en Vercel secret) |
| **DB (opcional)** | Formspree / simple JSON file (si no se necesita histórico) |
| **DevOps** | GitHub Actions → Vercel (`vercel --prod`) |

---

## 6 · “Checklist de salida de aula”

- [ ] URL pública compartida con el profesor  
- [ ] Pedido de prueba recibido en el correo de la panadería  
- [ ] Logo y menú se ven en móvil y en desktop  
- [ ] README + Figma link en el repositorio  
- [ ] Todos los *commits* firmados / vinculados a usuarios

---

> **Regla de oro:** si algo tarda más de **15 min**, simplifícalo o haz un mock o un fake de la parte compleja ( simula el comportamiento de alguna forma ).  

> Lo importante hoy es **publicar** algo real, usable y con buen aspecto. 🚀🥖

> Esas hogazas no se venden solas. 🐸

> In wheat, we trust ❤️