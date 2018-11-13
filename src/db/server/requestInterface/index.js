const request = require('request')

module.exports = {
  getRequest (url, params, callback) {
    for (var key in params) {
      url = url + '/' + params[key]
    }
    request(url, (error, _, body) => {
      if (error) {
        console.log('error:', error)
        callback(error)
      }
      const mapper = require('./mapper')
      mapper.mapToSessions(body, callback)
    })
  }
}
