import * as net from "net";
import {Socket} from "net";

const server = net.createServer();
server.on('connection', handleConnection);
server.listen(3000);

function handleConnection(socket : Socket) {

    socket.on('data', (chunk) => {
        console.log('Received chunk:\n', chunk.toString());
    });

    socket.on('error', (error) => {
        console.error('Socket error:', error);
        socket.end();
    });

    socket.write('HTTP/1.1 200 OK\r\nServer: my-web-server\r\nContent-Length: 0\r\n\r\n');
}