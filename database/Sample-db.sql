CREATE DATABASE  IF NOT EXISTS `smashu` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `smashu`;
-- MySQL dump 10.13  Distrib 5.6.23, for Win32 (x86)
--
-- Host: localhost    Database: smashu
-- ------------------------------------------------------
-- Server version	5.7.26-log

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `users_id` int(11) NOT NULL,
  `posts_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_users1_idx` (`users_id`),
  KEY `fk_comments_posts1_idx` (`posts_id`),
  CONSTRAINT `fk_comments_posts` FOREIGN KEY (`posts_id`) REFERENCES `posts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'well it\'s also a reflector so perhaps it\'s to balance it?',0,1),(2,'This just about sums it up. The only other counter move that doubles as a reflector is K. Rool\'s Gut Check, and that only works from the front and has considerable endlag if it doesn\'t counter or reflect anything; Palutena\'s Counter/Reflect Barrier doesn\'t have this limitation, so I wouldn’t be surprised if they instead made it weaker than the average counterattack as a balancing factor.\n',1,1),(3,'I don\'t find it underwhelming at all. As punished faygo punished faygo pointed out, Palu\'s counter is also a reflector so making the counterattack a little weaker is an appropriate balance. But even if it\'s weaker, it doesn\'t seem to me like it\'s a huge difference in power. I\'ve never had any issue with the hitbox being small either.',2,1);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `content` text NOT NULL,
  `tag` text NOT NULL,
  `users_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_posts_users_idx` (`users_id`),
  CONSTRAINT `fk_posts_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Palus counter underwhelming?','Dont you think that her counter is kinda subpar In comparison to everyone else?\\n\\nI mean, on activation the hitbox is a very small area in front of her and sometimes leave you even in a worst position because you can get counter countered when she wiffs the hit.\\n\\nAlso the effect is sub par. It kills but at very high %s or after countering an inmensely poweful hit (all counters do this anyway but way earlier)\\n\\nI would not mind the power if the hitbox was bigger tho, or at least had a better animation more fitting for a goddes.\\n\\nLook at corrins counter for example.\\n\\nPalutenas counter doesnt need to be as mounstrous, but if the counter acted as a hitbox around her, with the same launching power and dmg, i would be pleased with it.\\n\\nRight now i feel it uninspired and weak. If she could receive a buff, this would be probably my first and maybe onlye wish.\\n\\nThoughts?','Palutena',0),(2,'Possible New Palutena Kill Confirms','I decided to go to training mode for a little bit and I found some neat kill confirms with Palutena.\\n\\nNair (first hit) to Up Smash at 100%\\nNair (first hit) to Side Smash at 100%\\nNair (first hit) to Up Tilt at about 135%\\nNair (first hit) to Side Tilt at around 120% when near the ledge.\\nDown throw to Dair at around 80%\\n\\nThe first two are better for bigger and heavier foes while the third one works better for lightweight characters. The fourth one is not super useful, but I think it is neat. The fifth one is just great for style but really difficult to pull off. These kill confirms might already have been shared or discovered and if they have been, I am sorry. These were just some neat combos that I discovered on my own while practicing with Palutena in training mode that I thought I would share with you guys.','Palutena',0);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (0,'Admin','$2b$10$nsc3NzeRh3Mvit52NiSpje5UpYh5YLV0ex.EJNgBmKKtnMEAv31NG','admin@smashu.com'),(1,'sasuke','$2b$10$lbK2V0LLhIJUWuFPTftWjumJkXcryiHA2HTCupF.mVkDGrAyFv3d6','sasuke@konoha.com'),(2,'naruto','$2b$10$N/r1y9v4uowStuUObnwH1uq2YXDw637sDqyhYPmFa3m/4Grl/J8ea','naruto@konoha.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-01 14:53:39
