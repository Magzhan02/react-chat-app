const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.json());

const rooms = new Map();

app.get('/rooms/:id', (req, resp) => {
  const { id: roomId } = req.params;
  let roomInfo = null;

  if (rooms.has(roomId)) {
    roomInfo = {
      users: [...rooms.get(roomId).get('users').values()],
      messages: [...rooms.get(roomId).get('messages').values()],
    };
  } else {
    roomInfo = { users: [], messages: [] };
  }

  resp.json(roomInfo);
});

app.post('/rooms', (req, resp) => {
  const { roomId } = req.body;

  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,

      new Map([
        ['users', new Map()],
        ['messages', []],
      ]),
    );
  }

  resp.send();
});

io.on('connection', (socket) => {
  console.log('user connected', socket.id);
  socket.on('ROOM:JOIN', ({ roomId, userName }) => {
    socket.join(roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);

    const users = [...rooms.get(roomId).get('users').values()];
    socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
  });

  socket.on('ROOM:NEW_MESSAGE', ({ roomId, userName, msg }) => {
    const obj = {
      roomId,
      userName,
      msg,
    };

    rooms.get(roomId).get('messages').push(obj);
    socket.broadcast.to(roomId).emit('ROOM:NEW_MESSAGE', obj);
  });

  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()];
        socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
      }
    });

    console.log('connected users', socket.id);
  });
});

server.listen(4444, (err) => {
  if (err) {
    throw Error(err);
  }

  console.log('Server started');
});
