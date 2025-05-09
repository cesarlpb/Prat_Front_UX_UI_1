<?php
// Archivo guardar_favorito.php
require 'config.php';
// Iniciar sesión
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['id_usuario'])) {
  echo 'No has iniciado sesión';
  exit();
}

// Verificar si se ha enviado el ID de la escaperoom
if (isset($_POST['escaperoom_id'])) {
  // Obtener el ID de la escaperoom enviado desde el botón de favoritos
  $escaperoomId = $_POST['escaperoom_id'];

  // Conexión a la base de datos
  $conexion = new mysqli('localhost', 'root', '', 'escapesrooms');

  // Verificar si la conexión es exitosa
  if ($conexion->connect_error) {
    die('Error de conexión: ' . $conexion->connect_error);
  }

  // Obtener el ID del usuario actual
  $idUsuario = $_SESSION['id_usuario'];

  // Insertar la escaperoom en el historial del usuario
  $query = "INSERT INTO historial (id_usuario, id_escaperoom) VALUES (?, ?)";
  $stmt = $conexion->prepare($query);
  $stmt->bind_param('ii', $idUsuario, $escaperoomId);
  
  if ($stmt->execute()) {
    echo 'Escaperoom guardada en el historial correctamente';
  } else {
    echo 'Error al guardar la escaperoom en el historial';
  }

  $stmt->close();
} else {
  echo 'No se ha proporcionado el ID de la escaperoom';
}
