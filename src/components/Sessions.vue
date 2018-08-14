<template>
  <div>
    <h1>{{ title }}</h1>
    <div id="container">
      <div
        v-for="(notes, key) in notesMap"
        v-bind:key="key"
        class="div-topic">

        <p class="topic-title">
          {{key}}
        </p>

        <b-card
          v-for="note in notes"
          v-bind:key="note.id"
          v-bind:header="note.user"
          border-variant="secondary"
          header-border-variant="secondary"
          class="note-card text-center" >
            <p class="card-text">
                {{note.description}}
            </p>
        </b-card>
    </div>
  </div>
  <div id="div-export">
    <button @click=export_click>Export</button>
  </div>
  </div>
</template>

<script src="./Sessions/sessions.js"/>

<style scoped type="text/css" src="./Sessions/sessions.css"/>
