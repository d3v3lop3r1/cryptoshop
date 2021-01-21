var websocket = require('./src/coincap/websocket');

    
websocket.onmessage = function(msg) {
    console.log(msg.data);

};
