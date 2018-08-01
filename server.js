const express = require('express');
const app = express();

const envPath = './src/environment/'

const dbFactory = require(envPath + 'DBFactory')

module.exports = function(config, proxy, router, controllers) {
	var module = {};
	
	module.start = function() {
		db = dbFactory.getDB(config.db);

		proxy.init(db);
		controllers.init(proxy)
		router.init(app, controllers);

		startListening(config.port);
	}

	return module;
}

function startListening(port) {
	app.listen(port, (req, res) => {
		console.log('listening to port ' + port);
	}) 
}
