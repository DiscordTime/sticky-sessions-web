<template>
  <div class="page-container">
    <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">{{ title }}</span>
          <download-excel :data  = "json_data_to_export" name = "sticky_sessions_export.xls">
              <md-button class="md-primary md-raised" >
                  Export
              </md-button>
          </download-excel>
    </md-app-toolbar>
    <md-app-content>
      <div id="container">
        <topic
          v-for="(notes, key) in notesMap"
          v-bind:key="key"
          v-bind:topic="key"
          v-bind:note_container_class="custom_class"
          @click.native="filter_topic(key)"
          v-if="filter_name == null || filter_name == key">
            <note
              v-for="note in sorted_notes(notes)"
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
