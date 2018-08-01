const nodesFromSessionURL = '/session/:sessionId'

module.exports.init = function(app, controllers) {
	app.get(nodesFromSessionURL, controllers.notesController.getNotesFromSession);
}