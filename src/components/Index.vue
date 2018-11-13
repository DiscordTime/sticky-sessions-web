<template>
<div id="page-container">
    <div>
      <md-list>
        <md-list-item
          md-secondary
          v-for="session in sessions"
          v-bind:key="session.id"
          v-bind:to="'/sessions/'+session.id">
          {{ session.name }}
          {{ session.time }}
        </md-list-item>
      </md-list>
    </div>
</div>
</template>

<script src="./Index/index.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Index/index.css" />
