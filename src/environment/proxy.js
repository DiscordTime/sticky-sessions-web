var db;

module.exports.getNotes = function(sessionId, res, callback) {
	this.db.getNotes('notes', sessionId, (err, snapshot) => {
		callback(err, snapshot, res)
	})
}

module.exports.init = function(db) {
	this.db = db;
}