const http = require('http');
const port = process.env.PORT || 5050;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Grupa ZDTESTpol134 jest SUPER SUPER!');
}

const server = http.createServer(requestListener);
server.listen(port);