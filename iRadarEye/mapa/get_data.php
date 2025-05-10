<?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "escapesrooms";

  // Se crea la conexión a la base de datos
  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Se prepara la consulta SQL utilizando sentencias preparadas
  $stmt = $conn->prepare("SELECT direc FROM escaperooms");
  $stmt->execute();
  $result = $stmt->get_result();
  $data = array();
  if ($result->num_rows > 0) {
    // Se añade cada fila de la base de datos al arreglo de datos
    while($row = $result->fetch_assoc()) {
      $data[] = $row["direc"];
    }
  }
  
  // Se cierra la conexión a la base de datos
  $conn->close();

  // Se devuelve los datos en formato JSON
  header('Content-Type: application/json');
  echo json_encode($data);
?>
