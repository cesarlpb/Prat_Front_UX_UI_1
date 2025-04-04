-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-05-2023 a las 03:51:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `escapesrooms`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escaperooms`
--

CREATE TABLE `escaperooms` (
  `id_escape` int(3) NOT NULL,
  `empresa` varchar(50) NOT NULL,
  `sala` varchar(50) NOT NULL,
  `ubi` varchar(255) NOT NULL,
  `direc` varchar(255) NOT NULL,
  `genero` varchar(10) NOT NULL,
  `num_jugadores` varchar(25) NOT NULL,
  `tiempo` int(11) NOT NULL,
  `dificult` varchar(25) NOT NULL,
  `edadMin` varchar(25) NOT NULL,
  `nota` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `precio` varchar(25) NOT NULL,
  `escaperoomsGanadas` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `escaperooms`
--

INSERT INTO `escaperooms` (`id_escape`, `empresa`, `sala`, `ubi`, `direc`, `genero`, `num_jugadores`, `tiempo`, `dificult`, `edadMin`, `nota`, `link`, `precio`, `escaperoomsGanadas`) VALUES
(1, 'Mayto Kingdom', 'Tú También Soñaras', 'Vitoria, Pais Vasco', 'Calle Barratxi 37A, Pabellon, 20, Vitoria-Gasteiz', 'Terror', '2 - 6 jugadores', 120, 'Media', '16 años', 10, 'https://maytokingdom.es/tu-tambien-sonaras/', '120 - 210€', 0),
(2, 'Mayto Kingdom', 'La cámara del espíritu y el tiempo', 'Vitoria, Pais Vasco', 'Calle Barratxi 37A, Pabellon, 20, Vitoria-Gasteiz', 'Aventura-A', '2 - 5 jugadores', 80, 'Media', '8 años', 10, 'https://maytokingdom.es/la-camara-del-espiritu-y-el-tiempo/', '100 - 170€', 0),
(3, 'Escape Barcelona', 'CyberCity 2049', 'Santa Coloma de Gramanet, Barcelona', 'Calle Francisco Moragas, 18, Santa Coloma de Gramenet', 'Ciencia Fi', '2 - 6 jugadores', 90, 'Media', '12 años', 9, 'https://www.escapebarcelona.com/cybercity-2049.php', '100 - 150€', 0),
(4, 'Insomnia', 'La Casa', 'Berga, Barcelona', 'Gran Via 1, Berga', 'Terror', '4 - 6 jugadores', 70, 'Media-Alta', '18 años', 9, 'https://www.gibaescape.com/opiniones-escape-rooms/insomnia-la-casa', '100 - 150€', 0),
(5, 'Krematorium', 'Malum', 'Hospitalet de Llobregat, Barcelona', 'Ctra. del Mig, 92', 'Terror', '3 - 6 jugadores', 70, 'Media', '-', 10, 'https://www.gibaescape.com/opiniones-escape-rooms/opinion-krematorium-malum', '99 - 150€', 0),
(6, 'Silent Town', 'Colegio Midwich', 'Basauri, País Vasco', 'Calle Foruak, 6', 'Terror', '2 - 6 jugadores', 120, 'Media', '16 años', 10, 'https://www.gibaescape.com/opiniones-escape-rooms/opinion-silent-town-colegio-midwich', '90 - 200€', 0),
(7, 'Arcanum', 'La Posesión', 'Sant Sadurní de Anoia', 'Passeig de Can Ferrer del Mas, 24', 'Terror', '2 - 6 jugadores', 80, 'Media-Alta', '16 años', 9, 'https://www.arcanum.es/', '75 - 145€', 0),
(8, 'Mythos', 'Expedición Maldita', 'La Fama, Murcia', 'Av. de la Libertad, 1', 'Aventura', '2 - 6 jugadores', 75, 'Media-Alta', '-', 10, 'https://mythosmurcia.es/', '60 - 96€', 0),
(9, 'Golden Pop', 'Pesadillas', 'Barcelona, Barcelona', 'Carrer de Girona, 7', 'Terror', '2 - 6 jugadores', 90, 'Media', '18 años', 8, 'https://goldenpop.es/juegos/pesadillas/', '100 - 150€', 0),
(10, 'Outline Escape Room', 'Outline', 'Cornellà del Llobregat, Barcelona', 'Av. del Parc de Can Mercader 5', 'Terror', '3 - 8 jugadores', 120, 'Media-Alta', '15 años', 10, 'https://outlineescaperoom.es/', '100 - 200€', 0),
(11, 'WhiteChapel', 'La historia de Charlotte', 'Barcelona, Barcelona', 'Carrer de les Acacies, 23 - 25', 'Terror', '2 - 6 jugadores', 75, 'Media-Alta', '16 años', 8, 'https://www.roomwhitechapel.com/', '80 - 132€', 0),
(12, 'Escape Barcelona', 'Tomb Hunter : La Leyenda de Akasha', 'Santa Coloma de Gramanet, Barcelona', 'Carrer Baró 17', 'Aventura', '2 - 6 jugadores', 90, 'Media', '16 años', 9, 'https://www.escapebarcelona.com/tomb-hunter-la-leyenda-de-akasha.php', '100 - 120€', 0),
(13, 'Escape Barcelona', 'Alien, el origen', 'Santa Coloma de Gramanet, Barcelona', 'Carrer Baró 17', 'Aventura, ', '4 - 10 jugadores', 90, 'Media', '16 años', 9, 'https://www.escapebarcelona.com/alien-el-origen.php', '100 - 120€', 0),
(14, 'Overtime', 'Call or Die', 'Pamplona, Navarra', 'Carrer Arbizu 17', 'Acción', '3 - 5 jugadores', 85, 'Media', '16 años', 9, 'https://overtimepamplona.es/juegos-de-escape/', '90 - 110€', 0),
(15, 'Willy el tuerto', 'Willy el tuerto', 'Sabadell, Barcelona', 'Carrer Poeta Folguera 13', 'Aventura', '2 - 6 jugadores', 80, 'Media', '10 años', 9, 'https://willyeltuertoescaperoom.com/reservar/', '90 - 140€', 0),
(16, 'Cindy box', 'Blasphemia', 'Sant Frutos de Bages', 'Carrer Padro  27', 'Terror', '4 - 6 jugadores', 100, 'Media', '18 años', 9, 'https://cindyescapebox.com/reservar', '100 - 150€', 0),
(17, 'Distrito 7', 'Noche de perros', 'Navarra, Pamplona', 'C. Bernardino Tirapu, 31, bajo, 31014 Pamplona, Navarra', 'Aventura', '2 - 5 jugadores', 90, 'Media', '16 años', 10, 'https://distrito7.es/noche-de-perros/', '65 - 100€', 0),
(18, 'Dragonborn', 'El hijo del posadero', 'Vitoria, País Vasco', 'Calle, Pintor Jesus Apellaniz Kalea, 5, bajo, 01008 Vitoria-Gasteiz, Álava', 'Aventura', '2 - 6 jugadores', 90, 'Media', '10 años', 10, 'https://dragonbornvitoria.es/', '80 - 150€', 0),
(19, 'La Abadía perdida', 'La Abadía perdida', 'La Rioja', 'C. Duquesa de la Victoria, 55, bajo, 26004 Logroño, La Rioja', 'Aventura', '2 - 5 jugadores', 60, 'Media', '10 años', 10, 'https://laabadiaperdidaescaperoom.com/', '60 - 100€', 0),
(20, 'Overtime', 'Misión 1: 101 años de per', 'Navarra, Pamplona', 'C. Arbizu, 17, 31014 Pamplona, Navarra', 'Acción', '2 - 5 jugadores', 70, 'Media', '16 años', 10, 'https://overtimepamplona.es/', '70 - 110€', 0),
(21, 'Overtime', 'Misión 1: 101 años de per', 'Navarra, Pamplona', 'C. Arbizu, 17, 31014 Pamplona, Navarra', 'Acción', '2 - 5 jugadores', 70, 'Media', '16 años', 10, 'https://overtimepamplona.es/', '70 - 110€', 0),
(22, 'Katharsis', 'La hora de las bestias', 'Mataró, Barcelona', 'Av. Amèrica, 14, 08304 Mataró, Barcelona', 'Misterio', '2 - 7 jugadores', 80, 'Media', '12 años', 10, 'https://katharsisroomescape.es/', '78 - 154€', 0),
(23, 'Vortex', 'Apophis', 'Terrassa, Barcelona', 'Carrer Alexander Bell, 72, 08224 Terrassa, Barcelona', 'Ciencia Fi', '2 - 7 jugadores', 90, 'Media-Alta', '18 años', 10, 'https://vortexescape.com/', '66 - 126€', 0),
(24, 'Profana', 'Profana', 'Granollers, Barcelona', 'Carrer Jules Verne, 12, 08402, Granollers', 'Terror Mis', '2 - 6 jugadores', 90, 'Media', '14 años', 8, 'https://profanaescaperoom.com/', '70 - 150€', 0),
(25, 'Virus room escape', 'Tao', 'Calella, Barcelona', 'Carrer de Sant Jaume, 434, 08370, Calella', 'Investigac', '2 - 7 jugadores', 90, 'Media-Alta', '6 años', 9, 'https://virusroomescape.com/juegos/tao-japanese-massage-center/', '70 - 161€', 0),
(26, 'Unreal', 'Distrito 111', 'Barcelona, Barcelona', 'Carrer de Bac de Roda, 186, 08020 Barcelona', 'Aventura', '2 - 7 jugadores', 90, 'Media', '12 años', 8, 'https://unrealroomescape.es/santmarti/', '60 - 160 €', 0),
(27, 'Synegro', 'Cazadores de brujas', 'Sant Boi, Barcelona', 'Carrer de Didac Priu, 40, 08830, Sant Boi de Llobregat', 'Aventura', '2 - 6 jugadores', 80, 'Media', '14 años', 8, 'http://www.synergoescaperoom.es/historia/index.html#calendario', '70 - 120€', 0),
(28, 'Secret hunter', 'Km 18', 'Alicante, Alicante', 'Victor de la Serna 26, 03006 , Alicante', 'Misterio', '2 - 8 jugadores', 70, 'Media', '14 años', 9, 'https://secrethunter.es/km18/', '66 - 128€', 0),
(29, 'Codexcape', 'Paranoia', 'Valencia, Valencia', 'Calle Lladro y Malli 8, bajo D4, 46007, Valencia', 'Terror', '2 - 6 jugadores', 75, 'Media', '16 años', 9, 'https://www.codexcape.net/reservar-online', '60 - 102€', 0),
(30, 'Enigmik', 'La cerveseria', 'Barcelona, Barcelona', 'Rossello, 508, 08026, Barcelona', 'Aventura-I', '3 - 6 jugadores', 80, 'Media-Alta', '14 años', 9, 'https://www.enigmik.com/la-cerveceria-escape-room/', '90 - 120€', 0),
(31, 'SKP Valencia', 'El loco del callejon', 'Valencia, Valencia', 'Guillem de Castro 123, 46008, Valencia', 'Misterio', '2 - 8 jugadores', 120, '-', '-', 0, 'https://skproom.com/', '50 - 168€', 0),
(32, 'Conecta escape', 'Atrincherados', 'Cerdañola, Barcelona', 'Carrer de la Lluna, 46, 08290, Cerdanyola del Valles', 'Acción', '2 - 6 jugadores', 90, 'Media', '14 años', 8, 'https://www.elementsescaperoom.com/atrincherados/', '80 - 120€', 0),
(33, 'Abduction 3', 'The exam', 'Badalona, Bercelona', 'Avinguda de Bac de Roda, 28, Badalona', 'Acción-Ave', '2 - 6 jugadores', 60, 'Media', '12 años', 9, 'https://www.abduction.es/badalona/abduction3', '85 - 115€', 0),
(34, 'Hangar 18', 'Misión nostromo', 'Gijón, Asturias', 'Poligono industrial de Roces, 3, Gijon', 'Ciencia Fi', '2 - 7 jugadores', 70, 'Media', '16 años', 9, 'https://hangar18.es/reservas-nostromo', '70 - 140€', 0),
(35, 'Abduction 2', 'El orfanato', 'Badalona, Barcelona', 'Avinguda de Bac de Roda, 28, Badalona', 'Terror', '2 - 7 jugadores', 60, 'Media', '18 años', 8, 'https://www.abduction.es/badalona/abduction2', '80 - 125€', 0),
(36, 'Secret Box', 'Cazafantasmas (the myesterious room)', 'Mataró, Barcelona', 'Mossen Jacint Verdaguer, 69, Mataró', 'Misterio', '3 - 5 jugadores', 60, 'Media', '10 años', 8, '*', '80 - 100€', 0),
(37, 'Cubick 3', 'Nathael', 'Mataró, Barcelona', 'Carrer de la Cooperativa, 77, Mataró', 'Terror', '2 - 6 jugadores', 90, 'Media-Alta', '16 años', 8, 'https://cubickroomescape.es/mataro/reservas/', '98 - 150€', 0),
(38, 'Unreal', 'Vikingos', 'Gavà, Barcelona', 'Carrer de Tresols, 33, 08850 Gavà, Barcelona', 'Aventura', '2 - 7 jugadores', 90, 'Media', '5 años', 8, 'https://unrealroomescape.es/gava/#reservas', '68 - 140€', 0),
(39, 'Red Dopamine', 'Awaken', 'Barcelona, Barcelona', 'Carrer Alcalá de Guadaira, 20, 08020 Barcelona', 'Terror', '2 - 7 jugadores', 80, 'Alta', '16 años', 8, 'https://www.thenextdoor.es/#reservar', '80 - 175€', 0),
(40, 'Misterios de Kemet', 'Misterios de Kemet', 'Esplugues, Barcelona', 'Serra del montsec, 22, Esplugues de Llobregat', 'Aventura-I', '2 - 6 jugadores', 80, 'Media-Alta', '8 años', 9, '*', '72 - 126€', 0),
(41, 'Factoría escape room', 'Golpe perfecto en el jard', 'Valencia, Valencia', 'Av. de Valladolid, 2, Bj, 46020 Valencia', 'Aventura', '2 - 7 jugadores', 90, 'Media', '16 años', 0, 'https://factoriaescaperoom.com/reserva-golpe-perfecto-en-el-jardin-de-buda/', '60 - 110€', 0),
(42, 'Locked zgz', 'Ritual', 'Zaragoza, Aragón', 'C. de Alberto Duce, 15, 50018 Zaragoza', 'Terror', '3 - 8 jugadores', 80, 'Media', '18 años', 0, 'https://www.lockedzgz.com/', '84 - 152€', 0),
(43, 'Portento', 'Olimpo', 'Badalona, Barcelona', 'Carrer de la Muntanya, 31, Badalona', 'Aventura', '2 - 8 jugadores', 100, 'Media', '8 años', 9, 'http://olimpoescaperoom.com/reservar/', '80 - 160€', 0),
(44, 'Final code escape rooms', 'Bermudas, el secreto jamás revelado', 'Hospitalet del Llobregat, Barcelona', 'Carrer de Uva, 21, Hospitalet de Llobregat', 'Investigac', '2 - 6 jugadores', 90, 'Media', '10 años', 8, 'https://www.finalcodeescaperoom.com/services/bermudas-el-secreto-jamas-revelado/', '70 - 120€', 0),
(45, 'Neverland', 'Conquista de troya', 'Barcelona, Barcelona', 'Passeig Santa Coloma, 106 Bajos, Barcelona', 'Aventura', '2 - 6 jugadores', 70, 'Media', '8 años', 8, 'https://neverlandescape.com/reserva/', '64 - 126€', 0),
(46, 'Encrypt', 'Mindhunters', 'Barcelona, Barcelona', 'Carrer del Moianes, 20, Barcelona', 'Terror', '2 - 6 jugadores', 70, 'Media-Alta', '16 años', 8, 'https://www.encryptroom.com/reservas/', '75 - 114€', 0),
(47, 'Brutal escape room Cornel', 'Hotel Hello', 'Cornellà, Barcelona', 'Carrer Pare Marchena, 3, Cornellà de Llobregat', 'Terror-Mis', '2 - 7 jugadores', 100, 'Media', '7 años', 9, 'https://brutalescaperoom.com/es/cornella/juegos/hotel-hello-barcelona', '75 - 114€', 0),
(48, 'Castlemaniac', 'La hermandad de las sombras', 'Zaragoza, Aragón', 'Avenida Rio Ebro, 49, Cuarte de Huerva', 'Misterio', '2 - 6 jugadores', 60, 'Media', '12 años', 0, 'https://www.castlemaniac.es/', '90 - 150€', 0),
(49, 'Inmortal Room', 'El diamante de almas', 'Montcada i Reixac, Barcelona', 'Carrer Can Castells, 43, Montcada i Reixac', 'Terror-Mis', '2 - 6 jugadores', 80, 'Media', '16 años', 8, 'https://www.inmortalroom.com/reservas/', '80 - 120€', 0),
(50, 'Golden pop', 'Catacumbas', 'Barcelona, Barcelona', 'Carrer de Girona, 7, Barcelona', 'Aventura', '2 - 10 jugadores', 90, 'Media', '12 años', 8, 'https://goldenpop.es/juegos/catacumbas/#reservar', '100 - 250€', 0),
(51, 'Unreal', 'The narcos', 'Hospitlet del Llobregat, Barcelona', 'Bacardi, 32, Hospitalet de Llobregat', 'Acción-Ave', '2 - 7 jugadores', 90, 'Media', '5 años', 9, 'https://unrealroomescape.es/hospitalet/', '68 - 126€', 0),
(52, '123 Action Barcelona', 'SWAT Countdown', 'Barcelona, Barcelona', 'Plaça Catalunya, Barcelona', 'Acción', '2 - 8 jugadores', 90, 'Media', '18 años', 8, 'https://123actionbarcelona.com/escapeexterior/', '40 - 160€', 0),
(53, 'Unreal', 'Worm', 'Esplugues, Barcelona', 'Av. Cornella, 17, Esplugues de Llobregat', 'Aventura-C', '2 - 7 jugadores', 90, 'Media', '5 años', 9, 'https://unrealroomescape.es/esplugues/#reservas', '68 - 126€', 0),
(54, 'Unreal', 'Las maravillas de Agrabah', 'Barcelona, Barcelona', 'Calle Petrarca, 34, Barcelona', 'Fantasía', '2 - 7 jugadores', 90, 'Media', '5 años', 9, 'https://unrealroomescape.es/vilapicina/', '76 - 140€', 0),
(55, 'Kenos', 'Kenos', 'Les Fonts, Terrassa', 'Passeig Lola Anglada, 2 (local 3)', 'Terror', '2 - 6 jugadores', 90, 'Media', '16 años', 10, 'https://kenosescaperoom.com/', '60 - 120€', 0),
(56, 'The Wods', 'Slasher Party', 'Barcelona, Barcelona', 'Carrer Diputació 152', 'Investigac', '2 - 6 jugadores', 60, 'Ninguna', '*', 0, 'https://thewoodsescaperoom.com/reservas/', '68 - 180€', 0),
(57, 'Addams House', 'La Fortuna de los Addams', 'Barcelona, Barcelona', 'Carrer de Castellbell, 24', 'Aventura-M', '2 - 6 jugadores', 80, 'Media', '12 años', 8, 'http://www.addamshouseescape.com/la-fortuna-de-los-addams/', '80 - 108€', 0),
(58, 'Horror Box', 'Ouija 2.0', 'Barcelona', 'Passatge de Roura 25', 'Terror', '2 - 6 jugadores', 60, 'Media-Alta', '13 años', 9, 'https://www.horrorbox.es/producto/ouija-escape-room/', '80 - 120€', 0),
(59, 'La Clau', 'Until Dawn', 'Manresa, Barcelona', 'Passatge vilaseca i garriga, K-J', 'Terror', '2 - 6 jugadores', 70, 'Media', '18 años', 9, 'https://www.laclauroomescape.com/reservar/', '80 - 120€', 0),
(60, 'Yurmuvi', 'La novia de Frankenstein', 'Gijón, Asturias', 'Calle Decano Prendes Pando, 23', 'Misterio', '2 - 6 jugadores', 60, 'Media', '15 años', 8, 'http://www.yurmuvi.com/la-novia-de-frankenstein-escape-room-gijon', '70 - 90€', 0),
(62, 'Neverland', 'Conquista de Troya', 'Barcelona', 'Passeig Santa Coloma, 106 Bajos, Barcelona', 'Aventura', '2 - 6 jugadores', 70, 'Media', '8 años', 8, 'https://neverlandescape.com/reserva/', '64 - 126€', 0),
(63, 'Encrypt', 'Mindhunters', 'Barcelona', 'Carrer del Moianes, 20, Barcelona', 'Terror', '2 - 6 jugadores', 70, 'Media-Alta', '16 años', 8, 'https://www.encryptroom.com/reservas/', '75 - 114€', 0),
(64, 'Brutal escape room cornel', 'Hotel Hello', 'Cornellà', 'Pare Marchena, 3, Cornella de Llobregat', 'Terror-Mis', '2 - 7 jugadores', 100, 'Media', '7 años', 9, 'https://brutalescaperoom.com/es/cornella/juegos/hotel-hello-barcelona', '75 - 114€', 0),
(65, 'Castlemaniac', 'La hermandad de las sombr', 'Zaragoza', 'Avenida Rio Ebro, 49, Cuarte de Huerva', 'Misterio', '2 - 6 jugadores', 60, 'Media', '12 años', 0, 'https://www.castlemaniac.es/', '90 - 150€', 0),
(66, 'Inmortal Room', 'El diamante de almas', 'Montcada i Reixac', 'Carrer Can Castells, 43, Montcada i Reixac', 'Terror-Mis', '2 - 6 jugadores', 80, 'Media', '16 años', 8, 'https://www.inmortalroom.com/reservas/', '80 - 120€', 0),
(67, 'Golden Pop', 'Catacumbus', 'Barcelona', 'Carrer de Girona, 7, Barcelona', 'Aventura', '2 - 10 jugadores', 90, 'Media', '12 años', 8, 'https://goldenpop.es/juegos/catacumbas/#reservar', '100 - 250€', 0),
(68, 'Unreal', 'The narcos', 'Hospitalet del Llobregat', 'Bacardi, 32, Hospitalet de Llobregat', 'Acción-Ave', '2 - 7 jugadores', 90, 'Media', '5 años', 8, 'https://unrealroomescape.es/hospitalet/', '68 - 126€', 0),
(69, '123 Action barcelonaa', 'SWAT Countdown', 'Barcelona', 'Plaça de Catalunya, Barcelona', 'Acción', '2 - 8 jugadores', 90, 'Media', '18 años', 8, 'https://123actionbarcelona.com/escapeexterior/', '40 - 160€', 0),
(70, 'Sabotaje rooms', 'La beerdad oculta', 'Alicante', 'Calle Canal, 6, La Foia', 'Aventura', '2 - 8 jugadores', 90, 'Media', '16 años', 0, 'https://sabotajerooms.com/beerdad-oculta/#reserva', '46 - 102€', 0),
(72, 'Kenos', 'Kenos', 'Les fonts, Terrassa', 'Passeig Lola Anglada, 2 (local 3)', 'Terror', '2 - 6 jugadores', 90, 'Media', '16 años', 10, 'https://kenosescaperoom.com/', '60 - 120€', 0),
(73, 'The Woods', 'Slasher Party', 'Barcelona', 'Carrer Diputació 152', 'Investigac', '2 - 6 jugadores', 60, 'Ninguna', '*', 0, 'https://thewoodsescaperoom.com/reservas/', '68 - 180€', 0),
(76, 'La Clau', 'Until Dawn', 'Manresa', 'Passatge Vilaseca Garriga, 08241 Manresa, Barcelona', 'Terror', '2 - 6 jugadores', 70, 'Media', '18 años', 9, 'https://www.laclauroomescape.com/reservar/', '80 - 120€', 0),
(77, 'Yurmuvi', 'La novia de Frankenstein', 'Gijón', 'Calle Decano Prendes Pando, 23', 'Misterio', '2 - 6 jugadores', 60, 'Media', '15 años', 8, 'http://www.yurmuvi.com/la-novia-de-frankenstein-escape-room-gijon', '70 - 90€', 0),
(78, 'La Clave', 'Daemonium', 'Santander', 'C. Miguel de Unamuno, 39012 Santander, Cantabria', 'Terror', '2 - 6 jugadores', 90, 'Media', '16 años', 9, 'https://salalaclave.es/daemonium/', '64 - 132€', 0),
(79, 'Cronologic 2', 'El viaje continua', 'Barcelona', 'C/ del Clot, 133, 08026 Barcelona', 'Ciencia Fi', '2 - 5 jugadores', 75, 'Media-Alta', '11 años', 9, 'https://www.cronologic.es/reservar/#1666791704244-a2193b84-07aa', '65 - 95€', 0),
(80, 'Habitació 13', 'SoulBound', 'Mataró, Barcelona', 'Carrer de Esteve Albert, 73, 08304 Mataró, Barcelona, 73', 'Terror', '2 - 6 jugadores', 90, 'Media', '*', 9, 'https://habitacio13.com/#how-to-play', '70 - 150€', 0),
(81, 'A Contratiempo', 'La Iniciativa', 'Granollers, Barcelona', 'Carrer Sant Josep de Calassanç, 125, 08402 Granollers, Barcelona', 'Aventura', '2 - 8 jugadores', 70, 'Media', '16 años', 8, 'https://lainiciativa.es/services/la-iniciativa/', '70 - 150€', 0),
(82, 'Abduction 4', 'Enterprises', 'Badalona', 'Avinguda de Bac de Roda, 28, 08915 Badalona, Barcelona', 'Acción-Ave', '3 - 8 jugadores', 70, 'Media', '14 años', 9, 'https://www.abduction.es/badalona/abduction4', '96 - 176€', 0),
(83, 'Estrategy', 'Ellebanna', 'Terrassa', '19 Bº Izq, Carrer de Marinel·lo Bosch, 08222 Terrassa, Barcelona', 'Terror', '2 - 6 jugadores', 75, 'Media', '13 años', 8, 'https://www.estrategyroomscape.com/', '80 - 150€', 0),
(84, 'The Witching Hour', 'Orient Express', 'Barcelona', 'Carrer del Taquígraf Martí, 6, 8, bajos, 08028 Barcelona', 'Terror', '2 - 6 jugadores', 66, 'Media', '18 años', 8, 'https://thewitchinghour.es/reserva-orient/', '84 - 126€', 0),
(85, 'Unreal', 'Código Rojo', 'Terrassa', 'Carrer de Nicolau Talló, 108, 08224 Terrassa, Barcelona', 'Aventura-I', '2 - 8 jugadores', 80, 'Media', '5 años', 8, 'http://unrealroomescape.es/terrassa/#reservas', '62 - 136€', 0),
(86, 'The X Door', 'El Último Dragón', 'Valencia', 'C. Literato Gabriel Miró, 25, 46008 Valencia', 'Aventura-I', '2 - 6 jugadores', 90, 'Alta', '10 años', 0, 'https://thexdoor.com/el-ultimo-dragon/', '60 - 102€', 0),
(87, 'Cursed Escapes', 'Silence Circus', 'Piedras Blancas, Asturias', 'Av. Galicia, 8, 33450 Piedras Blancas, Asturias', 'Misterio', '2 - 6 jugadores', 60, 'Media', '18 años', 0, 'https://cursedescapes.es/', '50 - 75€', 0),
(88, 'Cubick', 'La Entrevista', 'Mataró, Barcelona', 'Carrer de la Cooperativa, 77, 08302 Mataró, Barcelona', 'Acción-Niñ', '2 - 7 jugadores', 80, 'Media-Alta', '16 años', 9, 'https://cubickroomescape.es/mataro/reservas/', '78 - 140€', 0),
(89, 'Escape World Games', 'Gordon`s Factory (Ratas d', 'Barcelona', 'Passeig Bertrand, 29, 08980 Sant Feliu de Llobregat,', 'Acción-Mie', '2 - 6 jugadores', 90, 'Media-Alta', '13 años', 8, 'https://www.escapeworldgames.com/', '80 - 120€', 0),
(90, 'Elements Agua', 'Futura', 'Pineda de Mar', 'Avinguda del Mediterrani, 36, 08397 Pineda de Mar, Barcelona', 'Aventura-C', '2 - 6 jugadores', 60, 'Media-Alta', '8 años', 8, 'https://futuraescape.com/reservas/', '60 - 102€', 0),
(91, 'Resident Riddle', 'Randall`s Party', 'Barcelona', 'Carrer de Joan Riera, 32, 08042 Barcelona', 'Terror', '3 - 5 jugadores', 60, 'Media', '14 años', 8, 'https://residentriddle.com/reservas/resident-riddle-randalls-party-escape-room', '100€', 0),
(92, 'Run Rabbit', 'La mazmorra', 'Valencia', 'C. de Jesús i Maria, 10, 46008 València, Valencia', 'Aventura', '2 - 6 jugadores', 75, 'Media-Alta', '15 años', 0, 'https://runrabbit.es/la-mazmorra/#reserva-mazmorra', '60 - 102€', 0),
(93, 'End House', 'La Vieja Carniceria', 'Esparraguera, Barcelona', 'Carrer Cavallers, 17, 08292 Esparreguera, Barcelona', 'Terror-Mis', '2 - 8 jugadores', 75, 'Media', '13 años', 8, 'https://www.endhouse.es/escape-room', '80 - 160€', 0),
(94, 'Unreal', 'El Bar', 'Sants, Barcelona', 'Carrer de Bonaventura Pollés, 21, 08014 Barcelona', 'Aventura', '2 - 7 jugadores', 90, 'Media', '5 años', 0, 'https://unrealroomescape.es/sants/', '70 - 133€', 0),
(95, 'Ingenious', 'Extinction', 'Elche, Murcia', 'C. Bernabé del Campo Latorre, 21, 03202 Elche, Alicante', 'Terror', '2 - 7 jugadores', 75, 'Media', '12 años', 0, 'https://www.ingeniousescaperoom.com/extinction/', '80 - 130€', 0),
(96, 'Arcade Invaders', 'Arcade Invaders', 'Gijón, Asturias', 'C. Progreso, 4, 33209 Gijón, Asturias', 'Investigac', '2 - 9 jugadores', 75, 'Media', '13 años', 0, 'http://arcadeinvaders.es/#reserva', '64 - 153€', 0),
(97, 'Insomnia', 'El Cóctel del Doctor', 'Berga, Barcelona', 'Gran Via, 1, 08600 Berga, Barcelona', 'Terror', '2 - 6 jugadores', 60, 'Media', '18 años', 9, 'https://www.insomniacorp.com/el-coctel-del-doctor/reserva/', '60 - 120€', 0),
(98, 'Harlequim', 'Ca La Rulos', 'Cassà de la Selva, Girona', 'Carretera Provincial, 15, 17244 Cassà de la Selva, Girona', 'Investigac', '2 - 6 jugadores', 75, 'Media', '14 años', 0, 'https://www.harlequimescape.com/sala/', '65 - 110€', 0),
(99, 'Cubick', 'El Secuestro', 'Mataró, Barcelona', 'Carrer de la Cooperativa, 77, 08302 Mataró, Barcelona', 'Acción', '2 - 7 jugadores', 80, 'Media-Alta', '16 años', 9, 'https://cubickroomescape.es/mataro/reservas/', '78 - 140€', 0),
(100, 'Delirium', 'El Exorcismo', 'Montcada i Reixac, Barcelona', 'Av. Catalunya, 27, 08110 Montcada i Reixac, Barcelona', 'Terror-Mis', '2 - 6 jugadores', 90, 'Media', '18 años', 9, 'https://deliriumxperience.com/reservas/', '90 - 150€', 0),
(101, 'Yurmuvi', 'El Regreso del Vampiro', 'Gijón, Asturias', 'C. Juan Alvargonzález, 17, 33208 Gijón, Asturias', 'Misterio', '2 - 6 jugadores', 75, 'Media', '15 años', 0, 'https://www.yurmuvi.com/el-regreso-del-vampiro', '70 - 80€', 0),
(102, 'Bajo 2', 'Bajo 2', 'Barcelona, Barcelona', 'Carretera de la Bordeta, 62, 08014 Barcelona', 'Terror', '2 - 5 jugadores', 90, 'Media-Alta', '16 años', 9, 'http://www.bajosegunda.com/index.php#reserva', '80 - 125€', 0),
(103, 'Av.Vitoria', 'Proyecto Avengadores', 'Vitoria, Barcelona', 'Peru Kalea, 8, 01012 Gasteiz, Araba', 'Aventura', '2 - 6 jugadores', 120, 'Media-Alta', '10 años', 0, 'https://www.avescaperoom.com/juegos/proyecto-avengadores/', '80 - 130€', 0),
(104, 'Sanatorium', 'El Origen', 'Florida Baja, Alicante', 'C. Cisne, 37, 03006 Alicante (Alacant), Alicante', 'Terror-Mis', '4 - 10 jugadores', 75, 'Media', '18 años', 9, 'https://www.sanatoriumescapealicante.com/', '104 - 170€', 0),
(105, 'Unreal', 'La Mina', 'Hospitalet de Llobregat, Barcelona', 'C. de Bacardí, 32, 08902 L`Hospitalet de Llobregat, Barcelona', 'Acción-Ave', '2 - 7 jugadores', 90, 'Media', '5 años', 9, 'https://unrealroomescape.es/hospitalet/#reservas', '68 - 126€', 0),
(106, 'Horror Box', 'Jigsaw', 'Barcelona', 'C. de la Indústria, 268, 08026 Barcelona', 'Terror', '2 - 8 jugadores', 60, 'Media-Alta', '18 años', 9, 'https://www.horrorbox.es/producto/jigsaw-escape-room/', '80 - 160€', 0),
(107, 'Enkrypta', 'El despertar de la Srta. Blood', 'Oviedo, Asturias', 'Calle Campo de los Patos, 1, 33009 Oviedo, Asturias', 'Misterio', '2 - 6 jugadores', 90, 'Media', '18 años', 8, 'https://www.enkrypta.com/', '66 - 132€', 0),
(108, 'Fear Factory', 'El Orfanato', 'Hospitalet de Llobregat, Barcelona', 'Carr. de Collblanc, 205, 08906 L`Hospitalet de Llobregat, Barcelona', 'Terror-Mis', '2 - 8 jugadores', 75, 'Media-Alta', '18 años', 8, 'https://www.fearfactoryexp.com/copia-de-contacto', '70 - 160€', 0),
(109, 'Fear', 'Zombie Outbreak', 'Barcelona, Barcelona', 'Av. de la Mare de Déu de Montserrat, 199, 08041 Barcelona', 'Terror', '1 - 8 jugadores', 80, 'Media-Alta', '14 años', 8, 'https://fearescaperoom.com/', '45 - 160€', 0),
(110, 'Trauma Factory', 'Manoir', 'Alcanó, Lleida', 'Carrer Carretera, 33, 25162 Alcanó, Lleida', 'Terror', '2 - 6 jugadores', 70, 'Media', '16 años', 8, 'https://traumafactory.es/reservar-escape-room/manoir/', '60 - 102€', 0),
(111, 'Unreal', 'Endurance II', 'Barcelona, Barcelona', 'Carrer de Porrera, 12, Local, 08031 Barcelona', 'Aventura-C', '2 - 7 jugadores', 90, 'Media', '5 años', 8, 'https://unrealroomescape.es/horta/#reservas', '68 - 126€', 0),
(112, 'The X Door', 'Cain', 'Hospitalet del Llobregat, Barcelona', 'C/ Holanda, 68, 08903 L`Hospitalet de Llobregat, Barcelona', 'Ciencia Fi', '2 - 6 jugadores', 80, 'Media-Alta', '12 años', 0, 'https://www.thexdooralicante.com/cain/', '60 - 102€', 0),
(113, 'Xcape Room Finestrat', 'El sombrero de Alicia', 'Finestrat, Girona', 'Carrer Sella, 19, local 7, 17800 Olot, Girona', 'Fantasia-I', '2 - 4 jugadores', 75, 'Media-Alta', '7 años', 0, 'https://www.xcaperoomfinestrat.com/el-sombrerero-de-alicia', '52 - 90€', 0),
(114, 'Cronos', 'Resident Corporation', 'Ruzafa, Valencia', 'C/ de Sevilla, 13, 46006 Valencia', 'Terror-Inf', '2 - 6 jugadores', 90, 'Media', '*', 0, 'https://cronosvalencia.com/resident-corporation/', '60 - 120€', 0),
(115, 'Escapisme Xpirience', 'La Consulta', 'Badalona, Barcelona', 'Carrer de Ripoll, 5, 08917 Santa Coloma de Gramenet, Barcelona', 'Terror-Mis', '2 - 6 jugadores', 90, 'Media', '16 años', 8, 'https://www.escapadelaconsulta.com/', '80 - 120€', 0),
(116, 'Wolfcrow', 'Epiphany', 'Sabadell, Barcelona', 'Carrer de Zurbano, 7, 08201 Sabadell, Barcelona', 'Terror-Mis', '2 - 4 jugadores', 70, 'Media', '14 años', 8, 'https://escaperoomsabadell.es/epiphany/', '60 - 94€', 0),
(117, 'Last Minute Cornellá', 'El Legado de Albus', 'Cornellá de Llobregat, Barcelona', 'Carrer dels Catalans, 14, 08940 Cornellà de Llobregat, Barcelona', 'Fantasia', '2 - 6 jugadores', 80, 'Media', '8 años', 7, 'https://lastminutecornella.com/reservar/', '75 - 130€', 0),
(118, 'Yurmuvi', 'Escuela de Magia', 'Gijón, Asturias', 'C. Decano Prendes Pando, 23, 33208 Gijón, Asturias', 'Fantasia', '2 - 6 jugadores', 60, 'Media', '*', 0, 'https://www.yurmuvi.com/escuela-de-magia-escape-room-gijon#tarifas-y-reservas', '70 - 80€', 0),
(119, 'Maxium Escape', 'Refugio 27', 'Barcelona, Barcelona', 'C/ de Girona, 27, 08010 Barcelona', 'Aventura-C', '3 - 5 jugadores', 90, 'Alta', '12 años', 9, 'https://maximumescape.com/es/games/Vault%2027#book', '90 - 130€', 0),
(120, 'Límite 60', 'El Primer Viaje', 'Gijón, Asturias', 'C. Quevedo, 7, 33204 Gijón, Asturias', 'Aventura-M', '2 - 8 jugadores', 60, 'Media', '8 años', 9, 'http://www.limite60.com/reservas/index.php', '50 - 120€', 0),
(121, 'Escape or Die', 'Tras la Ciudad Perdida', 'Leoia, Vizcaya', 'C. Langileria, 122, 48940 Leioa, Vizcaya', 'Aventura', '2 - 6 jugadores', 75, 'Alta', '*', 0, 'https://www.traslaciudadperdida.com/index.php/booking/', '60 - 100€', 0),
(122, 'Cronologic', 'La Creación', 'Barcelona, Barcelona', 'Av. Meridiana, 129, 08026 Barcelona', 'Ciencia Fi', '2 - 5 jugadores', 65, 'Media', '14 años', 9, 'https://www.cronologic.es/reservar/', '65 - 95€', 0),
(124, 'Cadena Perpetua', 'La Evasión del Campo 14', 'Montcada i Reixac, Barcelona', 'Carrer Montiu, 14, 08110 Montcada i Reixac, Barcelona', 'Investigac', '2 - 6 jugadores', 90, 'Media-Alta', '8 años', 8, 'https://cadenaperpetuaroom.com/#booking-section', '60 - 108€', 0),
(125, 'Escape Room Mission', 'Gladiador', 'Lugones, Asturias', 'Calle Pje. del Parque, 18, 33420 Lugones, Asturias', 'Acción-Ave', '2 - 7 jugadores', 60, '-', '16 años', 9, 'https://escaperoommission.es/reservas.html', '50 - 105€', 0),
(126, 'The Witching Hour', 'La Juguetería Maldita', 'Barcelona, Barcelona', 'Carrer del Taquígraf Martí, 6, 08028 Barcelona', 'Terror', '2 - 6 jugadores', 70, 'Media', '18 años', 8, 'https://thewitchinghour.es/reserva/', '84 - 126€', 0),
(127, 'Día D', 'Día D', 'Hospitalet del Llobregat, Barcelona', 'C/ del Bruc, 41, 08010 Barcelona', 'Aventura-I', '2 - 5 jugadores', 70, 'Media', '12 años', 8, 'https://diadroomescape.com/reservar', '60 - 100€', 0),
(128, 'Prision Experience', 'Ducha Fría', 'Barcelona, Barcelona', 'C/ Antic de Bofarull, 15, 08026 Barcelona', 'Acción', '2 - 6 jugadores', 75, 'Media-Alta', '14 años', 7, 'https://www.prison-experience.com/#booking-section', '80 - 120€', 0),
(129, 'Hora de Escape', 'La Guarida Pirata', 'Oviedo, Asturias', 'Av. Julián Clavería, 4, 33006 Oviedo, Asturias', 'Aventura-M', '2 - 7 jugadores', 60, 'Media', '14 años', 8, 'https://horadeescape.es/reservas/', '54 - 105€', 0),
(130, 'Maximum escape', 'La mazmorra', 'Barcelona, Barcelona', 'C/ de Girona, 27, 08010 Barcelona', 'Aventura-M', '2 - 4 jugadores', 60, 'Baja', '8 años', 8, 'https://maximumescape.com/es/games/Mazmorra#book', '60 - 90€', 0),
(131, 'Las celdas', 'La grieta', 'Avilés, Asturias', 'C. Gutiérrez Herrero, 52, 33402 Avilés, Asturias', 'Acción', '2 - 7 jugadores', 60, 'Media', '16 años', 8, 'https://lasceldas.com/cap-1-la-grieta/', '50 - 100€', 0),
(132, 'Escape Manía', 'La tienda de las muñecas ', 'Bilbao, Bilbao', 'C. Rafaela Ybarra, 7, 48014 Bilbao, Vizcaya', 'Terror', '2 - 5 jugadores', 60, 'Media', '18 años', 8, 'https://www.escapemania.es/reservar-juego-3.html', '60 - 80€', 0),
(133, 'Escapem', 'Bajo zero', 'Sabadell, Barcelona', 'Carrer de Casp, 9, 08204 Sabadell, Barcelona', 'Aventura', '2 - 6 jugadores', 70, 'Media', '9 años', 8, 'https://www.elementsescaperoom.com/bajo-zero/', '70 - 96€', 0),
(134, 'Quimera escape', 'Seven the game', 'Granollers, Barcelona', 'Carrer Aragó, 40, 08521 Bellavista, Barcelona', 'Misterio', '2 - 6 jugadores', 70, 'Alta', '14 años', 8, 'https://quimeraescape.com/reservas-2/', '65 - 120€', 0),
(135, 'Fugitivos', 'Fugitivos', 'Barcelona, Barcelona', 'Passatge Posoltega, 11, 08030 Barcelona', 'Aventura-C', '2 - 8 jugadores', 70, 'Media', '16 años', 8, 'https://www.fugitivosroomescape.com/#section-services', '64 - 160€', 0),
(136, 'Hoppit', 'Tap room', 'Manresa, Barcelona', 'Carrer del Doctor Zamenhof, 20, 08243 Manresa, Barcelona', 'Aventura', '2 - 6 jugadores', 90, 'Media-Alta', '16 años', 0, 'https://www.hoppitescape.com/reservar/', '60 - 120€', 0),
(137, 'Totem', 'Génesis', 'Barcelona, Barcelona', 'P.º Valldaura, 111, 08042 Barcelona', 'Ciencia Fi', '2 - 7 jugadores', 60, 'Media', '8 años', 7, 'https://totemescaperoom.com/es/reservas/', '50 - 91€', 0),
(138, 'Cinema escape', 'Barum dum', 'Barcelona, Barcelona', 'C/ de St. Alexandre, 19, 08031 Barcelona', 'Aventura-F', '2 - 6 jugadores', 70, 'Media-Alta', '*', 8, 'https://www.cinemaescape.es/reservar-roomescape', '59 - 60€', 0),
(139, 'Enigmik', 'Nw6 Bunker', 'Barcelona, Barcelona', 'C/ del Rosselló, 508, 08026 Barcelona', 'Acción-Inv', '2 - 6 jugadores', 60, 'Media-Alta', '14 años', 7, 'https://www.enigmik.com/nw6-bunker-escape-room/', '60 - 96€', 0),
(140, 'Zona room', 'Moon', 'Barcelona, Barcelona', 'Av. de la Generalitat, 155, 08780 Pallejà, Barcelona', 'Aventura-C', '2 - 6 jugadores', 90, 'Media-Alta', '14 años', 8, 'https://zonaroomescape.com/rooms/moon/', '62 - 132€', 0),
(141, 'The x room', 'White and black', 'Hospitalet del Llobregat, Barcelona', 'C/ de Holanda, 68, 08903 L`Hospitalet de Llobregat, Barcelona', 'Investigac', '2 - 6 jugadores', 60, 'Media', '*', 6, 'https://thexdoorbarcelona.com/white-and-black/', '46 - 90€', 0),
(142, 'Baker street', 'El videoclub de los 80', 'Gijón, Asturias', 'C. Joaquín Solís, 25, 33209 Gijón, Asturias', 'Investigac', '2 - 7 jugadores', 60, 'Media', '13 años', 8, 'http://bakerstreetgijon.com/reservas/', '54 - 98€', 0),
(143, 'The resistance', 'Lanzadera alien', 'Barcelona, Barcelona', 'Carrer del Taquígraf Martí, 29, 08028 Barcelona', 'Aventura-C', '2 - 9 jugadores', 60, 'Media', '16 años', 8, 'https://www.resistanceroom.com/reservas-lanzadera-alien-nave-espacial/', '80 - 180€', 0),
(144, 'Desafio Gijón', 'El experimento', 'Gijón, Asturias', 'C. Tirso de Molina, 10, 33204 Gijón, Asturias', 'Investigac', '2 - 7 jugadores', 60, 'Media-Alta', '12 años', 8, 'https://desafiogijon.com/reservas', '50 - 100€', 0),
(145, 'Wolfcrow', 'Valhalla', 'Sabadell, Barcelona', 'Carrer de Zurbano, 7, 08201 Sabadell, Barcelona', 'Aventura', '2 - 6 jugadores', 70, 'Media', '14 años', 7, 'https://escaperoomsabadell.es/', '60 - 120€', 0),
(146, 'Scaparium', 'Un plan perfecto', 'Vilanova, Barcelona', 'Carrer de la Providència, 66, 08800 Vilanova i la Geltrú, Barcelona', 'Acción-Inf', '2 - 6 jugadores', 70, 'Media', '9 años', 7, 'http://scaparium.com/reservas-plan-perfecto/', '65 - 85€', 0),
(147, 'Top secret', 'Attractions', 'Barcelona, Barcelona', 'Gran Via de les Corts Catalanes, 926, 08018 Barcelona', 'Terror', '2 - 6 jugadores', 60, 'Media', '16 años', 7, 'https://www.topsecretbarcelona.com/attractions', '60 - 105€', 0),
(148, 'The x door', 'Haunted prision', 'Hospitalet del Llobregat, Barcelona', 'C/ de Holanda, 68, 08903 L`Hospitalet de Llobregat, Barcelona', 'Acción-Mis', '2 - 10 jugadores', 60, 'Media-Alta', '*', 7, 'https://thexdoorbarcelona.com/haunted-prison/', '46 - 150€', 0),
(149, 'Resident Riddle', 'El invernadero', 'Barcelona, Barcelona', 'Carrer de Joan Riera, 32, 08042 Barcelona', 'Terror', '4 - 8 jugadores', 60, 'Media', '14 años', 8, 'https://residentriddle.com/reservas/resident-riddle-invernadero-escape-room', '80 - 140€', 0),
(150, 'Yurmuvi', 'Asalto al nautilus', 'Oviedo, Asturias', 'Av. de Santander, 14, 33001 Oviedo, Asturias', 'Aventura', '2 - 6 jugadores', 60, 'Media', '14 años', 0, 'http://www.yurmuvi.com/asalto-al-nautilus-escape-room-oviedo', '65 - 86€', 0),
(151, 'Evasión rebelde', 'The butcher', 'Oviedo, Asturias', 'C. Juan Antonio Álvarez Rabanal, 2, 33011 Oviedo, Asturias', 'Misterio', '2 - 7 jugadores', 70, 'Media', '16 años', 0, 'https://www.evasionrebelde.com/butcher-reserva/', '65 - 120€', 0),
(152, 'Maximum escape', 'Hotel overlook', 'Oviedo, Asturias', 'C/ del Bruc, 9, 08010 Barcelona', 'Terror', '3 - 5 jugadores', 60, 'Media', '16 años', 7, 'https://maximumescape.com/es/games/Overlook', '70 - 90€', 0),
(153, 'Enigma', 'El virus', 'Barcelona, Barcelona', 'C. de les Acàcies, 38, 08027 Barcelona', 'Acción-Ave', '2 - 6 jugadores', 60, 'Media', '7 años', 7, 'https://juegoenigma.es/es/reserva/', '62 - 114€', 0),
(154, 'Maximum', 'Nave Ulysses', 'Barcelona, Barcelona', 'C/ de Trafalgar, 17, 08010 Barcelona', 'Ciencia Fi', '2 - 4 jugadores', 60, 'Media', '14 años', 7, 'https://juegoenigma.es/es/reserva/', '70 - 80€', 0),
(155, 'Escape room roses', 'La cena', 'Roses, Girona', 'Carrer de Josep Romañach, 32, 17480 Roses, Girona', 'Misterio', '2 - 7 jugadores', 60, 'Media', '14 años', 0, 'https://escaperoomroses.com/reserva/', '60 - 140€', 0),
(156, 'Tótem', 'Las profecias del bosco', 'Barcelona, Barcelona', 'P.º Valldaura, 111, 08042 Barcelona', 'Aventura', '2 - 7 jugadores', 60, 'Media', '8 años', 7, 'https://totemescaperoom.com/es/reservas/', '50 - 91€', 0),
(157, 'Maximum', 'Gangsters', 'Barcelona, Barcelona', 'C/ de Girona, 27, 08010 Barcelona', 'Acción', '2 - 4 jugadores', 60, 'Media', '8 años', 8, 'https://maximumescape.com/es/games/Gangsters#book', '60 - 90€', 0),
(158, 'Evasión rebelde', 'Atlantis', 'Oviedo, Asturias', 'C. Juan Antonio Álvarez Rabanal, 2, 33011 Oviedo, Asturias', 'Aventura', '2 - 7 jugadores', 70, 'Media', '9 años', 0, 'https://www.evasionrebelde.com/atlantis-reserva/', '65 - 105€', 0),
(159, 'Play escape room', 'Alkatraz mediaval', 'Barcelona, Barcelona', 'C. Juan Antonio Álvarez Rabanal, 2, 33011 Oviedo, Asturias', 'Acción-Ave', '2 - 8 jugadores', 75, 'Media-Alta', '15 años', 7, 'https://playescaperoom.es/room/escape-room-medieval/', '60 - 144€', 0),
(160, 'Monkkey bcn', 'Monkkey Abbey', 'Barcelona, Barcelona', 'Carrer del Pacífic, 66, 08027 Barcelona', 'Misterio', '2 - 6 jugadores', 70, 'Media', '14 años', 8, 'https://www.monkkeybcn.com/reservas', '60 - 96€', 0),
(161, 'Mystery escape', 'La cámara acorazada', 'Barcelona, Barcelona', 'Av. Diagonal, 111, 08005 Barcelona', 'Acción', '3 - 7 jugadores', 60, 'Media', '16 años', 7, 'https://mysteryescape.es/reservas-la-camara-acorazada-mystery-escape/', '72 - 112€', 0),
(162, 'Hidden box', 'La leyenda de Turner', 'Terrassa, Barcelona', 'Carretera de Rubí, 400, 08228 Les Fonts, Barcelona', 'Aventura', '2 - 6 jugadores', 70, 'Media', '*', 0, 'https://www.hiddenbox.es/', '50 - 90€', 0),
(163, 'Runaway', 'Venganza', 'Igualada, Barcelona', 'Carrer del Dr. Pujades, 64, 08700 Igualada, Barcelona', 'Aventura', '2 - 8 jugadores', 60, 'Media', '15 años', 8, 'http://www.runawayescaperoom.com/', '60 - 128€', 0),
(164, 'Five cubes', '1961 la llamada', 'Barcelona, Barcelona', 'Carrer de Santa Dorotea, 6, Bajos 2, 08004 Barcelona', 'Misterio', '2 - 6 jugadores', 90, 'Media', '14 años', 7, 'https://www.fivecubes.es/five-cubes/1961-la-llamada/', '80 - 150€', 0),
(165, 'Top secret', 'La ley seca', 'Barcelona, Barcelona', 'Gran Via de les Corts Catalanes, 926, 08018 Barcelona', 'Acción', '2 - 6 jugadores', 60, 'Media-Alta', '18 años', 7, 'https://www.topsecretbarcelona.com/ley-seca', '60 - 90€', 0),
(166, 'La casa de las habitacion', 'Druidas y Mazmorras', 'Malaga, Andalucia', 'Pl. Villa de Castelldefels, 4, 29006 Málaga', 'Aventura-M', '2 - 6 jugadores', 60, 'Media', '18 años', 8, 'http://lacasadelashabitaciones.com/malaga/room/druidasmazmorras/', '36 - 66€', 0),
(167, 'Escape Room Teatinos', 'Un plan brillante', 'Malaga, Andalucia', 'Blvr. Louis Pasteur, 5, 29010 Málaga', 'Acción', '5 - 7 jugadores', 60, 'Media', '18 años', 0, 'https://escaperoomteatinos.com/escaperoom-malaga-nuestras-salas?view=servicesearch&id_ser=1', '50 - 70€', 0),
(168, 'Escape Malaga', 'El triangulo de las bermudas', 'Malaga, Andalucia', 'C. Victoria, 8, 1ª planta Izq, 29012 Málaga', 'Investigac', '2 - 6 jugadores', 60, 'Media', '18 años', 0, 'https://www.escapemalaga.com/juegos/triangulo-bermudas-roombate-malaga/', '50 - 66€', 0),
(169, 'La Casa de las Habitacion', 'PENA DE MUERTE', 'Malaga, Andalucia', 'Pl. Villa de Castelldefels, 4, 29006 Málaga', 'Investigac', '2 - 6 jugadores', 75, 'Media', '18 años', 0, 'http://lacasadelashabitaciones.com/malaga/room/pena-de-muerte/', '44 - 84€', 0),
(170, 'La Casa de las Habitacion', 'El robo', 'Malaga, Andalucia', 'Pl. Villa de Castelldefels, 4, 29006 Málaga', 'Investigac', '2 - 6 jugadores', 60, 'Media', '18 años', 6, 'http://lacasadelashabitaciones.com/malaga/room/elrobo/', '36 - 66€', 0),
(171, 'El Reto Escape room', 'El ultimo hechizo', 'Sevilla, Sevilla', 'C. Muro de los Navarros, 18, 41003 Sevilla', 'Aventura', '2 - 6 jugadores', 60, 'Media', '7 años', 7, 'https://experimentaelreto.es/producto/el-ultimo-hechizo-escape-room', '60 - 70€', 0),
(172, 'Rhe rombo code Sevilla', 'Tras el espejo de la prisión', 'Sevilla, Sevilla', ' Av. de Europa 102, 41960, Gines', 'Investigac', '6 - 12 jugadores', 60, 'Media-Alta', '10 años', 0, 'https://therombocode.es/sevilla/juegos/tras-el-espejo/', '60 - 140€', 0),
(173, 'El secreto', 'Combo Manicomio - Abducci', 'Sevilla, Sevilla', 'C. Bartolomé de Medina, 5, 41004 Sevilla', 'Acción', '6 - 12 jugadores', 60, 'Media', '*', 0, 'https://www.elsecretoescaperoom.com/combo', '90 - 120€', 0),
(174, 'Sam & Cooper Escape Room ', 'Murder chef', 'Sevilla, Sevilla', 'C. Imaginero Castillo Lastrucci, 12, 41002 Sevilla', 'Investigac', '2 - 7 jugadores', 60, 'Media-Alta', '7 años', 7, 'https://escaperoom-samcooper.es/murder-chef/', '45 - 80€', 0),
(175, 'Brain2brain Escape Room', 'El quinto sol', 'Sevilla, Sevilla', 'Edificio Averroes II, C. Francisco Cortijo, Local 5, 41019 Sevilla', 'Aventura', '2 - 6 jugadores', 60, 'Media', '*', 0, 'https://escaperoom-samcooper.es/murder-chef/', '40 - 70€', 0),
(176, 'Linked Minds escape room', 'Asesinato en sunset boule', 'Madrid, Madrid', 'C. de Pizarro, 22, 28004 Madrid', 'Investigac', '2 - 6 jugadores', 60, 'Media', '16 años', 7, 'https://www.linked-minds.com/escape-room/sunset-boulevard/', '62 - 99€', 0),
(178, 'Coco Room Madrid Room Esc', 'El enigma de Goya', 'Madrid, Madrid', 'C. de Moratines, 18, 28005 Madrid', 'Misterio', '7 - 12 jugadores', 60, 'Media', '*', 0, 'https://madrid.cocoroom.es/reservas/', '147 - 204€', 0),
(179, 'Tangram Escape room', 'El secreto de la Marina', 'Alcobendas, Madrid', 'C. Ibiza, 10, 28703 San Sebastián de los Reyes, Madrid', 'Investigac', '2 - 6 jugadores', 60, 'Media', '12 años', 7, 'https://www.tangramescaperoom.com/salas/el-secreto-de-la-marina/', '55 - 100€', 0),
(180, 'Fox in a Box', 'Asesino del Zodiaco', 'Madrid, Madrid', 'C/ del Áncora, 12, 28045 Madrid', 'Acción-Ter', '2 - 7 jugadores', 75, 'Media', '12 años', 0, 'https://foxinaboxmadrid.com/reservation/index/game/zodiac_killer/', '80 - 150€', 0),
(181, 'Coco Room Granada Escape ', 'Exploradores en el Cairo', 'Granada, Andalucia', '18004, Arabial, 45, 18004 Granada', 'Aventura-I', '7 - 10 jugadores', 60, 'Media', '10 años', 0, 'https://granada.cocoroom.es/reservas/', '105 - 150€', 0),
(182, 'Coco Room Granada Escape ', 'El imperio Romano', 'Granada, Andalucia', '18004, Arabial, 45, 18004 Granada', 'Aventura', '2 - 6 jugadores', 60, 'Alta', '18 años', 0, 'https://cocoroom.es/caesaraugusta/', '50 - 90€', 0),
(183, 'Lock-In', 'Prisioneros', 'Granada, Andalucia', 'C. Abén Humeya, 11, 18005 Granada', 'Acción', '2 - 8 jugadores', 60, 'Alta', '16 años', 0, 'https://lockin.es/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI0OCIsInRvZ2dsZSI6ZmFsc2V9', '50 - 120€', 0),
(184, 'Lock-In', 'La Subasta', 'Granada, Andalucia', 'C. Abén Humeya, 11, 18005 Granada', 'Acción', '2 - 8 jugadores', 60, 'Alta', '16 años', 0, 'https://lockin.es/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjI0OCIsInRvZ2dsZSI6ZmFsc2V9', '50 - 120€', 0),
(185, 'Villa Amparo Escape Room', 'La nonna', 'Cajár, Andalucia', 'C. Flor, 22, 18199 Cájar, Granada', 'Acción', '2 - 8 jugadores', 60, 'Alta', '10 años', 0, 'https://villaamparo.es/#reserva', '50 - 160€', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stats`
--

CREATE TABLE `stats` (
  `id_stats` int(10) NOT NULL,
  `escaperoomsJugadas` int(3) NOT NULL,
  `escaperoomsGanadas` int(3) NOT NULL,
  `tiempo_medio` int(10) NOT NULL,
  `pais` int(3) NOT NULL,
  `comunidad` int(3) NOT NULL,
  `provincia` int(3) NOT NULL,
  `escaperoomsFavoritas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `id_stats` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `contrasena`, `correo`, `id_stats`) VALUES
(1, 'ernest', '$2y$10$loKOLW8jpt6ZxCH3aGQDa../NNgixn7UOLSEbyaUDUrJMBoQL5mNG', 'pollatrueno@hotmail.com', 0),
(2, 'fsdfdsf', '$2y$10$DvVDyBSCGVS4SLV9IIaRBuPVrX3GvM6BEPyQYZCmTajHPGL67Yy9u', 'fsdfdsfds@lolo.om', 0),
(3, 'paco', '$2y$10$fb7UUSSeNESedu/2qMo3Z.z2TjrRS1/l6A.cSsA/rEYS7w2z1JWuC', 'paco@paco.com', 0),
(4, 'camilo', '$2y$10$hi/xKxYRa4eM4EuTcXhKV.TyBaHaLbPnnk1b5vGJff5kIvbhqupu.', 'pollafuego@hotmail.com', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id_stats`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
