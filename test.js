var net = require('net');
var clients = [];
var server = net.createServer(function(socket) {

  //add any incomint socket to a clients array
  clients.push(socket);

  socket.on('data', function (data) {
    //iterate over cllients and send data
    for ( var i = 0; i < clients.length; i++) {
      clients[i].write(data);
    }
  });

  socket.on('end', function() {
    var i = clients.indexOf(socket);
    clients.splice(i,1);
  })

});

server.listen(8000);