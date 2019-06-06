import axios from 'axios'

import {api} from '../../../Api.js';

export const addTicketAction = ({ commit, getters, rootGetters }, vals) => {
  if(vals != "") {
    return axios.post(api.ticket.add, vals)  
  }
}
