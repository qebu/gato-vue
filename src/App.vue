<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        Gato
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <names
        v-if="Object.entries(players).length === 0"
        @players-setted="savePlayers"
      />
      <board v-else :players="players"></board>
    </v-content>
  </v-app>
</template>

<script>
import Names from "./components/Names.vue";
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Board,
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
