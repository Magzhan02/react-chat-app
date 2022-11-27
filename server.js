const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app);

app.get('/', (req, resp) => {
  resp.send('HEllo');
});

app.listen(4444);
