import "primeicons/primeicons.css";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./assets/App.scss";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PrimeVue from "primevue/config";
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(PrimeVue);
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
