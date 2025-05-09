<?php
// Establecer la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "escapesrooms";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("La conexión a la base de datos ha fallado: " . mysqli_connect_error());
}

// Realizar la consulta SQL para obtener los datos necesarios
$sql = "SELECT ubi, direc FROM escaperooms";
$result = mysqli_query($conn, $sql);

// Obtener los resultados de la consulta en un array
$escaperooms = array();
if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
    $escaperooms[] = $row;
  }
}

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Mapa de Google con marcadores de Escape Rooms y Direcciones</title>
    <style>
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }

      #map {
        height: 100%;
        width: 100%;
      }

      #directionsPanel {
        height: 80%;
        overflow: auto; 
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        width: 300px;
        position: absolute;
        top: 20%;
        z-index: 1;
        left: 10px;
      }

      #startButton {
        padding: 8px 16px;
        background-color: #4CAF50;
        color: #fff;
        border: none;
        cursor: pointer;
        margin-top: 10px;
        display: none;
      }

      #searchForm {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      }

      #searchForm label {
        display: block;
        margin-bottom: 5px;
      }

      #searchForm input[type="text"],
      #searchForm select {
        width: 200px;
        padding: 5px;
      }

      #searchForm button {
        padding: 8px 16px;
        background-color: #4CAF50;
        color: #fff;
        border: none;
        cursor: pointer;
      }

      #searchForm button:hover {
        background-color: #45a049;
      }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDj6rhDGBxkmkH7q8BMTHvIfQyG9-_WIHY"></script>
    <script>
      var directionsService;
      var directionsRenderer;

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: 40.463667, lng: -3.74922} // Por ejemplo, Madrid
        });

        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(document.getElementById('directionsPanel'));

        var searchForm = document.getElementById('searchForm');
        searchForm.addEventListener('submit', function(event) {
          event.preventDefault();

          var fromAddress = document.getElementById('fromAddress').value;
          var escapeRoomSelect = document.getElementById('escapeRoom');
          var selectedEscapeRoom = escapeRoomSelect.value;

          var selectedEscapeRoomData = <?php echo json_encode($escaperooms); ?>.find(function(escaperoom) {
            return escaperoom.direc === selectedEscapeRoom;
          });

          if (selectedEscapeRoomData) {
            calculateDirections(map, fromAddress, selectedEscapeRoomData.direc);
          }
        });

        // Obtener los datos de la base de datos
        var escaperooms = <?php echo json_encode($escaperooms); ?>;

        // Crear un marcador por cada Escape Room
        escaperooms.forEach(function(escaperoom) {
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({address: escaperoom.direc}, function(results, status) {
            if (status === 'OK') {
              var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: escaperoom.direc
              });

              var infowindow = new google.maps.InfoWindow({
                content: escaperoom.ubi
              });

              marker.addListener('click', function() {
                infowindow.open(map, marker);
              });
            }
          });
        });
      }

      function calculateDirections(map, fromAddress, toAddress) {
        var request = {
          origin: fromAddress,
          destination: toAddress,
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            console.error('No se pudieron calcular las direcciones debido a: ' + status);
          }
        });
      }
    </script>
  </head>
  <body onload="initMap()">
    <div id="searchForm">
      <form>
        <label for="fromAddress">Dirección de origen:</label>
        <input type="text" id="fromAddress" required>

        <label for="escapeRoom">Escape Room:</label>
        <select id="escapeRoom">
          <?php
          foreach ($escaperooms as $escaperoom) {
            echo '<option value="' . $escaperoom['direc'] . '">' . $escaperoom['direc'] . '</option>';
          }
          ?>
        </select>

        <button type="submit">Buscar</button>
      </form>
    </div>

    <div id="directionsPanel"></div>
    <div id="map"></div>
  </body>
</html>
