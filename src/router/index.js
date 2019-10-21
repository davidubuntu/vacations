import Vue from "vue";
import Router from "vue-router";
// components
import Home from "@/views/Home/Home.vue";
import Vacation from "@/views/Vacation/Vacation.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    }, //below is the object that was added for the home path
    {
      path: "/vacation",
      name: "Vacation",
      component: Vacation
    },
    {
      path: "/exclusive",
      name: "Vacation",
      component: Vacation
    },
    {
      path: "/services",
      name: "Vacation",
      component: Vacation
    }
  ]
});
