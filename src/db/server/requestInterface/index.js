const request = require('request')

module.exports = {
  getRequest (url, params, callback) {
    for (var key in params) {
      console.log('url', url)
      url = url + '/' + params[key]
    }
    request(url, (error, _, body) => {
      if (error) {
        console.log('error:', error)
        callback(error)
        return
      }
      console.log('body', body)
      callback(JSON.parse(body))
    })
  }
}
