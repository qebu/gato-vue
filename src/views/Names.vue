<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col cols="6">
        <v-card outlined>
          <v-card-title>
            Jugadores
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="player1"
              label="Jugador 1"
              required
            ></v-text-field>
            <v-text-field
              v-model="player2"
              label="Jugador 2"
              required
            ></v-text-field>

            <v-btn
              class="mt-2"
              outlined
              block
              color="primary"
              @click="savePlayers"
            >
              OK
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Names",

  data() {
    return {
      player1: "",
      player2: ""
    };
  },

  methods: {
    savePlayers() {
      this.$store
        .dispatch("editPlayers", {
          player1: this.player1,
          player2: this.player2
        })
        .then(() => {
          this.$router.push({ name: "board" });
        });
    }
  }
};
</script>

<style scoped></style>
