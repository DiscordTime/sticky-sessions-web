module.exports = {
  getDB: function (type) {
    console.log(type)
    var db
    switch (type) {
      case 'server':
        db = require('./server')
        break
      case 'firebase':
      default:
        db = require('./firebaseDB')
        break
    }
    return db
  }
}
