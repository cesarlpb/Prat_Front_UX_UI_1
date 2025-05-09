<?php
// Archivo success.php
require 'config.php';
// Iniciar sesión
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['id_usuario'])) {
  header('Location: login.php');
  exit();
}

// Obtener datos del usuario
$id_usuario = $_SESSION['id_usuario'];
$usuario = $_SESSION['usuario'];


// Redirigir al usuario a index.php
$_SESSION['nombre_usuario'] = $usuario;
header('Location: ../index.php');
exit();

?>