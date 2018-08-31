const firebase = require('firebase/app')
require('firebase/firestore')
const config = require('./keys')
const firebaseapp = firebase.initializeApp(config)

const firestore = firebaseapp.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

const dbInfo = {
  NOTES_COLLECTION: 'notes',
  SESSIONS_COLLECTION: 'sessions',
  SESSION_ID_FIELD: 'session_id',
  TIMESTAMP_FIELD: 'timestamp'
}

module.exports = function () {
  return firestore
}

function get (table, column, condition, data, callback, orderByField, orderByOrientation) {
  var query = firestore.collection(table)
  if (column != null && condition != null && data != null) {
    query = query.where(column, condition, data)
  }

  if (orderByField && orderByOrientation) {
    query = query.orderBy(orderByField, orderByOrientation)
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

module.exports.getSessions = function (callback) {
  const mapper = require('./mapper')
  get(dbInfo.SESSIONS_COLLECTION, null, null, null, (querySnapshot) => {
    mapper.parserSnapshotToSessions(querySnapshot, (sessions) => {
      callback(sessions)
    })
  }, dbInfo.TIMESTAMP_FIELD, 'desc')
}
