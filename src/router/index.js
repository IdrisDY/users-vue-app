import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserDetails from "../views/UserDetails.vue";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/user/:id", component: UserDetails, props: true },
];

export default new VueRouter({ mode: "history", routes });
