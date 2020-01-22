import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: {}
  },
  mutations: {
    setPlayerNames(state, players) {
      state.players = players;
    }
  },
  actions: {
    editPlayers(context, players) {
      context.commit("setPlayerNames", players);
    }
  },
  modules: {}
});
