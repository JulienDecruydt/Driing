import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user/user';
import commu from './modules/commu/commu';
import tickets from './modules/tickets/tickets';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    commu,
    tickets,
  },
  state: {
    log: false,
  },
  getters: {
    getLog : state => state.log,
  },
  mutations: {
    setLog: (state, vals) => { 
      state.log = vals;
    }
  },
})

export default store
