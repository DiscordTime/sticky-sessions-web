const db = require('@/db')

export default {
  name: 'Index',
  data () {
    return {
      sessions: {},
      title: 'See the active Sessions'
    }
  },
  created () {
    db.getSessions((sessions) => {
      this.sessions = sessions
    })
  }
}
