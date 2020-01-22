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
import Tile from "../components/Tile.vue";

export default {
  name: "Board",
  components: { Tile },
  data() {
    return {
      players: this.$store.state.players,
      currentPlayer: "player1",
      playerMarks: { player1: "🗙", player2: "⭘" },
      boardMarks: [...Array(9).keys()].reduce(
        (o, k) => ({ ...o, [k + 1]: "" }),
        {}
      )
    };
  },
  computed: {
    marksBoard() {
      let marks = [...Object.values(this.boardMarks)];
      let matrix = [];

      while (marks.length > 0) {
        matrix.push(marks.splice(0, 3));
      }

      return matrix;
    }
  },
  methods: {
    play(index) {
      this.boardMarks[index] = this.currentPlayer;
      const hasWinner = this.checkWinner(index - 1);
      if (hasWinner) {
        alert("Ganaste!");
      }

      this.currentPlayer =
        this.currentPlayer === "player1" ? "player2" : "player1";
    },
    checkWinner(pos) {
      const pos_row = Math.floor(pos / 3);
      const pos_col = pos % 3;

      const row_uniq = new Set(this.marksBoard[pos_row]);
      const col_uniq = new Set(this.marksBoard.map(x => x[pos_col]));

      if (row_uniq.size === 1 || col_uniq.size === 1) {
        return true;
      } else if (pos % 2 === 0) {
        const diags = [
          [0, 4, 8],
          [2, 4, 6]
        ];
        const boardArray = [...Object.values(this.boardMarks)];

        for (const d of diags) {
          let boardDiag = boardArray.filter((e, i) => d.includes(i));
          if (new Set(boardDiag).size == 1 && !boardDiag.includes("")) {
            return true;
          }
        }
      }

      return false;
    }
  }
};
</script>

<style scoped></style>
