import Vue from 'vue';
import Vuex from 'vuex';
<<<<<<< HEAD
import sourceData from './data.json';
import countObjectProperties from './utils';
=======
>>>>>>> e5b1a1c3cccfa285d2989cba2b7665713421243e

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    ...sourceData,
    user: null,
    authId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1',
    modals: {
      login: false,
=======
    user: null,
    modals: {
      login: false,
      signup: false,
>>>>>>> e5b1a1c3cccfa285d2989cba2b7665713421243e
    },
  },
  mutations: {
    SET_MODAL_STATE: (state, { name, value }) => {
      state.modals[name] = value;
    },
<<<<<<< HEAD
=======
    SET_MODAL_SIGNUP_STATE: (state, { name, value }) => {
      state.modals[name] = value;
    },
>>>>>>> e5b1a1c3cccfa285d2989cba2b7665713421243e
  },
  actions: {
    TOGGLE_MODAL_STATE: ({ commit }, { name, value }) => {
      commit('SET_MODAL_STATE', { name, value });
    },
<<<<<<< HEAD
  },
  getters: {
    modals: state => state.modals,
    authUser: state => state.users[state.authId],
    // Getter dinámico
    userRoomsCount: state => id => countObjectProperties(state.users[id].rooms),
=======
    TOGGLE_MODAL_SIGNUP_STATE: ({ commit }, { name, value }) => {
      commit('SET_MODAL_STATE', { name, value });
    },
  },
  getters: {
    modals: state => state.modals,
>>>>>>> e5b1a1c3cccfa285d2989cba2b7665713421243e
  },
});
