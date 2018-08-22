<template>
    <div class="div-topic">
          <span class="md-display-1 topic-title" >
            {{topic}}
          </span>
          <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'topic',
  props: ['topic']
}
</script>

<style scoped type="text/css" src="./Topic/topic.css">
