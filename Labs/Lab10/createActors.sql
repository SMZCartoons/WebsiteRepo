CREATE TABLE `actors` (
   `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `firstname` varchar(100) NOT NULL,
   `latename` varchar(100) NOT NULL,
   `year` DATE DEFAULT NULL,
   PRIMARY KEY (`movieid`)
);