const request = require('./requestInterface')
const HOST = 'http://localhost:3000'
const serverInfo = {
  SESSIONS: HOST + '/sessions'
}

module.exports = {
  getSessions (callback) {
    request.getRequest(serverInfo.SESSIONS, null, callback)
  },

  getNotes (sessionId, callback) {
    console.log(sessionId)
    console.log(callback)
  }
}
