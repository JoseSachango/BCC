const http = require("http");
const fs  = require("fs");
const { deepStrictEqual } = require("assert");

const PORT = 8080

function switchCase(arg){

    switch(arg){

        case "home.html":
        case "home":
        case "/":
                fs.readFile(__dirname+"home.html",function(err,html){
                    if(err){
                        throw err
                    }

                    response.writeHead(200,{"Content-Type":"text/html"});
                    response.end(html);
                })

        case "favoriteFood.html":
        case "favoirteFood":
                fs.readFile(__dirname+"favoriteFood.html",function(err,html){
                    if(err){
                        throw err
                    }

                    response.writeHead(200,{"Content-Type":"text/html"});
                    response.end(html);
                })
                
        case "favoriteMovies.html":
        case "favoriteMovies":
            fs.readFile(__dirname+"favoirteMovies.html",function(err,html){
                if(err){
                    throw err
                }
            
            response.writeHead(200,{"Content-Type":"text/html"});
            response.end(html)
            })

        case "favoriteCSSFramework.html":
        case "favoriteCSSFramework":
            fs.readFile(__dirname+"favoriteCSSFramework.html",function(err,html){
                if(err){
                    throw err
                }

                response.writeHead(200,{"Content-Type":"text/html"});
                response.end(html);
            })






    }

}

function handleRequests(request,response){

    var path = request.url;

   switchCase(path);

   
}




  
const server = http.createServer(handleRequests)

server.listen(PORT)