<!DOCTYPE html>
<html>
<head>
<title>iRadarEye</title>

    <!-- Incluye los estilos de Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
    <!-- CSS del buscador y del fondo (imagen de fondo incluida) -->

<style>
body {
  background-image: url(../img/radar.PNG);
  background-size: cover;
  background-attachment: fixed;
}

table {
    border-collapse: collapse;
    width: 50%;
    margin-bottom: 1em;
    margin: 0 auto;
    background-position:center; 
    background-color:white;
    top: 25%;
}

table, th, td {
    border: 1px solid black;
    margin:gray;
    
}

th {
    background-color: lightgreen;
    color: black;
    text-align: left;
    
}

th, td {
    padding: 0.5em;
    
}

h1{
    color:white;
}

</style>

<?php
// Conexión a la BBDD
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "escapesrooms";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Comprobar la conexión
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}
// Variable limite de precio del buscador
$limitePrecio = isset($_GET['precio']) ? $_GET['precio'] : null;

// Variables definidas en blanco para que el resultado de la busqueda se imprima en los huecos vacios de la tabla
$search = "";
$id_escape = "";
$empresa = "";
$sala = "";
$ubi = "";
$direc = "";
$genero = "";
$num_jugadores = "";
$tiempo = "";
$dificult = "";
$edadMin = "";
$precio = "";

// Mostrar el resultado del buscador en la tabla
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST["search"])) {
        $search = mysqli_real_escape_string($conn, $_POST["search"]);
    }
    if (!empty($_POST["id_escape"])) {
        $id_escape = mysqli_real_escape_string($conn, $_POST["id_escape"]);
    }
    if (!empty($_POST["empresa"])) {
        $empresa = mysqli_real_escape_string($conn, $_POST["empresa"]);
    }
    if (!empty($_POST["sala"])) {
        $sala = mysqli_real_escape_string($conn, $_POST["sala"]);
    }
    if (!empty($_POST["ubi"])) {
        $ubi = mysqli_real_escape_string($conn, $_POST["ubi"]);
    }
    if (!empty($_POST["direc"])) {
        $direc = mysqli_real_escape_string($conn, $_POST["direc"]);
    }
    if (!empty($_POST["genero"])) {
        $genero = mysqli_real_escape_string($conn, $_POST["genero"]);
    }
    if (!empty($_POST["num_jugadores"])) {
        $num_jugadores = mysqli_real_escape_string($conn, $_POST["num_jugadores"]);
    }
    if (!empty($_POST["tiempo"])) {
        $tiempo = mysqli_real_escape_string($conn, $_POST["tiempo"]);
    }
    if (!empty($_POST["dificult"])) {
        $dificult = mysqli_real_escape_string($conn, $_POST["dificult"]);
    }
    if (!empty($_POST["edadMin"])) {
        $edadMin = mysqli_real_escape_string($conn, $_POST["edadMin"]);
    }
    if (!empty($_POST["precio"])) {
        $precio = mysqli_real_escape_string($conn, $_POST["precio"]);
    }
}
/// Consulta a la base de datos
$query = "SELECT * FROM escaperooms WHERE 
            id_escape LIKE '%$id_escape%' AND 
            empresa LIKE '%$empresa%' AND 
            sala LIKE '%$sala%' AND 
            ubi LIKE '%$ubi%' AND 
            direc LIKE '%$direc%' AND 
            genero LIKE '%$genero%' AND 
            num_jugadores LIKE '%$num_jugadores%' AND 
            tiempo LIKE '%$tiempo%' AND 
            dificult = '$dificult' AND
            edadMin LIKE '%$edadMin%' AND 
            precio LIKE '%$precio%'";
if (!empty($search)) {
    $query .= " AND (
            id_escape LIKE '%$search%' OR 
            empresa LIKE '%$search%' OR 
            sala LIKE '%$search%' OR
            ubi LIKE '%$search%' OR
            direc LIKE '%$search%' OR
            genero LIKE '%$search%' OR
            num_jugadores LIKE '%$search%' OR
            tiempo LIKE '%$search%' OR
            dificult LIKE '%$search%' OR
            edadMin LIKE '%$search%' OR
            precio LIKE '%$search%')";
}

//Consulta de solo los precios de la base de datos
$sql = "SELECT precio FROM escaperooms";
if (!empty($limitePrecio)) {
    $sql .= " WHERE precio <= " . $limitePrecio;
}
//Resultado de la variable que se imprimira de la query y de si hay conexión en la base de datos
$result = mysqli_query($conn, $query);

echo "<table>
        <tr>
            <th>ID Escape</th>
            <th>Empresa</th>
            <th>Sala</th>
            <th>Ubicación</th>
            <th>Dirección</th>
            <th>Género</th>
            <th>Número de Jugadores</th>
            <th>Tiempo</th>
            <th>Dificultad</th>
            <th>Edad mínima</th>
            <th>Link</th>
            <th>Precio</th>
            </tr>";
            
// Verificar si la consulta se ha echo bien y si hay resultados
if ($result !== false && mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
        <td>" . $row["id_escape"] . "</td>
        <td>" . $row["empresa"] . "</td>
        <td>" . $row["sala"] . "</td>
        <td>" . $row["ubi"] . "</td>
        <td>" . $row["direc"] . "</td>
        <td>" . $row["genero"] . "</td>
        <td>" . $row["num_jugadores"] . "</td>
        <td>" . $row["tiempo"] . "</td>
        <td>" . $row["dificult"] . "</td>
        <td>" . $row["edadMin"] . "</td>
        <td><a href='" . $row["link"] . "'>" . $row["link"] . "</a> </td>
        <td>" . $row["precio"] . "</td> 
        </tr>";
    }
} else {
    echo "<tr><td colspan='12'>No se encontraron resultados.</td></tr>";
}
echo "</table>";
// Cerrar la conexión a la base de datos
mysqli_close($conn);
        ?> 

</body>
</html>