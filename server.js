const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = 5000;

app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);

  // Manejar el evento start-game y reenviar a todos los clientes
  socket.on('start-game', (data) => {
    const { nombre, apellido, id } = data;
    if (nombre && apellido && id) {
      io.emit('game-started', { message: `Juego iniciado por ${nombre} ${apellido}`, id });
    } else {
      socket.emit('error', { message: 'Faltan datos' });
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
