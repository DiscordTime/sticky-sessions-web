<template>
    <div class="subcontainer-topic">
          <a
            class="md-display-1 topic-title"
            v-on:click="filter_by_topic">
            {{topic}}
          </a>
          <div v-bind:class="note_container_class">
            <slot></slot>
          </div>
    </div>
</template>

<script src="./Topic/topic.js"/>

<style scoped type="text/css" src="./Topic/topic.css">
