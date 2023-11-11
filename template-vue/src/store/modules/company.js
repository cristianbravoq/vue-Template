const state = {
  company: null,
};

const getters = {
  currentCompany: (state) => state.company,
};

const mutations = {
  setCompany: (state, company) => {
    state.user = company;
  },
};

const actions = {
  setCompany: ({ commit }, company) => {
    commit("setCompany", company);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
