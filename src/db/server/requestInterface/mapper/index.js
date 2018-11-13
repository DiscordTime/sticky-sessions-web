const moment = require('moment')

module.exports.mapToSessions = function (body, callback) {
  console.log(body)
  const json = JSON.parse(body)
  var sessions = []

  for (var index in json) {
    var session = {}
    session['id'] = json[index].id
    session['topics'] = json[index].topics
    session['timestamp'] = json[index].timestamp
    const formatted = moment(moment.unix(session.timestamp._seconds)).format('DD-MM-YYYY HH:mm')
    session['time'] = formatted

    // TODO: Remove when app define the actual name.
    if (session.topics.length === 4) {
      session['name'] = 'Gain & Pleasure'
    } else {
      session['name'] = 'Starfish'
    }

    sessions.push(session)
  }
  callback(sessions)
}
