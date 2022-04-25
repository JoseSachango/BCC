const http = require("http");
const fs  = require("fs");

const PORT = 8000;

function requestHandler(request,response){
    var url = request.url
    var responseData =""
    switch(url){
        case "index.html":
        case "index":
        case "/":
            fs.readFile(__dirname+"index.html",function(err,html){
                if(err){
                    throw err
                }

                response.writeHead(200,{"Content-Type":"text/html"})
            response.on("data",function(){
                console.log(html)
            })
            response.on("end",function(){
                response.end(html)
            })
            })
           

    }
}

const server = http.createServer()


server.listen(PORT);