var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"7%#ll3R#R@nF#90^T&!e",
    database:"playlist_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected as id "+connection.threadId);
    afterConnection();
});

function afterConnection(){
    connection.query("SELECT * FROM playlist_db",function(err,response){
        if(err) throw err;
        console.table(response);
        connection.end();
    })
}