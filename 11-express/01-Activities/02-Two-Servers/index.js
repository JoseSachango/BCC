const server = require("http");

const PORT1 = 7000;
const PORT2 = 7500;


function handleRequests1(request,response){
    respnose.end("The first request handler is working: "+response.url)
}

function handleRequests2(request,response){
    response.end("The second request handler is working: "+response.url)
}

var server1 = http.createServer(handleRequests1);
var server2 = http.createServer(handleRequests2);


server1.listen(PORT1, function(){
    console.log("This is an inspirational quote")
});

server2.listen(PORT2, function(){
    console.log("This is the second inspirational quote")
});



