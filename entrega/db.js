// 1. Instala la dependencia:
//    npm install sqlite3

// 2. En tu archivo (por ejemplo, db.js):
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta al fichero de base de datos (se creará si no existe)
const dbPath = path.resolve(__dirname, 'db.sqlite');

// Abrir conexión
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error('Error al conectar con SQLite:', err.message);
    process.exit(1);
  }
  console.log('Conectado a la base de datos SQLite:', dbPath);
});

// 3. Usar la conexión (ejemplo: crear tabla y agregar tareas)
db.serialize(() => {
  // Crear tabla Tareas si no existe
  db.run(`
    CREATE TABLE IF NOT EXISTS Tareas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      completada INTEGER NOT NULL DEFAULT 0
    )
  `, (err) => {
    if (err) console.error('Error al crear tabla Tareas:', err.message);
  });

  // Insertar tareas de ejemplo
  const tareas = [
    { id: 1, titulo: 'Tarea 1', completada: 0 },
    { id: 2, titulo: 'Tarea 2', completada: 1 },
    { id: 3, titulo: 'Tarea 3', completada: 0 },
    { id: 4, titulo: 'Tarea asdf', completada: 1 },
    { id: 5, titulo: 'Tarea top secret', completada: 0 }
  ];
  const stmt = db.prepare(`INSERT OR IGNORE INTO Tareas (id, titulo, completada) VALUES (?, ?, ?)`);
  for (const t of tareas) {
    stmt.run(t.id, t.titulo, t.completada);
  }
  stmt.finalize();

  // Consultar todas las tareas
  // Ejemplo:
  db.all(`SELECT * FROM Tareas`, (err, rows) => {
    if (err) {
      console.error('Error al consultar tareas:', err.message);
    } else {
      console.log('Tareas en la BBDD:', rows);
    }
  });
});

// 4. Cerrar conexión cuando finalice tu aplicación
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) console.error('Error al cerrar la base de datos:', err.message);
    else console.log('Conexión a SQLite cerrada.');
    process.exit(0);
  });
});

module.exports = db;