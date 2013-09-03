var express = require('express');
var app = express();

//bind socket to express
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

//receive socket io stuff

io.sockets.on('connection', function(socket) {

  //receive message
  socket.on('send message', function(data) {
    // console.log(data);
    io.sockets.emit('new message', data);
  });


});

server.listen(3001);