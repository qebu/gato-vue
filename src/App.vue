<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        Gato
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      players: {}
    };
  },
  methods: {
    savePlayers(data) {
      this.players = data;
    }
  }
};
</script>
