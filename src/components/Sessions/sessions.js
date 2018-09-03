import Topic from '@/components/Topic'
import Note from '@/components/Note'

const db = require('@/db')
export default {
  name: 'Sessions',
  data () {
    return {
      windowHeight: 0,
      title: 'Check your notes for this session',
      notesMap: {},
      json_data_to_export: []
    }
  },
  created () {
    const sessionId = this.$route.params.sessionId
    db.getNotes(sessionId, (map) => {
      map.forEach(note => {
        const topic = note.topic
        if (!this.notesMap[note.topic]) {
          this.notesMap[topic] = []
        }
        this.notesMap[topic].push(note)
      })

      this.json_data_to_export = map
    })
  },
  methods: {
    export_click: function (event) {
      console.log('export!')
    }
  },
  components: {
    'topic': Topic,
    'note': Note
  }
}
