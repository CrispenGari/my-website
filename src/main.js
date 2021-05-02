import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./assets/App.scss";
import router from "./router";
// import store from "./store";
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
