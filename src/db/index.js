const config = require('../../config')
const dbFactory = require('./DBFactory')

this.db = dbFactory.getDB(config.build.DB)

module.exports.getNotes = function (sessionId, callback) {
  this.db.getNotes(sessionId, (notes) => {
    callback(notes)
  })
}

module.exports.getSessions = function (callback) {
  this.db.getSessions((sessions) => {
    callback(sessions)
  })
}
