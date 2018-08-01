const admin = require('firebase-admin');
const ssAccount = require('../../keys/serviceAccountKey.json')
admin.initializeApp( {
  credential: admin.credential.cert(ssAccount)
})

const db = admin.firestore()

function executeQuery(query, callback) {
  query.get()
  .then(querySnapshot => {
    callback(null, querySnapshot)
  })
  .catch(err => {
    console.error('Error getting document', err)
    callback(err, null)
  })
}

module.exports.getNotes = function(table, sessionId, callback) {
  var query = db.collection(table).where('sessionId', '==', sessionId);
  executeQuery(query, callback)
}