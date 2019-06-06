import axios from 'axios'

import {api} from '../../../Api.js';

export const addCommuAction = ({ commit, getters, rootGetters }, vals) => {
  if(vals != "") {
    return axios.post(api.commu.add, vals)  
  }
}


export const loadCommuUser = ({ commit, getters, rootGetters }) => {
  var url = api.commu.getUser + rootGetters["user/getUser"]._id
  axios.get(url)
  .then(function (response) {
    commit('setCommu', response.data);
  })
  .catch(function (error) {
    console.log(error)
  });    
}