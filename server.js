const express = require('express');
const http = require('http');


const app = express();
const path = require('path');

// Setup App
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Setup Server
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(
  port,
  function () {
    console.log(`Server listening on port ${port}`);
  }
);

