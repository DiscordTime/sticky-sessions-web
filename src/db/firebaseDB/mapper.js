const moment = require('moment')

module.exports.parseSnapshotToMap = function (querySnapshot, callback) {
  var map = {}
  querySnapshot.forEach(doc => {
    var note = doc.data()
    note['id'] = doc.id
    const topic = note.topic
    if (!map[note.topic]) {
      map[topic] = []
    }
    map[topic].push(note)
  })

  callback(map)
}

module.exports.parserSnapshotToSessions = function (querySnapshot, callback) {
  var sessions = []

  querySnapshot.forEach(doc => {
    var session = doc.data()
    const formatted = moment(moment.unix(session.timestamp.seconds)).format('DD-MM-YYYY HH:mm')
    session['id'] = doc.id
    session['time'] = formatted
    sessions.push(session)
  })
  callback(sessions)
}
