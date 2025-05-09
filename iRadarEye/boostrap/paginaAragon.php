<!DOCTYPE html>
<html>
<head>
    <!-- CSS recuadros página Barcelona-->
    <title>Tabla de datos</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        
    <style>
        body {
            background-image: url(../img/radar.PNG);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
        }

        .escape-room h3 {
            margin-top: 0;
            font-size: 20px;
        }

        .escape-room p {
            margin: 0px 0;
            font-size: 16px;
        }

        .col-4 {
            flex-basis: 33.33%;
            max-width: 33.33%;
        }

        .col-4 .escape-room {
            width: 400px; 
            height: 0;
            padding-bottom: 180%;
            top: 50%;
        }

        .my-card {
            margin-right: 1.75rem; 
            margin-left: 1.75rem; 
        }

        body > .container > .row > .col-4 {
            margin-bottom: 20%;
        }

        .border {
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10%;
            transform: translate(-50%, -50%);
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
            margin-left: 50%;
            width: 80%; 
        }

        .border form {
            margin: 0;
            width: 100%; 
        }

        .form-group {
            flex: 1; 
        }

        .card{
            height: 400px; 
        }



    </style>

</head>
<?php require 'header.php';?>
<body>
<div class="container">
    <div class="row">
        <div class="col-4 ms-auto">
            <a href="../mapa.php">
                <button type="button" class="btn btn-primary btn-lg  mx-1" style="padding-left:100px; padding-right: 100px; box-shadow: 15px 13px 40px black;  top: 15%; left:15px;  position: fixed;">Mapa</button>
            </a>
        </div>
    </div>

    <div class="border">
    <form method="post" action="buscador.php" class="d-flex">
        <div class="form-group flex-grow-1 mr-2">
            <label for="sala">Nombre:</label>
            <input type="text" name="sala" id="sala" class="form-control">
        </div>
        <div class="form-group flex-grow-1 mr-2">
            <label for="empresa">Empresa:</label>
            <input type="text" name="empresa" id="empresa" class="form-control">
        </div>
        <div class="form-group flex-grow-1 mr-2">
            <label for="genero">Género:</label>
            <select class="form-control" id="genero" name="genero">
                <option value="">------------------</option>
                <option value="Terror">Terror</option>
                <option value="Ciencia Fi">Ciencia ficción</option>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="Misterio">Misterio</option>
                <option value="Fantasia">Fantasia</option>
                <option value="Infantil">Infantil</option>
            </select>
        </div>
        <div class="form-group flex-grow-1 mr-2">
            <label for="dificult">Dificultad:</label>
            <select class="form-control" id="dificult" name="dificult">
                <option value="">------------------</option>
                <option value="Baja">Baja</option>
                <option value="Baja-Media">Baja-Media</option>
                <option value="Media">Media</option>
                <option value="Media-Alta">Media-Alta</option>
                <option value="Alta">Alta</option>
            </select>
        </div>
        <div class="form-group flex-grow-1 mr-2">
            <label for="precio">Límite de precio:</label>
            <input type="number" name="precio" id="precio" class="form-control">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary" style="margin-top:32px; background-color:white; color:black;">Buscar</button>
        </div>
    </form>
</div>


    <div class="row"> 
        <?php
        // Conexión BBDD
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "escapesrooms";

        $conn = new mysqli($servername, $username, $password, $dbname);

        $favoritas = isset($_SESSION['favoritas']) ? $_SESSION['favoritas'] : array();

        if ($conn->connect_error) {
            die("Error en la conexión: " . $conn->connect_error);
        }

        $ubi = isset($_POST['ubi']) ? $_POST['ubi'] : 'Aragón';

        //Seleccionar todo de la tabla de la BBDD
        $sql = "SELECT * FROM escaperooms";
        if (!empty($ubi)) {
            $sql .= " WHERE ubi LIKE '%{$ubi}%'";
        }
        $result = $conn->query($sql);
        //Mientras que el resultado se muestra en formato de bloques
        while ($row = $result->fetch_assoc()) {
            echo '<div class="col-4">'; 
            echo '<div class="escape-room">';
            echo '<div class="card my-card">';
            echo '<div class="card-body">';
            echo '<h5 class="card-title">' . $row['sala'] . '</h5>';
            echo '<p class="card-text"><strong>Empresa:</strong> ' . $row['empresa'] . '</p>';
            echo '<p class="card-text"><strong>Ubicación:</strong> ' . $row['ubi'] . '</p>';
            echo '<p class="card-text"><strong>Dirección:</strong> ' . $row['direc'] . '</p>';
            echo '<p class="card-text"><strong>Género:</strong> ' . $row['genero'] . '</p>';
            echo '<p class="card-text"><strong>Número de Jugadores:</strong> ' . $row['num_jugadores'] . '</p>';
            echo '<p class="card-text"><strong>Tiempo:</strong> ' . $row['tiempo'] . '</p>';
            
            //Este if comprueba si la escaperoom tiene restriccion de
            if ($row['edadMin'] == '*' || $row['edadMin'] == '-') {
                echo '<p class="card-text"><strong>Edad Mínima: </strong> Sin restricción de edad';
            } else {
                echo '<p class="card-text"><strong>Edad Mínima: </strong> ' . $row['edadMin'] . '</p>';
            }
            
            //Este if comprueba si la escaperoom tiene disponible la nota
            if ($row['nota'] == '0') {
                echo '<p class="card-text"><strong>Nota: </strong> Nota no disponible' . '<br>';
            } else {
                echo '<p class="card-text"><strong>Nota: </strong> ' . $row['nota'] . '</p>';
            }

            //Este if comprueba si la escaperoom tiene pagina web
            if ($row['link'] == '*' || $row['link'] == '-') {
                echo '<a href="' . '404.php' . '" class="btn btn-primary">Reservar</a>';
            } else {
                echo '<a href="' . $row['link'] . '" class="btn btn-primary">Reservar</a>';
            }
            //Este if comprueba si la escaperoom tiene pagina web
            if ($row['link'] == '*') {
                echo '<a href="' . '404.php' . '" class="btn btn-primary">Reservar</a>';
            } else {
                echo '<a href="' . $row['link'] . '" class="btn btn-primary">Reservar</a>';
            }

            echo '</div>';
            echo '</div>';
            echo '</div>';
            echo '</div>';
        }

        // Cerrar la conexión a la BBDD
        $conn->close();
        ?>
    </div>
</div>



<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
</html>
