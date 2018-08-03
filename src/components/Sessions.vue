<template>
  <div>
    <h1>{{ title }}</h1>
    <div
      v-for="note in notes"
      v-bind:key="note.id"
      class="div-notes"
    >
      <div class="collection-item">
        <div>{{note.topic}}</div>
        <div>{{note.user}}</div>
        <div>{{note.description}}</div>
      </div>
    </div>
    <div id="div-export">
      <button @click=export_click>Export</button>
    </div>
  </div>
</template>

<script>

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
</script>

<style scoped type="text/css">
  .div-notes {
    background-color: #FFFFFF;
    height: 50px;
    margin: 5px;
  }

  .collection-item {
    align-items: center;
    display: flex;
    justify-content: space-around;
  }
</style>
