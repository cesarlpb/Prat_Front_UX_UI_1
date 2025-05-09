<?php
if(isset($_FILES['fotoPerfil'])) {
  $nombreArchivo = $_FILES['fotoPerfil']['name'];
  $tipoArchivo = $_FILES['fotoPerfil']['type'];
  $tamanoArchivo = $_FILES['fotoPerfil']['size'];
  $rutaTemporal = $_FILES['fotoPerfil']['tmp_name'];

  // Directorio de destino para guardar la imagen
  $directorioDestino = "imgUsuarios/";

  // Generar un nombre único para el archivo
  $nombreUnico = uniqid() . '_' . $nombreArchivo;

  // Ruta completa del archivo en el directorio de destino
  $rutaDestino = $directorioDestino . $nombreUnico;

  // Mover el archivo de la ruta temporal al directorio de destino
  if(move_uploaded_file($rutaTemporal, $rutaDestino)) {
    // La imagen se ha cargado y guardado correctamente
    // Aquí puedes realizar otras acciones, como guardar la ruta en la base de datos
    echo "Imagen cargada correctamente.";
  } else {
    // Error al cargar y guardar la imagen
    echo "Error al cargar la imagen.";
  }
} else {
  // No se ha seleccionado ninguna imagen para cargar
  echo "No se ha seleccionado ninguna imagen.";
}
?>
