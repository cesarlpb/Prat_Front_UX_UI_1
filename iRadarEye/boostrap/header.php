<?php
session_start();

if (isset($_SESSION['usuario'])) {
    include __DIR__ . '/menu2.php';
} else {
    include __DIR__ . '/menu.php';
}

?>
