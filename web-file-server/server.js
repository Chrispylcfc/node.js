var http = require('http');
var fs = require('fs');

// 404 Response
function send404Response(response) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write("Error 404: Page not Found!!!");
  response.end();
}

// Handle a User Request
function onRequest(request, response) {
  if (request.method == 'GET' && request.url == '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('./web-file-server/index.html').pipe(response);
  } else {
    send404Response(response);
  }
}

http.createServer(onRequest).listen(8000);
console.log("Server is now running...");
