const db = require('@/db')
export default {
  name: 'Sessions',
  data () {
    return {
      windowHeight: 0,
      title: 'Check your notes for this session',
      notesMap: {}
    }
  },
  created () {
    const sessionId = this.$route.params.sessionId
    db.getNotes(sessionId, (map) => {
      this.notesMap = map
    })
  },
  methods: {
    export_click: function (event) {
      console.log('export!')
    }
  }
}
