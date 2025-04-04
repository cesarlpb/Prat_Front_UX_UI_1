<?php
require 'config.php';

// Verifica si se envió un nombre de sala para buscar en Jugadas
if (isset($_POST['sala_jugadas'])) {
  $sala_jugadas = $_POST['sala_jugadas'];
  $sql_jugadas = "SELECT empresa, sala, ubi, direc, dificult, escaperoomsGanadas FROM escaperooms WHERE sala LIKE '%{$sala_jugadas}%'";
} else {
  $sql_jugadas = "SELECT empresa, sala, ubi, direc, dificult, escaperoomsGanadas FROM escaperooms";
}

$result_jugadas = $mysqli->query($sql_jugadas);
$num_rows_jugadas = $result_jugadas->num_rows;

// Verifica si se envió un nombre de sala para buscar en Favoritos
if (isset($_POST['sala_favoritas'])) {
  $sala_favoritas = $_POST['sala_favoritas'];
  $sql_favoritas = "SELECT empresa, sala, ubi, direc, dificult, escaperoomsGanadas FROM escaperooms WHERE sala LIKE '%{$sala_favoritas}%'";
} else {
  $sql_favoritas = "SELECT empresa, sala, ubi, direc, dificult, escaperoomsGanadas FROM escaperooms";
}

$result_favoritas = $mysqli->query($sql_favoritas);
$num_rows_favoritas = $result_favoritas->num_rows;
?>

<div class="container">
  <ul class="nav nav-tabs">
    <li onClick="document.getElementById('jugadas').style.display='none'; document.getElementById('favoritas').style.display='block';" class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#tab-complete" aria-expanded="true" data-tab="complete" title="Jugadas"><i class="fa fa-lock fa-lg fa-fw"></i> Favoritos</a></li>
    <li onClick="document.getElementById('favoritas').style.display='none'; document.getElementById('jugadas').style.display='block';"  class="nav-item"><a class="nav-link" data-toggle="tab" href="#tab-fav" aria-expanded="false" data-tab="fav" title="Favoritos"><i class="fa fa-heart fa-lg fa-fw"></i> Jugadas</a></li>
    <div class="rooms">
      <div class="row py-6">
        <div id="jugadas" style="display:none" class="col-12">
          <p style="margin-bottom: 20px">¡Ésta es tu lista de escape rooms jugadas! Actualiza los datos de las salas que has finalizado y añadir tus salas favoritas, el tiempo de finalización del juego, así como una anotación para recordar tu experiencia.</p>
          
          <div class="row">
            <div class="col-12 content">
              <div class="Cntr">
                <?php
                if ($num_rows_jugadas > 0) {
                  echo "<div class='escaperooms-container'>";
                  while ($row = $result_jugadas->fetch_assoc()) {
                    echo "<div>";
                    echo "<table>";
                    echo "<tr>";
                    echo "<td>" . "<strong>" . $row['sala'] . "</strong>" . "</td>";
                    echo "<td>" . " " . "</td>";
                    echo "<td>" . $row['empresa'] . "</td>";
                    echo "<td>" . " " . "</td>";
                    echo "<td>" . $row['dificult'] . "</td>";
                    echo "<td>";
                    echo "<button class='btn btn-danger btn-sm' onclick='eliminarSala(\"" . $row['sala'] . "\")'>Eliminar</button>";
                    echo "</td>";
                    echo "</tr>";
                    echo "</table>";
                    echo "</div>";
                  }
                  echo "</div>"; 
                } else {
                  echo "<h2>No se ha encontrado ningún resultado.</h2>";
                }
                ?>
              </div>
            </div>
          </div>
        </div>
        
        <div id="favoritas" class="col-12">
          <p style="margin-bottom: 20px">¡Ésta es tu lista de escape rooms favoritos para que tus salas destaquen más en tu perfil!</p>
          
          <!-- Formulario de búsqueda para Favoritos -->
      
          <div class="row">
            <div class="col-12 content">
              <div class="Cntr">
                <?php
                if ($num_rows_favoritas > 0) {
                  echo "<div class='escaperooms-container'>";
                  while ($row = $result_favoritas->fetch_assoc()) {
                    echo "<div>";
                    echo "<table>";
                    echo "<tr>";
                    echo "<td>" . "<strong>" . $row['sala'] . "</strong>" . "</td>";
                    echo "<td>" . " " . "</td>";
                    echo "<td>" . $row['empresa'] . "</td>";
                    echo "<td>" . " " . "</td>";
                    echo "<td>" . $row['dificult'] . "</td>";
                    echo "<td>";
                    echo "<button class='btn btn-danger btn-sm' onclick='eliminarSala(\"" . $row['sala'] . "\")'>Eliminar</button>";
                    echo "</td>";
                    echo "</tr>";
                    echo "</table>";
                    echo "</div>";
                  }
                  echo "</div>"; 
                } else {
                  echo "<h2>No se ha encontrado ningún resultado.</h2>";
                }
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ul>
</div>

<style>
  div.container {
    display: flex;
    margin-top: 2%;
    margin-left: 10%;
  }

  div.rooms {
    background-color: rgb(34, 34, 34);
    width: 1500px;
    height: 1100px;
  }

  div.col-12 {
    color: white;
    font-size: 20px;
    padding: 20px;
  }

  div.Cntr {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  div.escaperooms-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  div.escaperooms-container div {
    background-color: rgb(84, 84, 84);
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    padding: 5px;
  }
</style>

<script>
  function eliminarSala(sala) {
    // Aquí puedes agregar la lógica para eliminar la sala de la base de datos
    console.log("Eliminar sala: " + sala);
  }
</script>
