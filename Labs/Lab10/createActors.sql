CREATE TABLE `actors` (
   `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `first_names` varchar(100) NOT NULL,
   `last_names` varchar(100) NOT NULL,
   `dob` date DEFAULT NULL,
   PRIMARY KEY (`actorid`)
);