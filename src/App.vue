<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        Gato
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <names @players-setted="savePlayers"></names>
    </v-content>
  </v-app>
</template>

<script>
import Names from "./components/Names.vue";

export default {
  name: "App",
  components: {
    Names
  },
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
