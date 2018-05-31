const http = require("http");
const PORTS = (process.env.PORTS).split(',') || [];
const PORT = process.env.PORT || 5000;

const server = http.createServer().listen(PORT);

let numPort = 0;

function roundRobinPort () {
    const port = PORTS[numPort];
    numPort++;

    if (numPort > PORTS.length - 1) {
        numPort = 0;
    }

    return port;
}

function randomPort () {
    return PORTS[Math.floor(Math.random() * (PORTS.length - 1))];
}

server.on("request", (req, res) => {
    const connector = http.request(
        {
            host: 'localhost',
            port: roundRobinPort(),
            path: req.url,
            method: req.method,
            headers: req.headers
        },
        resp => resp.pipe(res)
    );

    req.pipe(connector);
});