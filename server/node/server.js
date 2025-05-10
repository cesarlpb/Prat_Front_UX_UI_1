// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Variables configurables
const MIN_DELAY_MS = process.env.MIN_DELAY_MS || 200;
const MAX_DELAY_MS = process.env.MAX_DELAY_MS || 750;
const FORM_ENDPOINT = "receive-form";

// Middlewares
app.use(cors()); // Permitir CORS para todos los orígenes (ajustable si quieres limitar)
app.use(express.json()); // Para parsear JSON en el body

// Ruta para recibir formularios
app.post(`/${FORM_ENDPOINT}`, (req, res) => {
  console.log("📨 Datos recibidos:", req.body);

  // Simular tiempo de respuesta aleatorio
  const delay = Math.floor(
    Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS + 1) + Number(MIN_DELAY_MS)
  );

  console.log(`⏳ Respondiendo en ${delay} ms...`);

  setTimeout(() => {
    res.json({
      status: "ok",
      received: req.body,
      delay,
    });
  }, delay);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  console.log(`👉 Endpoint disponible en ${FORM_ENDPOINT}`);
  console.log(`⏲️ Delay entre ${MIN_DELAY_MS} y ${MAX_DELAY_MS} ms`);
});
