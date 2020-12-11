CREATE DATABASE reserve_db;
USE reserve_db;

-- rooms table
-- id(PRIMARY)
-- name(STRING)
-- Status (BOOLEAN): available / not available
-- timestamp (createdAt?)
 
CREATE TABLE `rooms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `room_name` varchar(45) NOT NULL,
  `status` BOOLEAN DEFAULT false,
  `date-created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
  )
  
  SELECT * FROM rooms;