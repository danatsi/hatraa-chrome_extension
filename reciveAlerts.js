// console.log('hi');
// let htraaSocket = new WebSocket('ws://echo.websocket.org');
// htraaSocket.onopen = function(evt) {
//   alert('connected');
// };

// htraaSocket.onmessage = function(event) {
//   alert(event.data);
// };
alert('in js');
const socket = io.connect('http://10.0.70.207:8000');

socket.on('missile', function(data) {
  alert(data);
});
