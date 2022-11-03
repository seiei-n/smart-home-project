import { turnOn } from './Operation';
import { turnOff } from './Operation';
const http = require('http');
const port = process.env.PORT;

const requestHandler = (request, response) => {
    console.log(request.url);
    if (request.url === '/on') {
        turnOn();
    } else if (request.url === '/off') {
        turnOff();
    }
    response.end('Hello Node.js Server!');
    }

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
}
);


