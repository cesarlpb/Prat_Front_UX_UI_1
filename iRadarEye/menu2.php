<header>
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="index.php">
            <img src="img/iRadarEye_logo.png" alt="Logo de iRadarEye" width="50">
        </a>
        <ul class="d-flex" style="list-style: none;">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hola, <?php echo $_SESSION['usuario']; ?>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="./sesion/perfil.php">Mi perfil</a></li>
                    <li><a class="dropdown-item" href="configuracion.php">+Añadir escape</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="./sesion/logout.php">Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
