$('#getEvents').click(() => {
  const socket = io.connect('http://10.0.70.207:8000');
  socket.emit('getAllEvents');
});

socket.on('allEvents', function(data) {
  alert(data);
  socket.close();
});
