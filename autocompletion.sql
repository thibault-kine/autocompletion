-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 10 mai 2022 à 20:52
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

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
  `imgDir` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `nom`, `continent`, `region`, `capitale`, `imgDir`, `link`) VALUES
(1, 'France', 'Europe', 'Europe de l\'Ouest', 'Paris', 'FRAN', 'https://fr.wikipedia.org/wiki/France'),
(2, 'Belgique', 'Europe', 'Benelux', 'Bruxelles', 'BELG', 'https://fr.wikipedia.org/wiki/Belgique'),
(3, 'Allemagne', 'Europe', 'Europe Centrale', 'Berlin', 'GERM', 'https://fr.wikipedia.org/wiki/Allemagne'),
(4, 'Espagne', 'Europe', 'Péninsule Ibérique', 'Madrid', 'SPAN', 'https://fr.wikipedia.org/wiki/Espagne'),
(5, 'Royaume-Uni', 'Europe', 'Europe de l\'Ouest', 'Londres', 'UNKG', 'https://fr.wikipedia.org/wiki/Royaume-Uni'),
(6, 'Pologne', 'Europe', 'Europe Centrale', 'Varsovie', 'POLA', 'https://fr.wikipedia.org/wiki/Pologne'),
(7, 'Italie', 'Europe', 'Europe Centrale', 'Rome', 'ITAL', 'https://fr.wikipedia.org/wiki/Italie'),
(8, 'Suisse', 'Europe', 'Europe Centrale', 'Berne', 'SWIT', 'https://fr.wikipedia.org/wiki/Suisse'),
(9, 'Grèce', 'Europe', 'Balkans', 'Athènes', 'GREC', 'https://fr.wikipedia.org/wiki/Gr%C3%A8ce'),
(10, 'Portugal', 'Europe', 'Péninsule Ibérique', 'Lisbonne', 'PORT', 'https://fr.wikipedia.org/wiki/Portugal'),
(11, 'Biélorussie', 'Europe', 'Europe de l\'Est', 'Minsk', 'BLRU', 'https://fr.wikipedia.org/wiki/Bi%C3%A9lorussie'),
(12, 'Hongrie', 'Europe', 'Europe de l\'Est', 'Budapest', 'HUNG', 'https://fr.wikipedia.org/wiki/Hongrie'),
(13, 'Autriche', 'Europe', 'Europe Centrale', 'Vienne', 'AUST', 'https://fr.wikipedia.org/wiki/Autriche'),
(14, 'Turquie', 'Asie', 'Anatolie', 'Ankara', 'TURK', 'https://fr.wikipedia.org/wiki/Turquie'),
(15, 'Russie', 'Asie', 'Eurasie', 'Moscou', 'RUSS', 'https://fr.wikipedia.org/wiki/Russie'),
(16, 'Chine', 'Asie', 'Asie de l\'Est', 'Pékin', 'CHIN', 'https://fr.wikipedia.org/wiki/Chine'),
(17, 'Japon', 'Asie', 'Asie de l\'Est', 'Tokyo', 'JAPN', 'https://fr.wikipedia.org/wiki/Japon'),
(18, 'Inde', 'Asie', 'Asie du Sud', 'New Delhi', 'INDA', 'https://fr.wikipedia.org/wiki/Inde'),
(19, 'Indonésie', 'Asie', 'Asie de l\'Est', 'Jakarta', 'INDN', 'https://fr.wikipedia.org/wiki/Indon%C3%A9sie'),
(20, 'Arabie saoudite', 'Asie', 'Péninsule Arabique', 'Riyadh', 'SAAR', 'https://fr.wikipedia.org/wiki/Arabie_saudite'),
(21, 'USA', 'Amériques', 'Amérique du Nord', 'Washington', 'UNST', 'https://fr.wikipedia.org/wiki/Etats-Unis'),
(22, 'Canada', 'Amériques', 'Amérique du Nord', 'Ottawa', 'CANA', 'https://fr.wikipedia.org/wiki/Canada'),
(23, 'Mexique', 'Amériques', 'Amérique du Nord', 'Mexico City', 'MEXC', 'https://fr.wikipedia.org/wiki/Mexique'),
(24, 'Brésil', 'Amériques', 'Amérique du Sude', 'Brasilia', 'BRAZ', 'https://fr.wikipedia.org/wiki/Br%C3%A9sil'),
(25, 'Argentine', 'Amériques', 'Amérique du Sud', 'Buenos Aires', 'ARGE', 'https://fr.wikipedia.org/wiki/Argentine'),
(26, 'Chili', 'Amériques', 'Amérique du Sud', 'Santiago', 'CHIL', 'https://fr.wikipedia.org/wiki/Chili');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
