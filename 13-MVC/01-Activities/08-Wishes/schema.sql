DROP DATABASE IF EXIST wishes_db;

CREATE DATABASE wishes_db;

USE wishes_db;


CREATE TABLE wishes (
    id INTEGER AUTO_INCREMENT NOT NULL,
    wish VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);


