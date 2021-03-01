-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 01, 2021 at 05:04 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `productlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `sku` char(9) COLLATE utf8mb4_general_ci NOT NULL,
  `name` text COLLATE utf8mb4_general_ci NOT NULL,
  `price` text COLLATE utf8mb4_general_ci NOT NULL,
  `type` text COLLATE utf8mb4_general_ci NOT NULL,
  `size` text COLLATE utf8mb4_general_ci,
  `dimension` text COLLATE utf8mb4_general_ci,
  `weight` text COLLATE utf8mb4_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`sku`, `name`, `price`, `type`, `size`, `dimension`, `weight`) VALUES
('GGWP0007', 'war and Peace', '20', 'BOOK', NULL, NULL, '2'),
('JVC200123', 'Acme DISC', '1', 'DVD', '700', NULL, NULL),
('TR120555', 'Chair', '40', 'FURNITURE', NULL, '24x45x15', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`sku`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
