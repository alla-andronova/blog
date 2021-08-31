import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default createStore({
  strict: true, // strict only to watch if mutations to state are done in "mutations" object handlers

  state, // rootstate

  mutations,
  actions,
  getters,
});
