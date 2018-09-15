<template>
    <div class="note-card" >
        <p class="p-description">
            {{note.description}}
        </p>
        <md-card-actions md-alignment="space-between" class="p-user">
            <a v-on:click="filter_by_author">
              {{note.user}}
            </a>
        </md-card-actions>
    </div>
</template>

<script>
export default {
  name: 'note',
  props: ['note', 'filter_by_author']
}
</script>

<style scoped type="text/css" src="./Note/note.css">
