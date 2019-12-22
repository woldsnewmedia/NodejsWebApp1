-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: nodedb1
-- ------------------------------------------------------
-- Server version	5.5.62-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `people`
--

DROP TABLE IF EXISTS `people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `people` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Guid` varchar(128) CHARACTER SET utf8 DEFAULT NULL,
  `Name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `JobTitle` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `Image` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Summary` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Colour` varchar(24) CHARACTER SET utf8 DEFAULT NULL,
  `Shape` varchar(24) CHARACTER SET utf8 DEFAULT NULL,
  `Enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `people`
--

LOCK TABLES `people` WRITE;
/*!40000 ALTER TABLE `people` DISABLE KEYS */;
INSERT INTO `people` VALUES (1,'6411a3c0-b3f4-450e-8077-a2fd8854d058','Gerard Tithecote','gtithecote0@youtube.com','Database Administrator','1.jpg','Pellentesque eget tincidunt risus. Suspendisse ultrices luctus nisl nec maximus.','Red','Circle',1),(2,'3be22c71-d5b6-4500-852b-bfea3e1010e9','Ferris Buttner','fbuttner1@tinyurl.com','Senior Quality Engineer','2.jpg','Vestibulum congue nec enim venenatis sollicitudin. Curabitur a turpis fringilla purus vulputate rutrum in et nisi.','Yellow','Square',0),(3,'b301b41e-5903-40ad-b496-6874cb27422c','Hazlett Nunson','hnunson2@utexas.edu','Senior Sales Associate','3.jpg','Fusce ut dui nunc. Mauris in varius erat, nec bibendum risus. Vestibulum in est dictum.','Green','Square',1),(4,'60fa160f-35d1-417c-bdb6-dc2d95a41d2e','Holly Gallandre','hgallandre3@uol.com.br','Research Nurse','4.jpg','Ut at tortor consectetur, molestie nulla eget, dignissim purus. Curabitur vitae maximus est.','Blue','Triangle',0),(5,'60dc27c2-f959-4f10-8701-fc2495b7d30a','Monty Bracchi','mbracchi4@microsoft.com','Chief Design Engineer','5.jpg','Quisque tincidunt consequat condimentum. Donec porttitor ornare turpis ut accumsan.','Green','Rectangle',1);
/*!40000 ALTER TABLE `people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uploadedfiles`
--

DROP TABLE IF EXISTS `uploadedfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `uploadedfiles` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `textbox` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uploadedfiles`
--

LOCK TABLES `uploadedfiles` WRITE;
/*!40000 ALTER TABLE `uploadedfiles` DISABLE KEYS */;
INSERT INTO `uploadedfiles` VALUES (1,'37c89170-24c5-11ea-b499-3fad823277b1.jpg','tb123'),(2,'5dbfa760-24c5-11ea-b499-3fad823277b1.jpg','empty'),(3,'5fc09590-24c7-11ea-b3f1-01930d4eccbb.jpg','water');
/*!40000 ALTER TABLE `uploadedfiles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-22 15:05:20

