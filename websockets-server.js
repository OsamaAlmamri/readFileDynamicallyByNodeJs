var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server;
var port = 3001;
var password = 'osama';
var ws = new WebSocketServer({
    port: port
});

var messages = [];
console.log('websockets	server	started');

ws.on('connection', function (socket) {
    var auther = 0;
    console.log('client	connection established');
    socket.send("enter pass word");


    socket.on('message', function (data) {
        if (data == 'osama' & auther == 0) {
            messages.forEach(function (message) {
                socket.send(message);
            });
            auther = 1;

        } else if (auther == 0) {
            socket.send('password Wrong');
        } else {
            console.log('message received: ' + data);
            messages.push(data);

            ws.clients.forEach(function (clint) {
                clint.send(data);
            });
        }

    });
});
