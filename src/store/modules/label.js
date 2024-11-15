import mockResponse from "@/api/response.json";

const state = {
  nutritionData: {},
};

const mutations = {
  setNutritionData(state, data) {
    state.nutritionData = data;
  },
};

const actions = {
  fetchNutritionData({ commit }) {
    const data = mockResponse.label;
    commit("setNutritionData", data);
  },
};

const getters = {
  getNutritionData(state) {
    return state.nutritionData;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};