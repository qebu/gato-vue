<template>
  <v-col cols="4">
    <v-card
      outlined
      class="tile"
      @click="$emit('mark')"
      :disabled="playerMark !== ''"
      :hover="true"
    >
      <v-card-text :class="textClasses">
        <span class="vcenter">{{ playerMark }}</span>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Tile",
  props: {
    player: String,
    playerMark: String
  },
  computed: {
    textClasses() {
      return `tile-font ${this.player}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.tile {
  height: 100px;
}

.tile-font {
  font-size: 50pt;
  text-align: center;
}

.vcenter {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.player1 {
  color: orangered !important;
}

.player2 {
  color: dodgerblue !important;
}
</style>

<style>
:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}
</style>
