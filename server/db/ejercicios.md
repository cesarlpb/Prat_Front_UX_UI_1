## Ejercicios de bases de datos (SQL / SQLite)

1. **Creación de tablas**
   Diseña y crea en SQLite las tablas `usuarios(id, nombre, email)` y `posts(id, usuario_id, título, contenido, fecha)`.

2. **Inserción básica**
   Inserta al menos 5 usuarios y 10 posts con `INSERT`.

3. **SELECT simple**
   Recupera todos los campos de la tabla `usuarios`.

4. **SELECT con WHERE**
   Extrae los posts publicados por el usuario con `usuario_id = 3`.

5. **Proyección**
   Muestra solo los nombres y emails de los usuarios.

6. **DISTINCT**
   Recupera los distintos valores de `usuario_id` en `posts`.

7. **ORDER BY**
   Lista los posts ordenados por fecha descendente.

8. **LIMIT / OFFSET**
   Obtén los 5 posts más recientes y luego los siguientes 5.

9. **COUNT y agregación**
   Cuenta cuántos posts ha escrito cada usuario (`GROUP BY usuario_id`).

10. **SUM, AVG, MIN, MAX**
    Calcula la longitud media (`LENGTH(contenido)`) de los posts y la longitud mínima y máxima.

11. **JOIN interno (INNER JOIN)**
    Obtén `usuarios.name` junto con el `título` de cada uno de sus posts.

12. **LEFT JOIN**
    Muestra todos los usuarios y, si existen, sus posts (incluyendo usuarios sin posts).

13. **Subconsulta en WHERE**
    Selecciona los usuarios que han escrito más de 2 posts.

14. **Subconsulta en SELECT**
    Añade una columna con el número de posts que tiene cada usuario.

15. **INSERT SELECT**
    Copia todos los posts antiguos (fecha < 2024-01-01) a una tabla `archivos_posts`.

16. **UPDATE**
    Actualiza el email de un usuario usando `UPDATE … WHERE id = X`.

17. **DELETE**
    Borra todos los posts con contenido menor a 10 caracteres.

18. **Transacciones**
    En una transacción, inserta un usuario y su primer post; haz rollback si falla alguno.

19. **Índices**
    Crea un índice sobre `posts(fecha)` y compara tiempos de consulta antes y después.

20. **Vistas**
    Define una vista `vista_usuarios_posts` que muestre nombre de usuario y título de post.

21. **Trigger**
    Crea un trigger que inserte en `log_actividades` un registro tras cada DELETE en `posts`.

22. **Chequeo de restricciones (CHECK)**
    Añade una restricción CHECK para que `email` contenga “@” en la tabla `usuarios`.

23. **Integridad referencial**
    Asegura la relación `posts.usuario_id → usuarios.id` con `FOREIGN KEY` y `ON DELETE CASCADE`.

24. **Common Table Expression (CTE)**
    Escribe una CTE recursiva para generar números del 1 al 10 y úsala en un `SELECT`.

25. **Backup y restore**
    En SQLite, exporta la base a SQL con `.dump` y luego restaúrala en una nueva base.
