const moment = require('moment')

module.exports.parseSnapshotToMap = function (querySnapshot, callback) {
  var result = []
  querySnapshot.forEach(doc => {
    var note = doc.data()
    note['id'] = doc.id

    result.push(note)
  })

  callback(result)
}

module.exports.parserSnapshotToSessions = function (querySnapshot, callback) {
  var sessions = []

  querySnapshot.forEach(doc => {
    var session = doc.data()
    const formatted = moment(moment.unix(session.timestamp.seconds)).format('DD-MM-YYYY HH:mm')
    session['id'] = doc.id
    session['time'] = formatted
    session['name'] = session.title

    sessions.push(session)
  })
  callback(sessions)
}
