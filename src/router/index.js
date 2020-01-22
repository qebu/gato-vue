import Vue from "vue";
import VueRouter from "vue-router";
import Names from "../views/Names.vue";
import Board from "../views/Board.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/board",
    name: "board",
    component: Board
  },
  {
    path: "/",
    name: "names",
    component: Names
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
