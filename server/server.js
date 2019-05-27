const io = require('socket.io'), server = io.listen(8000);

let sequenceNumberByClient = new Map();

// event fired every time a new client connects:
server.on('connection', socket => {
  console.info(`Client connected [id=${socket.id}]`);
  // initialize this client's sequence number
  sequenceNumberByClient.set(socket, 1);
  socket.emit('missile', 'hello from server');

  // when socket disconnects, remove it from the list:
  socket.on('disconnect', () => {
    sequenceNumberByClient.delete(socket);
    console.info(`Client gone [id=${socket.id}]`);
  });
});

// sends each client its current sequence number
setInterval(() => {
  for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
    client.emit('missile', 'hello from server: ');
    sequenceNumberByClient.set(client, sequenceNumber + 1);
  }
}, 30000);
