-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 06 mai 2022 à 08:56
-- Version du serveur :  8.0.21
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `autocompletion`
--

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

DROP TABLE IF EXISTS `pays`;
CREATE TABLE IF NOT EXISTS `pays` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `continent` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `capitale` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `nom`, `continent`, `region`, `capitale`) VALUES
(1, 'France', 'Europe', 'Europe de l\'Ouest', 'Paris'),
(2, 'Belgique', 'Europe', 'Benelux', 'Bruxelles'),
(3, 'Allemagne', 'Europe', 'Europe Centrale', 'Berlin'),
(4, 'Espagne', 'Europe', 'Péninsule Ibérique', 'Madrid'),
(5, 'Royaume-Uni', 'Europe', 'Europe de l\'Ouest', 'Londres'),
(6, 'Pologne', 'Europe', 'Europe Centrale', 'Varsovie'),
(7, 'Italie', 'Europe', 'Europe Centrale', 'Rome'),
(8, 'Suisse', 'Europe', 'Europe Centrale', 'Berne'),
(9, 'Grèce', 'Europe', 'Balkans', 'Athènes'),
(10, 'Portugal', 'Europe', 'Péninsule Ibérique', 'Lisbonne'),
(11, 'Biélorussie', 'Europe', 'Europe de l\'Est', 'Minsk'),
(12, 'Hongrie', 'Europe', 'Europe de l\'Est', 'Budapest'),
(13, 'Autriche', 'Europe', 'Europe Centrale', 'Vienne'),
(14, 'Turquie', 'Asie', 'Anatolie', 'Ankara'),
(15, 'Russie', 'Asie', 'Eurasie', 'Moscou'),
(16, 'Chine', 'Asie', 'Asie de l\'Est', 'Pékin'),
(17, 'Japon', 'Asie', 'Asie de l\'Est', 'Tokyo'),
(18, 'Inde', 'Asie', 'Asie du Sud', 'New Delhi'),
(19, 'Indonésie', 'Asie', 'Asie de l\'Est', 'Jakarta'),
(20, 'Arabie saoudite', 'Asie', 'Péninsule Arabique', 'Riyadh'),
(21, 'USA', 'Amériques', 'Amérique du Nord', 'Washington'),
(22, 'Canada', 'Amériques', 'Amérique du Nord', 'Ottawa'),
(23, 'Mexique', 'Amériques', 'Amérique du Nord', 'Mexico City'),
(24, 'Brésil', 'Amériques', 'Amérique du Sude', 'Brasilia'),
(25, 'Argentine', 'Amériques', 'Amérique du Sud', 'Buenos Aires'),
(26, 'Chili', 'Amériques', 'Amérique du Sud', 'Santiago');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
