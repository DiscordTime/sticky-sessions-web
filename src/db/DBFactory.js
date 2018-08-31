
module.exports.getDB = function (type) {
  console.log(type)
  var db
  switch (type) {
    case 'firebase':
    default:
      db = require('./firebaseDB')
  }
  return db
}
