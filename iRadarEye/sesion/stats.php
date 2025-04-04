<?php
// Configuración de la conexión a la base de datos
$mysqli = new mysqli("localhost", "root", "", "escapesrooms");

if ($mysqli->connect_errno) {
    die("Error de conexión a la base de datos: " . $mysqli->connect_error);
}

// Asignación del ID de usuario
$id_usuario = 123; // Aquí debes asignar el ID de usuario correspondiente

// Obtener estadísticas del usuario
$queryStats = "SELECT escaperoomsJugadas, escaperoomsGanadas, tiempo_medio, pais, comunidad, provincia FROM stats WHERE id_stats = ?";
$stmtStats = $mysqli->prepare($queryStats);
$stmtStats->bind_param('i', $id_usuario);
$stmtStats->execute();
$stmtStats->bind_result($escaperoomsJugadas, $escaperoomsGanadas, $tiempoMedio, $pais, $comunidad, $provincia);
$stmtStats->fetch();
$stmtStats->close();

// Cerrar la conexión a la base de datos
$mysqli->close();
?>

<div class="stats">
    <div class="stat">
        <h3>Jugadas</h3>
        <div class="circle">
            <p class="number"><?php echo $escaperoomsJugadas; ?></p>
        </div>   
    </div>
    <div class="stat">
        <h3>Ganadas</h3>
        <div class="circle">
            <p class="number"><?php echo $escaperoomsGanadas; ?></p>
        </div>
    </div>
    <div class="stat">
        <h3 style="text-align:center;">País</h3>
        <div class="circle">
            <p class="number"><?php echo $pais; ?></p>
        </div>
    </div>
    <div class="stat">
        <h3>Comunidad</h3>
        <div class="circle">
            <p class="number"><?php echo $comunidad; ?></p>
        </div>
    </div>
    <div class="stat">
        <h3>Provincia</h3>
        <div class="circle">
            <p class="number"><?php echo $provincia; ?></p>
        </div>
    </div>
</div>

<div class="stats2">
    <div class="stat2">
        <h3>Tiempo medio: </h3><?php echo $tiempoMedio;?>
    </div>
</div>

<style>

    div.stats2{
        margin-top:175px;
        margin-left:0px;
    }

    div.stat{
        margin-left:6%;
        color: white;
    }

    div.stat2{
        margin-left:6%;
        color: white;
    }

    div.circle{
        background-color: rgb(255, 255, 255);
        display: block;
        width: 60px;
        height: 60px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 30px; 
    }

    div.circle{
        color: black;
        font-size: 30px;
    }

    p.number{
        margin-left: 22px;
        padding-top: 5px;
    }

</style>
