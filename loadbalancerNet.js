
//avec net
const PORTS = (process.env.PORTS).split(',') || [];
const PORT = process.env.PORT || 5001;
var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

function randomPort () {
    return PORTS[Math.floor(Math.random() * (PORTS.length - 1))];
}

net.createServer(function (server) {

    let port = 0;// variable to define the port
    server.on('data', function(data){
        port = randomPort();
        net.connect({port: port, host: 'localhost'}, function(){
            console.log('go to server with port : ' + port); // log server
            this.write(data);
        });
    })
}).listen(PORT);