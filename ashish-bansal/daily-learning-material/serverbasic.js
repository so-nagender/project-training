var http = require('http');

function onRequest(request,response){
    console.log("a request was made ",request.url);
    response.writeHead(200,{"Context-Type" : "text/plain"});
    response.write("your server has a response");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server is running");