import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, userToken) {
      state.token = userToken;
    },
    GET_TOKEN(state) {
      return state.token;
    }
  },
  actions: {
    setToken({ commit }, userToken) {
      commit('SET_TOKEN', userToken);
    },
    getToken({ commit }) {
      commit('GET_TOKEN');
    }
  },
  getters: {
    getToken: state => state.token
  }
});

export default store;
