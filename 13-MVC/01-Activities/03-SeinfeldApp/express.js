const mysql = require("mysql");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3007;

const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user: "root",
    password: "7%#ll3R#R@nF#90^T&!e",
    database: "seinfeld"

})

connection.connect(function(err){
    if(err) throw err
    //console.log("connection ad id "+ connection.threadId)
})


app.get("/:cast/:att?",function(request,response){
    var cast = request.params.cast;
    var att = request.params.att;

    
    switch(cast){
        case "cast":
            connection.query("SELECT * FROM actors",function(err,data){
                if(err) throw err
                console.table(data)

                response.send(`<h1>${data[0].name}</h1>`)
                //
                
            })
            break;
        default:
            response.send( "Not working")
            console.log("Not working")
    }
})


app.listen(PORT,function(){
    console.log("Server up and running");
});