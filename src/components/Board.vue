<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="8" md="4" xl="3">
        <v-row>
          <tile
            v-for="idx in Object.keys(boardMarks)"
            :key="idx"
            :player="boardMarks[idx]"
            :player-mark="
              boardMarks[idx] !== '' ? playerMarks[boardMarks[idx]] : ''
            "
            @mark="play(idx)"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Tile from "./Tile.vue";

export default {
  name: "Board",
  components: { Tile },
  props: {
    players: Object
  },
  data() {
    return {
      currentPlayer: "player1",
      playerMarks: { player1: "X", player2: "O" },
      boardMarks: [...Array(9).keys()].reduce(
        (o, k) => ({ ...o, [k + 1]: "" }),
        {}
      )
    };
  },
  methods: {
    play(index) {
      this.boardMarks[index] = this.currentPlayer;
      this.currentPlayer =
        this.currentPlayer === "player1" ? "player2" : "player1";
    }
  }
};
</script>

<style scoped></style>
