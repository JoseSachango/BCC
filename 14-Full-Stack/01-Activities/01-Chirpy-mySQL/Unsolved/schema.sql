CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id INTEGER NOT NULL,
  author VARCHAR(40) NOT NULL,
  chirp VARCHAR(40) NOT NULL,
  time_created TIME(0)

);