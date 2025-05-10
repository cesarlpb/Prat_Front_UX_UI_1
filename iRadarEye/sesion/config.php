<?php
// Configuración de conexión a la base de datos
$servername = "localhost"; // Nombre del servidor de la base de datos
$username = "root"; // Nombre de usuario de la base de datos
$password = ""; // Contraseña de la base de datos
$dbname = "escapesrooms"; // Nombre de la base de datos

// Crear conexión a la base de datos
$mysqli = new mysqli($servername, $username, $password, $dbname);

// Verificar si hay errores en la conexión
if ($mysqli->connect_error) {
    die("Error de conexión: " . $mysqli->connect_error);
}

// Establecer el juego de caracteres de la conexión a UTF-8
$mysqli->set_charset("utf8mb4");
?>
