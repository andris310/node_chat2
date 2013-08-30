var http = require('http');

function doStuff(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  var pathname = req.url
  res.write("hello world" );
  res.end();
}

var server = http.createServer(doStuff);

server.listen(3001);