const firebase = require('firebase/app')
require('firebase/firestore')
const config = require('./keys')
const firebaseapp = firebase.initializeApp(config)

const firestore = firebaseapp.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

const dbInfo = {
  NOTES_COLLECTION: 'notes',
  SESSION_ID_FIELD: 'sessionId'
}

module.exports = function () {
  return firestore
}

function get (table, column, condition, data, callback) {
  var query = firestore.collection(table)
  if (column != null && condition != null && data != null) {
    query = query.where(column, condition, data)
  }

  query.get().then(querySnapshot => {
    callback(querySnapshot)
  })
}

module.exports.getNotes = function (sessionId, callback) {
  const mapper = require('./mapper')
  get(dbInfo.NOTES_COLLECTION, dbInfo.SESSION_ID_FIELD, '==', sessionId, (querySnapshot) => {
    mapper.parseSnapshotToMap(querySnapshot, (map) => {
      callback(map)
    })
  })
}
