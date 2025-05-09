<!DOCTYPE html>
<html>
    <head>
        <title>¡iRadarEye</title>
        <!-- Incluye los estilos de Bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>

    <!-- Menu-->
    <?php require 'header.php';?>


    <body>
        <!-- Incluye los scripts de Bootstrap -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        
            <!-- Cabecera -->
            <div class=".col-4 ms-auto "><a href="mapa.php"><button type="button" class="btn btn-primary btn-lg  mx-5" style="padding-left:100px; padding-right: 100px; box-shadow: 15px 13px 40px black; top:50px; top: 0; margin-top: 5%; position:fixed; ">Mapa</button></a>	</div> 
            <div class="container" style="margin-top: 150px; color:white;">
                    <h1 class="text-center"> Bienvenido a iRadarEye! Elige tu escape room favorita y nosotros te llevaremos</h1>
            </div>
            
            <!-- Contenedores donde estan las provincias -->
            <div class="container">
                <div class="text-center d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-lg mx-1 Barcelona"><a href="./boostrap/paginaBarcelona.php" style="color: #fff;">Barcelona</button></a>
                    <button type="button" class="btn btn-primary btn-lg mx-1 Madrid"><a href="./boostrap/paginaMadrid.php" style="color: #fff;">Madrid</button></a>
                    <button type="button" class="btn btn-primary btn-lg mx-1 Andalucia"><a href="./boostrap/paginaAndalucia.php" style="color: #fff;">Andalucia</button></a>
                </div>
                
                <div class="text-center mt-5 d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-lg mx-1 Valencia"><a href="./boostrap/paginaValencia.php" style="color: #fff;">Valencia</button></a>
                    <button type="button" class="btn btn-primary btn-lg mx-1 Aragon"><a href="./boostrap/paginaAragon.php" style="color: #fff;">Aragón</button></a>
                    <button type="button" class="btn btn-primary btn-lg mx-1 Asturias"><a href="./boostrap/paginaAsturias.php" style="color: #fff;">Asturias</button></a>
                    <button type="button" class="btn btn-primary btn-lg mx-1 Murcia"><a href="./boostrap/paginaMurcia.php" style="color: #fff;">Murcia</button></a>
                </div>        
            </div>

                        
        <?php require './sesion/footer.php';?>
        
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
       
        <style>

                body{
                    background-image:url(./img/radar.PNG);
                    background-position:center;
                    background-size:cover;
                    background-attachment: fixed;
                }

                .Barcelona {
                    padding: 120px;
                    margin: 150px; 
                    box-shadow: 15px 15px 40px black;
                    background-image:url(./img/barcelona.jpg);
                    background-position: center;
                    opacity: 0.8;

                }
                
                .Madrid{
                    padding: 120px;
                    margin: 150px; 
                    box-shadow: 15px 15px 40px black;
                    background-image:url(./img/madrid.jpg);
                    background-position: center;
                    opacity: 0.8;
                    
                }

                .Andalucia{
                    padding: 120px;
                    margin: 150px; 
                    box-shadow: 15px 15px 40px black;
                    background-image:url(./img/andalucia.PNG);
                    opacity: 0.8;
                }
                
                .Murcia{
                    padding: 120px;
                    margin: 150px; 
                    box-shadow: 15px 15px 40px black;
                    background-image:url(./img/murcia.webp);
                    background-position: center;
                    opacity: 0.8;
                }

                .Valencia{
                    padding: 120px;
                    margin: 150px; 
                    box-shadow: 15px 15px 40px black;
                    background-image:url(./img/valencia.jpg);
                    background-position: center;
                    opacity: 0.8;
                }

                .Aragon{
                    padding: 120px;
                    margin: 150px; 
                    box-shadow: 15px 15px 40px black;
                    background-image:url(./img/aragon.jpg);
                    background-position: center;
                    opacity: 0.8;
                }

                .Asturias{
                    padding: 120px;
                    margin: 150px; 
                    box-shadow: 15px 15px 40px black;
                    cursor: pointer;
                    background-image:url(./img/asturias.jpg);
                    background-position: center;
                    opacity: 0.8;

                }

                .card-container {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 50px;
                    }

                .card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    background-color: #0077b6;
                    text-decoration: none;
                    color: #fff;
                    font-size: 16px;
                    font-weight: bold;
                    transition: all 0.3s ease-in-out;
                }

                .card:hover {
                    transform: scale(1.1);
                }

                .card-icon {
                    margin-bottom: 10px;
                }

                .card-title {
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 70px;
                }

                .carousel-container {
                width: 500px; 
                height: 500px; 
                }

                .carousel-container img {
                width: 100%;
                height: 100%;
                object-fit: contain; 
                }


        </style>
    </body>
</html>