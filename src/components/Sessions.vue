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
            <div
              v-for="note in notes"
              v-bind:key="note.id"
              class="note-card" >
              <!-- <md-card-content class="card-text"> -->
                <p class="p-description">
                    {{note.description}}
                </p>
                <p class="p-user">
                  {{note.user}}
                </p>
                <div class="cornershadow"> </div>
              <!-- </md-card-content> -->
              <!-- <md-card-actions>
                <md-button class="md-primary" disabled>{{note.user}}</md-button>
              </md-card-actions> -->
            </div>
        </div>
      </div>
    </md-app-content>
    </md-app>
  </div>
</template>

<script src="./Sessions/sessions.js"/>
<style scoped type="text/css" src="./Sessions/sessions.css"/>
