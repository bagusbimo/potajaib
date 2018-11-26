<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
          <v-list-tile>
            <v-list-tile-title class="primary--text">
              <h1>OPTIONS</h1>
            </v-list-tile-title>
          </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click=""
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary"
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <br>
      <br>
        <v-layout align-center justify-center>
          <img src="./assets/pot.png" aspect-ratio="1" contain>
        </v-layout>
        <br>
      <router-view/>
    </v-content>
    <v-footer
        dark
        height="auto"
      >
      <v-flex xs12>
        <v-card
          flat
          tile
          class="primary white--text text-xs-center"
        >
          <v-card-text class="white--text">
            &copy;2018 — <strong>MagiPot Team - Bimo Falih Fauzi Pius</strong>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'recent',
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
      {
        icon: 'home',
        title: 'Home'
      },
      {
        icon: 'build',
        title: 'Settings'
      }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'MagiPot beta'
    }
  },
  name: 'App'
}
</script>
