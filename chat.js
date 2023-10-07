const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/src'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const users = {};

io.on('connection', (socket) => {
  socket.on('user login', (username) => {
    if (!users[socket.id]) {
      users[socket.id] = username;
      io.emit('chat message', { nickname: 'Server', message: `${username} has joined the chat.` });
    }
  });

  socket.on('chat message', (data) => { // Receive the data object
    const username = users[socket.id];
    io.emit('chat message', { nickname: username, message: data.message }); // Send only the message
  });

  socket.on('disconnect', () => {
    const username = users[socket.id];
    if (username) {
      delete users[socket.id];
      io.emit('chat message', { nickname: 'Server', message: `${username} has left the chat.` });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});


