<template>
  <v-container>
    <v-row justify="center" style="height: 300px">
      <v-col cols="6" align-self="center">
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
              @click="sendPlayerNames"
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
  data() {
    return {
      player1: "",
      player2: ""
    };
  },

  methods: {
    sendPlayerNames() {
      this.$emit("players-setted", {
        player1: this.player1,
        player2: this.player2
      });
    }
  }
};
</script>

<style scoped></style>
