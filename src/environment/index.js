const proxy = require('./proxy');
const router = require('./router');
const controllers = require('../controllers/controllers')

module.exports = {
	proxy : proxy,
	router : router, 
	controllers : controllers
}