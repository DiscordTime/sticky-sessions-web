module.exports = function(db) {
	var module = {};
	
	module.getNotes = function(sessionId, res, callback) {
		console.log(db)
		db.getNotes('notes', sessionId, (err, snapshot) => {
			callback(err, snapshot, res)
		})
	}

	return module;
}