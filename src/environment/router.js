const notesFromSessionURL = '/session/:sessionId'

module.exports.init = function (app, controllers) {
  app.get(notesFromSessionURL, controllers.notesController.getNotesFromSession)
}
