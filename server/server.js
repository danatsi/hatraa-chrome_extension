const io = require('socket.io'), server = io.listen(8000);

let sequenceNumberByClient = new Map();
const alert = {
  incidentId: '109',
  event: 'nonErgant',
  category: 'security',
  areaDescription: 'cities',
  polygon: [1, 2, 3, 4],
};
// event fired every time a new client connects:
server.on('connection', socket => {
  console.info(`Client connected [id=${socket.id}]`);
  // initialize this client's sequence number
  sequenceNumberByClient.set(socket, 1);
  //socket.emit('missile', 'you are connected!');

  // when socket disconnects, remove it from the list:
  socket.on('disconnect', () => {
    sequenceNumberByClient.delete(socket);
    console.info(`Client gone [id=${socket.id}]`);
  });
});

// sends each client its current sequence number
setInterval(() => {
  for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
    client.emit(alert.event, alert);
    sequenceNumberByClient.set(client, sequenceNumber + 1);
  }
}, 30000);
