<template>
    <div class="note-card" >
        <p class="p-description">
            {{note.description}}
        </p>
        <md-card-actions md-alignment="space-between" class="p-user">
            {{note.user}}
        </md-card-actions>
    </div>
</template>

<script>
export default {
  name: 'note',
  props: ['note']
}
</script>

<style scoped type="text/css" src="./Note/note.css">
