<template>

<div id="page-container">
    <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
        <span class="md-title">Sticky Notes</span>
        <div class="md-toolbar-section-end">
            <md-button>Criar Sessão</md-button>
        </div>
    </md-app-toolbar>
    <md-app-content>
      <md-list>
        <md-list-item
          md-secondary
          v-for="session in sessions"
          v-bind:key="session.id"
          v-bind:to="'/sessions/'+session.id">
          <div class="md-list-item-text">
              <span class="md-title list-title">{{ session.name }}</span>
              <span class="md-subheading list-subtitle">{{ session.time }}</span>
              <md-badge class="md-square" md-content="Aberto" />
          </div>

        </md-list-item>

      </md-list>
    </md-app-content>
    </md-app>

</div>
</template>

<script src="./Index/index.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Index/index.css" />
