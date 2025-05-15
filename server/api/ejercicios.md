## Ejercicios de APIs REST (con Node.js)

1. **GET básico**
   Diseña un endpoint `GET /usuarios` que devuelva JSON con todos los usuarios.

2. **GET por ID**
   `GET /usuarios/:id` devuelve un usuario o un 404 si no existe.

3. **POST con JSON**
   `POST /usuarios` crea un usuario a partir de un body JSON `{ name, email }`.

4. **PUT para actualización**
   `PUT /usuarios/:id` actualiza el nombre y/o email; devuelve 200 con el objeto actualizado.

5. **PATCH parcial**
   `PATCH /usuarios/:id` solo modifica los campos enviados en el body.

6. **DELETE**
   `DELETE /usuarios/:id` borra un usuario y devuelve 204 No Content.

7. **Query parameters**
   `GET /posts?usuarioId=3&limit=5` filtra y pagina.

8. **Paginación con headers**
   Implementa paginación y devuelve `X-Total-Count` en headers.

9. **Status codes**
   Asegura respuestas apropiadas: 200, 201, 400, 404, 500 según el caso.

10. **Validación de datos**
    Usa `express-validator` o similar para validar email, longitudes y campos obligatorios.

11. **Manejo de errores centralizado**
    Crea middleware que capture excepciones y devuelva JSON `{ error, message }`.

12. **Ruta anidada**
    `GET /usuarios/:id/posts` devuelve los posts de un usuario.

13. **HATEOAS básico**
    En la respuesta de `GET /usuarios/:id`, añade links a `self`, `posts`, `update`, `delete`.

14. **CORS**
    Habilita CORS para permitir peticiones desde un dominio cliente (por ejemplo `http://localhost:3000`).

15. **Autenticación Basic Auth**
    Protege `POST /posts` con autenticación básica HTTP.

16. **JWT**
    Implementa login (`POST /login`) que emite un token JWT y middleware que lo valide.

17. **Rate limiting**
    Usa `express-rate-limit` para limitar a 100 peticiones por IP en 15 min.

18. **Cache-Control**
    Añade cabeceras `Cache-Control` en `GET /posts` para cachear respuestas 60s.

19. **Descarga de archivos**
    `GET /export/usuarios.csv` genera y envía un CSV con los usuarios.

20. **Stream de datos**
    Transforma la lista de usuarios en un stream y envíalo por partes al cliente.

21. **Pagination cursor-based**
    Implementa `GET /items?cursor=XYZ&limit=10` usando cursores en lugar de offset.

22. **Swagger / OpenAPI**
    Documenta toda la API con Swagger y sirve la UI en `/docs`.

23. **Mock de API**
    Crea una ruta `/mock/users` que devuelva datos simulados usando `faker.js`.

24. **Webhooks**
    Implementa un endpoint `POST /webhook` que valide un secret en headers y loguee el body.

25. **Testing de la API**
    Escribe tests con Jest y supertest para verificar `GET /usuarios` y `POST /usuarios`.
