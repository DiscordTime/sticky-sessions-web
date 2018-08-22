<template>
  <div class="page-container">
    <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">{{ title }}</span>
      <md-button class="md-primary md-raised" @click=export_click >
        Export
      </md-button>
    </md-app-toolbar>
    <md-app-content>
      <div id="container">
        <topic
          v-for="(notes, key) in notesMap"
          v-bind:key="key"
          v-bind:topic="key">
            <note
              v-for="note in notes"
              v-bind:note="note"
              v-bind:key="note.id"/>
        </topic>
      </div>
    </md-app-content>
    </md-app>
  </div>
</template>

<script src="./Sessions/sessions.js"/>
<style scoped type="text/css" src="./Sessions/sessions.css"/>
