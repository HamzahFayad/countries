import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
//import CountriesList from "./components/CountriesList.vue";
import Home from "./components/Home.vue";
import CountryDetail from "./components/CountryDetail.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/country",
    name: "CountryDetail",
    component: CountryDetail,
    props: true,
  },
];

const router = new VueRouter({ routes, mode: "history" });

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
