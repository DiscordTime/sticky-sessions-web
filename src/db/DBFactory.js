
module.exports.getDB = function (type) {
  var db
  switch (type) {
    case 'firebase':
    default:
      db = require('./firebaseDB')
  }
  return db
}
