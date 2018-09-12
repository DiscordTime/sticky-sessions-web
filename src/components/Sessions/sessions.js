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
      json_data_to_export: [],
      filter_name: null,
      custom_class: 'div-topic'
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
    filter_topic (topic) {
      if (topic === this.filter_name) {
        this.filter_name = null
        this.custom_class = 'div-topic'
      } else {
        this.filter_name = topic
        this.custom_class = 'div-topic-row'
      }
    }
  },
  components: {
    'topic': Topic,
    'note': Note
  }
}
