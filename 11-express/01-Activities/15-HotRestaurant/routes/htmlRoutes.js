var path = require("path")

module.exports= function(app){


    app.get("/index",function(request,response){
        response.sendFile(path.join(__dirname,"../public/index.html"))
    });


    app.get("/reserve",function(request,response){
        response.sendFile(path.join(__dirname,"../public/reserve.html"))
    });


    app.get("/tables",function(request,response){
        response.sendFile(path.join(__dirname,"../public/tables.html"))
    });

   


}
