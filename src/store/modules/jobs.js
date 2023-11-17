import { getCompanyInformation } from '@/services/jobs';

const state = {
  offerts: [],
};

const getters = {
  allOfferts: (state) => state.offerts,
};

const mutations = {
  addOffert: (state, offert) => {
    state.offerts.push(offert);
  },
  setOfferts: (state, offerts) => {
    state.offerts = offerts;
  },
};

const actions = {
  async fetchOfferts({ commit }) {
    try {
      const offerts = await getCompanyInformation();
      commit('setOfferts', offerts.data);
    } catch (error) {
      console.error('Error fetching offerts:', error);
    }
  },
  addOffert({ commit }, offert) {
    commit('addOffert', offert);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};