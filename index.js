const config = require('./keys/config');
const server  = require('./server') (config);
console.log(config);
console.log(server);
server.start();