## Node.js

1. **Hello World**: Crea un script `app.js` que imprima “Hola Node.js” en consola al ejecutar `node app.js`.

2. **Módulos**: Separa una función en `utils.js` que retorne la suma de dos números e impórtala en `app.js`.

3. **File System**: Usa `fs.promises` para leer un archivo `data.txt` y loguear su contenido.

4. **Escritura de archivos**: Escribe un JSON en `output.json` usando `fs.writeFile`.

5. **HTTP básico**: Monta un servidor con el módulo `http` que responda “Bienvenido” en la raíz `/`.

6. **Express init**: Instala Express y crea una ruta GET `/hello` que devuelva JSON `{ msg: "Hola" }`.

7. **Middleware**: Añade un middleware que loguee método y URL de cada petición.

8. **Routing dinámico**: Define una ruta `/users/:id` y devuelve `{ userId: id }`.

9. **Body parser**: Configura `express.json()` y recibe un POST a `/data` mostrando el body.

10. **Static files**: Sirve una carpeta `public/` con archivos estáticos (HTML, CSS, imágenes).

11. **Error handling**: Implementa middleware de error que atrape excepciones y devuelva status 500.

12. **Nodemon**: Instala `nodemon` y configura el package.json para reiniciar el servidor al guardar.

13. **CORS**: Habilita CORS para permitir peticiones desde `http://localhost:3000`.

14. **Parameters query**: Lee `?search=texto` en la ruta `/search` y responde con la query recibida.

15. **MongoDB**: Conecta a una base MongoDB (Atlas o local) usando `mongoose` y define un esquema simple.

16. **CRUD básico**: Implementa rutas POST, GET, PUT, DELETE para un recurso `tasks` en MongoDB.

17. **Autenticación JWT**: Genera un token JWT al hacer login y protégelo con middleware en rutas privadas.

18. **Env variables**: Usa `dotenv` para cargar `PORT` y `DB_URI` desde un `.env`.

19. **Streams lectura**: Lee un archivo muy grande con streams (`fs.createReadStream`) y cuenta líneas.

20. **Streams escritura**: Crea un stream de escritura para un archivo de log y escribe entradas contínuas.

21. **Transform Stream**: Implementa un `Transform` stream que convierta texto a mayúsculas.

22. **Child Processes**: Usa `child_process.exec` para ejecutar un comando del sistema (por ejemplo `ls`).

23. **WebSockets**: Monta un servidor con `ws` y envía un mensaje a todos los clientes conectados cada 5 s.

24. **Rate Limiter**: Añade `express-rate-limit` limitando a 100 peticiones por IP y hora.

25. **Tests con Jest**: Escribe tests unitarios para una función de suma usando Jest y comprueba varios casos.
