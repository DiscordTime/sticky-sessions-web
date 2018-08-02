const envPath = './src/environment/'
const config = require('./keys/config');
const proxy = require(envPath + 'proxy');
const router = require(envPath + 'router');
const controllers = require('./src/controllers/controllers')

const server  = require('./server') (config, proxy, router, controllers);

console.log(config);
console.log(server);


server.start();