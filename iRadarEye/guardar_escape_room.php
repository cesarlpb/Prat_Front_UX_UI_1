<?php
// Conectar a la base de datos y realizar cualquier configuración necesaria
$servername = "localhost"; 
$username = "root";
$password = ""; 
$dbname = "escapesrooms"; 

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error al conectar a la base de datos: " . $conn->connect_error);
}

// Obtener los valores enviados por el formulario
$empresa = $_POST['empresa'] ?? "";
$sala = $_POST['sala'] ?? "";
$ubi = $_POST['ubi'] ?? "";
$direc = $_POST['direc'] ?? "";
$genero = $_POST['genero'] ?? "";
$num_jugadores = $_POST['num_jugadores'] ?? "";
$tiempo = $_POST['tiempo'] ?? "";
$dificult = $_POST['dificult'] ?? "";
$edadMin = $_POST['edadMin'] ?? "";
$precio = $_POST['precio'] ?? "";
$nota = $_POST['nota'] ?? "";
$link = $_POST['link'] ?? "";

// Verificar si la sala ya existe
$verificarSala = "SELECT COUNT(*) as count FROM escaperooms WHERE sala = '$sala'";
$resultado = $conn->query($verificarSala);
if ($resultado && $resultado->num_rows > 0) {
    $fila = $resultado->fetch_assoc();
    if ($fila['count'] > 0) {
        $mensaje = "Error: La sala '$sala' ya existe. Por favor, elige otro nombre.";
        $conn->close();
        echo $mensaje;
        exit; // Terminar la ejecución del script
    }
}

// Preparar la consulta SQL
$sql = "INSERT INTO escaperooms (empresa, sala, ubi, direc, genero, num_jugadores, tiempo, dificult, edadMin, precio, nota, link)
        VALUES ('$empresa', '$sala', '$ubi', '$direc', '$genero', '$num_jugadores', '$tiempo', '$dificult', '$edadMin', '$precio', '$nota', '$link')";

if ($conn->query($sql) === TRUE) {
    $mensaje = "Escape Room añadida correctamente!";
} else {
    $mensaje = "Error al añadir Escape Room: " . $conn->error;
}

$conn->close();

echo $mensaje;
?>
