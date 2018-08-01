var db;

module.exports = function() {
	var module = {};

	module.getNotes = function(sessionId, res, callback) {
		console.log(db)
		db.getNotes('notes', sessionId, (err, snapshot) => {
			callback(err, snapshot, res)
		})
	}

	return module;
}

module.exports.init = function(db) {
	this.db = db;
}