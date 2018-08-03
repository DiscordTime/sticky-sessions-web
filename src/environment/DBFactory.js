module.exports = {
  getDB: function (dbType) {
    var db
    switch (dbType) {
      case 'firebase':
      default:
        db = require('./FirebaseDB')
        break
    }
    return db
  }
}
