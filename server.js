const express = require('express');
const app = express();

const envPath = './src/environment/'

const dbFactory = require(envPath + 'DBFactory')

var db;
var proxy;
var router;

module.exports = function(config) {
	var module = {};
	module.start = function() {
		db = dbFactory.getDB(config.db);
		proxy = require(envPath + 'proxy') (db);
		router = require(envPath + 'router') (app, proxy);

		startListening(config.port);
	}

	return module;
}

function startListening(port) {
	app.listen(port, (req, res) => {
		console.log('listening to port ' + port);
	}) 
}
