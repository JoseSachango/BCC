DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (

    id INTEGER(30) AUTO_INCREMENT,
    title VARCHAR(50),
    artist VARCHAR(50),
    genre VARCHAR(50),
    PRIMARY KEY(id)

)

INSERT INTO songs(title,artist,genre)
VALUES("Three little birds","Bob Marley","Reggae");

INSERT INTO songs(title,artist,genre)
VALUES("Redemption Song", "Bob Marley","Reggae");

