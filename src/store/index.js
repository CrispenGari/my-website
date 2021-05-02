import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vue);

const store = new Vuex.Store({
  state: {
    user: null,
  },
});

export default store;
