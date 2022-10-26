const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/ping', (_, res) => {
  res.json({ message: '/ pong' });
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log('SERVER_PORT: 8000');
});
