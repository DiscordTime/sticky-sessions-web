<template>
  <div class="page-container">
    <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">{{ title }}</span>
      <md-button class="md-primary md-raised bt-export" @click=export_click >
        Export
      </md-button>
    </md-app-toolbar>
    <md-app-content>
      <div id="container">
        <div
          v-for="(notes, key) in notesMap"
          v-bind:key="key"
          class="div-topic">

          <span class="md-display-1 topic-title" >
            {{key}}
          </span>
            <md-card
              v-for="note in notes"
              header=" "
              v-bind:key="note.id"
              border-variant="secondary"
              header-border-variant="secondary"
              class="note-card text-center" >
              <md-card-content>
                    {{note.description}}
              </md-card-content>
              <md-card-actions>
                <md-button class="md-primary" disabled>{{note.user}}</md-button>
              </md-card-actions>

            </md-card>
        </div>
      </div>
    </md-app-content>
    </md-app>
  </div>
</template>

<script src="./Sessions/sessions.js"/>
<style scoped type="text/css" src="./Sessions/sessions.css"/>
