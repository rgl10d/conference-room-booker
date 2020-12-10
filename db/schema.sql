DROP DATABASE IF EXISTS rooms_db;
CREATE DATABASE rooms_db;
USE rooms_db;

CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `dateCreated` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
  )
  
  SELECT * FROM rooms_db.rooms;