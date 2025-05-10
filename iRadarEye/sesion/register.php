<?php
// Archivo register.php
require 'config.php';
// Iniciar sesión
session_start();

// Verificar si el formulario ha sido enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Obtener datos del formulario
  $usuario = $_POST['usuario'];
  $correo = $_POST['correo'];
  $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // Encriptar la contraseña

  try {
    // Insertar los datos en la tabla usuarios
    $query = "INSERT INTO usuarios (usuario, correo, contrasena) VALUES (?, ?, ?)";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param('sss', $usuario, $correo, $contrasena);
    if ($stmt->execute()) {
      // Redireccionar a success.php
      $_SESSION['mensaje'] = 'Registro exitoso. Inicia sesión.';
      header('Location: success.php');
      exit();
    } else {
      $_SESSION['error'] = 'Error al registrar. Inténtalo de nuevo.';
    }
  } catch (mysqli_sql_exception $e) {
    $_SESSION['error'] = 'El usuario ya está registrado. Por favor, elige otro nombre de usuario.';
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Registro de Usuario</title>
  <!-- Agregar archivos CSS de Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
<a class="navbar-brand" href="../index.php">IradarEye</a>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center">Registro de Usuario</h4>
        </div>
        <div class="card-body">
          <?php if (isset($_SESSION['error'])): ?>
            <div class="alert alert-danger"><?php echo $_SESSION['error']; ?></div>
            <?php unset($_SESSION['error']); ?>
          <?php endif; ?>
          <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <div class="form-group">
              <label for="usuario">Usuario:</label>
              <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Ingresa tu usuario" required>
            </div>
            <div class="form-group">
              <label for="correo">Correo:</label>
              <input type="email" class="form-control" id="correo" name="correo" placeholder="Ingresa tu correo" required>
            </div>
            <div class="form-group">
              <label for="contrasena">Contraseña:</label>
              <input type="password" class="form-control" id="contrasena" name="contrasena" placeholder="Ingresa tu contraseña" required>
            </div>
            <div class="form-group">
              <label for="confirmar_contrasena">Confirmar Contraseña:</label>
              <input type="password" class="form-control" id="confirmar_contrasena" name="confirmar_contrasena" placeholder="Confirma tu contraseña" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Registrarse</button>
          </form>
        </div>
        <div class="card-footer text-center">
          <p>¿Ya tienes una cuenta? <a href="login.php">Iniciar sesión</a></p>
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
    background-position: center;
    background-repeat: no-repeat;
  }

  .container {
    display: block;
    margin-top: 150px;
    opacity: 0.9;
  }
</style>
</body>
</html>
