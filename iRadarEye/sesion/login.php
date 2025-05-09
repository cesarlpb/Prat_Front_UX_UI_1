<?php
// Archivo login.php
require 'config.php';
// Iniciar sesión
session_start();
$_SESSION['loggedin'] = true;
// Verificar si el usuario ya ha iniciado sesión
if (isset($_SESSION['id_usuario'])) {
  header('Location: success.php');
  exit();
}

// Verificar si el formulario ha sido enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Obtener datos del formulario
  $usuario = $_POST['usuario'];
  $contrasena = $_POST['contrasena'];

  // Conexión a la base de datos
  $conexion = new mysqli('localhost', 'root', '', 'escapesrooms');

  // Verificar si la conexión es exitosa
  if ($conexion->connect_error) {
    die('Error de conexión: ' . $conexion->connect_error);
  }

  // Obtener el usuario de la base de datos
  $query = "SELECT id_usuario, usuario, contrasena FROM usuarios WHERE usuario = ?";
  $stmt = $conexion->prepare($query);
  $stmt->bind_param('s', $usuario);
  $stmt->execute();
  $stmt->store_result();

  if ($stmt->num_rows > 0) {
    $stmt->bind_result($id_usuario, $usuario, $contrasena_hash);
    $stmt->fetch();

    // Verificar si la contraseña es correcta
    if (password_verify($contrasena, $contrasena_hash)) {
      // Iniciar sesión y redireccionar a success.php
      $_SESSION['id_usuario'] = $id_usuario;
      $_SESSION['usuario'] = $usuario;
      header('Location: success.php');
      exit();
    } else {
      $_SESSION['error'] = 'Contraseña incorrecta. Inténtalo de nuevo.';
    }
  } else {
    $_SESSION['error'] = 'Usuario no encontrado. Inténtalo de nuevo.';
  }
}

?>

<!DOCTYPE html>
<html>
<head>
  <title>Iniciar Sesión</title>
  <!-- Agregar archivos CSS de Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>


<body>
<a class="navbar-brand" href="../index.php">IradarEye</a>
<div class="container">
  <div class="dflex row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Iniciar Sesión</h4>
        </div>
        <div class="card-body">
          <?php if (isset($_SESSION['error'])) { ?>
            <div class="alert alert-danger"><?php echo $_SESSION['error']; ?></div>
          <?php unset($_SESSION['error']); } ?>
          <form method="post">
            <div class="form-group">
              <label for="usuario">Usuario:</label>
              <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Ingresa tu usuario" required>
            </div>
            <div class="form-group">
              <label for="contrasena">Contraseña:</label>
              <input type="password" class="form-control" id="contrasena" name="contrasena" placeholder="Ingresa tu contraseña" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Iniciar Sesión</button>
          </form>
        </div>
        <div class="card-footer text-center">
          <p>¿No tienes una cuenta? <a href="register.php">Regístrate</a></p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Agregar archivos JS de Bootstrap -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<style>
    
    body {
      background-image: url('../img/login.jpg'); 
      background-repeat:no-repeat;
			background-position:center;
			background-size:cover;
      background-attachment: fixed;
			}
    

    .container{
      display: block; 
      margin-top: 150px; 
      opacity: 0.9;
    }
  </style>

</body>
</html>