document.addEventListener(
  'DOMContentLoaded',
  function() {
    var checkPageButton = document.getElementById('checkPage');
    let htraaSocket = new WebSocket('ws://echo.websocket.org');
    // htraaSocket.onopen = function (evt) {
    //     alert("connected")
    // };

    htraaSocket.onmessage = function(event) {
      alert(event.data);
    };

    checkPageButton.addEventListener(
      'click',
      function() {
        alert(htraaSocket);
      },
      false,
    );
  },
  false,
);
