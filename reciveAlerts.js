// console.log('hi');
// let htraaSocket = new WebSocket('ws://echo.websocket.org');
// htraaSocket.onopen = function(evt) {
//   alert('connected');
// };

// htraaSocket.onmessage = function(event) {
//   alert(event.data);
// };
alert('in js');
var socket = io.connect('http://192.168.56.1:8000');
socket.on('connect', function() {
  alert('HI');
});
