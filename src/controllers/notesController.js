var callback = function(err, snapshot, res) {
	if(err) {
		console.err(err);
		res.send('ERROR!');
	} else {
		var array = [];
		snapshot.forEach(doc => {
	    	var data = doc.data()
	    	array.push(data)
	  	})
		res.send(array)	
	}
}

module.exports = function(proxy) {
	var module = {};
	module.getNotesFromSession = function(req, res) {
		var sessionId = req.params.sessionId
		proxy.getNotes(sessionId, res, callback)
	}	
	return module;
}
