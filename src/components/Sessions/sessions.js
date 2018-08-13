const db = require('@/db')
export default {
  name: 'Sessions',
  data () {
    return {
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
