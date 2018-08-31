<template>
<div id="page-container">
    <div id="toolbar">
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{ title }}</span>
      </md-app-toolbar>
    </div>
    <div>
      <md-list>
        <md-list-item
          md-secondary
          v-for="session in sessions"
          v-bind:key="session.id"
          v-bind:to="'/sessions/'+session.id">
          {{ session.id }}
          {{ session.time }}
        </md-list-item>
      </md-list>
    </div>
</div>
</template>

<script src="./Index/index.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Index/index.css" />
