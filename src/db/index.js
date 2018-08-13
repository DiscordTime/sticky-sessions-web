const config = require('../../config')
const dbFactory = require('./DBFactory')
this.db = dbFactory.getDB(config.DB)

module.exports.getNotes = function (sessionId, callback) {
  this.db.getNotes(sessionId, (notes) => {
    callback(notes)
  })
}
