const express = require("express");
const mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 3010;

var connection = mysql.createConnection({
    host:"localhost",
    port:3010,
    user:"root",
    password:"7%#ll3R#R@nF#90^T&!e",
    database: "wishes_db"

});

connection.connect(function(err){
    if(err) throw err
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars")