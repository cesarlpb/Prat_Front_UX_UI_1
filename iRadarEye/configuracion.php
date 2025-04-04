<!DOCTYPE html>
<html>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<head>
    <title>Añadir Escape Room</title>
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            background-image: url(./img/radar.PNG);
            background-position: center;
            background-size: cover;
            background-attachment: fixed;
        }
        
        h2 {
            color: black;
        }
        
        .form-container {
            max-width: 500px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            margin-top: 5%;
            
        }
        
        .form-container label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
            top:10px;
        }
        
        .form-container input[type="text"],
        .form-container input[type="number"],
        .form-container select {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        
        .form-container input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        
        .form-container input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<?php require 'header.php';?>
<body>
    <!-- Incluye los scripts de Bootstrap -->
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <div class="form-container">
        <h2>Añadir Escape Room</h2>
        <form action="guardar_escape_room.php" method="POST">
            <label for="empresa">Empresa:</label>
            <input type="text" name="empresa" required>
            <label for="sala">Sala:</label>
            <input type="text" name="sala" required>
            <label for="ubi">Ubicación:</label>
            <input type="text" name="ubi" required>
            <label for="direc">Dirección:</label>
            <input type="text" name="direc" required>
            <label for="genero">Género:</label>
            <select name="genero" required>
                <option value="">Selecciona un género</option>
                <option value="terror">Terror</option>
                <option value="ciencia_ficcion">Ciencia Ficción</option>
                <option value="accion">Acción</option>
                <option value="aventura">Aventura</option>
                <option value="misterio">Misterio</option>
                <option value="fantasia">Fantasía</option>
                <option value="infantil">Infantil</option>
            </select>
            <label for="num_jugadores">Número de jugadores:</label>
            <input type="number" name="num_jugadores" required min="0">
            <label for="tiempo">Tiempo:</label>
            <input type="number" name="tiempo" required min="0">
            <label for="dificult">Dificultad:</label>
            <select name="dificult" required>
                <option value="">Selecciona una dificultad</option>
                <option value="baja">Baja</option>
                <option value="baja-media">Baja-Media</option>
                <option value="media">Media</option>
                <option value="media-alta">Media-Alta</option>
                <option value="alta">Alta</option>
            </select>
            <label for="edadMin">Edad mínima:</label>
            <input type="number" name="edadMin" required min="0">
            <label for="nota">Nota:</label>
            <input type="number" name="nota" step="0.1" required min="0">
            <label for="precio">Precio:</label>
            <input type="number" name="precio" required min="0">
            <label for="link">Link a la página web:</label>
            <input type="text" name="link" required>
            <input type="submit" value="Guardar">
        </form>
    </div>
</body>

</html>

