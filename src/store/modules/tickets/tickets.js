import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import * as actions from './actions';
import {
  mutations
} from './mutations';


const state = {
  addTicketOpen: false,
}

export default {
  namespace: 'store/',
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
