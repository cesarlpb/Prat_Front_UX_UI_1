<?php
// Archivo perfil.php
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
$query = "SELECT usuario, correo FROM usuarios WHERE id_usuario = ?";
$stmt = $mysqli->prepare($query);
$stmt->bind_param('i', $id_usuario);
$stmt->execute();
$stmt->bind_result($usuario, $email);
$stmt->fetch();
$stmt->close();
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="Project 22/23" content="RadarEye">
  <title>Tu perfil</title>
  <!-- Incluye los estilos de Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    body {
      background-image:url(../img/radar.PNG);
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      background-attachment: fixed;
    }

    div.recuadroCentral {
      background-color: rgb(129, 129, 129);
      display: block;
      font-size: 20px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5%;
      padding-left: 30px;
      padding-top: 30px;
      padding-bottom: 200px;
      width: 1550px;
      height: 350px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      border-radius: 10px;
    }

    div.saludo {
      display: block;
    }

    div.presentacion {
      display: flex;
    }

    div.stats {
      display: flex;
    }

    div.fotoPerfil {
      background-color: rgb(0, 0, 0);
      width: 250px;
      height: 250px;
      margin-right: 30px;
      margin-left: 30px;
    }

    ul.nav.nav-tabs {
      width: 1500px;
    }

    div.m-md m-l-none dashboard {
      padding-left: 10px;
      padding-right : 10px;
    }

    li.nav-item {
      background-color: rgb(0, 89, 255);
    }

    a.nav-link {
      color: white;
      padding-left: 30px;
      padding-right: 30px;
    }

    div.Cntr {
      flex: 50%;
      background-color: #FFFFFF;
      background-color: rgb(129, 129, 129);
      padding-top: 0px;
      height: 80vh;
      overflow: scroll;
      scrollbar-width: none;
    }

    p.texto-Cntr {
      font-size: 15;
    }

    p.valorSticky {
      background-color: white;
      font-size: 90;
      position: sticky;
      top: 0px;
    }

    .buttonPerfil{
      padding: center;
      background-position: center;
    }
  </style>
</head>
<body>
  <!-- Incluye los scripts de Bootstrap -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <div class="fondo">
    <div class="recuadroCentral">
      <div class="presentacion">
        <div class="usuario">
          <div class="fotoPerfil">
            <form action="cargar_imagen.php" method="POST" enctype="multipart/form-data">
              <label for="fotoPerfil">
                <div class="cuadroNegro">
                  <input type="file" id="fotoPerfil" name="fotoPerfil" accept="image/*" style="display: none;">
                  <input type="submit" id="buttonPerfil" value="Cargar imagen">
                </div>
              </label>
            </form>
          </div>
        </div>
        <div class="saludo">
          <p class="nav-link" href="#" style="color: white;">¡Bienvenido, <?php echo $usuario; ?>!</p>
          <p class="nav-link" href="#" style="color: white;">Email: <?php echo $email; ?></p>
        </div>
        <?php require 'stats.php';?>
      </div>
    </div>
    <?php require 'containerStats.php';?>
  </div>

  <!-- Bootstrap core JS-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Core theme JS-->
  <script src="js/scripts.js"></script>
</body>
</html>
