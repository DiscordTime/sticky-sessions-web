const request = require('./requestInterface')
const HOST = 'http://localhost:3000'
const serverInfo = {
  SESSIONS: HOST + '/sessions',
  NOTES: HOST + '/notes'
}

module.exports = {
  getSessions (callback) {
    request.getRequest(serverInfo.SESSIONS, null, (jsonBody) => {
      const mapper = require('./mapper')
      mapper.mapToSessions(jsonBody, callback)
    })
  },

  getNotes (sessionId, callback) {
    const params = {
      session_id: sessionId
    }
    request.getRequest(serverInfo.NOTES, params, callback)
  }
}
