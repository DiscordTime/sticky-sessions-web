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

<script src="./sessions.js"/>

<style scoped type="text/css" src="./sessions.css"/>
