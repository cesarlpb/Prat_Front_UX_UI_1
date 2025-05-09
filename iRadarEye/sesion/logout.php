<?php
// Archivo logout.php
// Iniciar sesión
session_start();

// Cerrar sesión
session_unset();
session_destroy();

// Redireccionar a la página de inicio de sesión
header('Location: login.php');
exit();
?>
