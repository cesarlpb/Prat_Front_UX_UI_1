```bash
flowchart TD

  subgraph "Métodos HTTP: CRUD"
    GET["GET: Pedir datos"]
    POST["POST: Enviar datos"]
    PUT["PUT: Actualizar datos"]
    DELETE["DELETE: Borrar datos"]
  end
```

```bash
User["Cliente: 🧑 Usuario Navegador/React"]
  Server["Servidor: 🖥️ Node/Express"]
  
  User -->|&nbsp;GET /users&nbsp;<br>GET /user/:id&nbsp;<br>&nbsp;POST /form&nbsp;<br>&nbsp;PUT /user/:id&nbsp;<br>&nbsp;DELETE /user/:id&nbsp;| Server

  Server -->| &nbsp; <br> &nbsp; Respuesta en JSON: &nbsp; <br> ✅ status: ok <br> ❌ error: message <br> &nbsp;| User
```

