DROP DATABASE IF EXISTS seinfeld;
CREATE DATABASE seinfeld;
USE seinfeld;

CREATE TABLE actors (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  coolness_points INTEGER NOT NULL,
  attitude VARCHAR(60) NOT NULL,
  PRIMARY KEY(id)
  );
  
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Elaine", 80, "righteous");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("Kramer", 20, "doofus");
INSERT INTO actors (name, coolness_points, attitude) VALUES ("George", 70, "selfish");



SELECT * FROM actors






