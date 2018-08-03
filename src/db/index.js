const config = require('../../config')
const dbFactory = require('./DBFactory')
this.db = dbFactory.getDB(config.DB)

module.exports.getNotes = function (sessionId, callback) {
  console.log('GET NOTES')
  console.log(this.db)
  this.db.getNotes(sessionId, (notes) => {
    callback(notes)
  })
}
