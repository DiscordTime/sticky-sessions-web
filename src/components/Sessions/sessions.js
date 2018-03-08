const db = require('@/db')
export default {
  name: 'Sessions',
  data () {
    return {
      title: 'Check your notes for this session',
      notes: []
    }
  },
  created () {
    const sessionId = this.$route.params.sessionId
    db.getNotes(sessionId, (notes) => {
      this.notes = notes
    })
  },
  methods: {
    export_click: function (event) {
      console.log('export!')
    }
  }
}
