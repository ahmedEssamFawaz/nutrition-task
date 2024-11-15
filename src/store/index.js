import Vue from "vue";
import Vuex from "vuex";
import label from "./modules/label";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    label,
  },
});
