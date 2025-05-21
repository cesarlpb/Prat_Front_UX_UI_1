# Comandos para crear tabla Tareas y migrar

```
sequelize model:generate --name Tarea --attributes titulo:string,completada:boolean --force

sequelize db:migrate

npx sequelize-cli db:seed:all
```

```
npm run dev
```