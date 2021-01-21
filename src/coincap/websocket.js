const WebSocket = require('ws');

const websocket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin')

module.exports = websocket; 