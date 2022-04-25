const mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password:"7%#ll3R#R@nF#90^T&!e",
    database: "top_songsDB"
});

connection.connect(function(err){
    if(err) throw err;

    firstQuery()
    secondQuery()
})

function firstQuery(){
    var query = connection.query("SELECT * from top5000 WHERE ?",{artist:"Metallica"},function(err,response){
        if(err) throw err;
        console.table(response);
        connection.end();

    })
}