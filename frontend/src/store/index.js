import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    cookies: false,
  },
  mutations: {
    acceptCookies(state) {
      state.cookies = true;
    },
  },
});

export default store;
