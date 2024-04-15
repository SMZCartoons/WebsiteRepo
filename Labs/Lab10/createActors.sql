CREATE TABLE `actors` (
   `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `first_names` varchar(100) NOT NULL,
   `last_name` varchar(100) NOT NULL,
   `dob` date DEFAULT NULL,
   PRIMARY KEY (`actorid`)
);

INSERT INTO actors
VALUES (2, "Scarlett", "Johansson", "1959-12-03"),
   (3, "Chris", "Hemsworth", "1930-11-14"),
   (4, "Ron", "Livingston", "1900-10-04"),
   (5, "Shawesh", "Bert", "2000-02-13"),
   (6, "Hammah", "Roomba", "1980-05-18");