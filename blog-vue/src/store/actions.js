import axios from 'axios';


const userToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const actions = {
  setToken({ commit }, token) {
    userToken.set(token);
    commit('setToken', token);
  },
  setUser({ commit }, user) {
    commit('setUser', user);
  },

  logout({ commit }) {
    commit('logout');
    userToken.unset();
  },

  SET_CREATE_SONG({ commit },song) {
    commit('SET_CREATE_SONG',song);
  },

  async getRecentPosts({ commit }) {
    const response = await axios.get('http://localhost:3000/posts/recent');
    console.log(response);

    commit('SET_RECENT_POSTS', response.data);
  },

  async getRecentSongs({ commit }) {
    const response = await axios.get('http://localhost:3000/home/recent');
    console.log(response);

    commit('SET_RECENT_SONGS', response.data);
  },

  async getAllSongs({ commit }) {
    const response = await axios.get('http://localhost:3000/songs');
    console.log(response);

    commit('SET_ALL_SONGS', response.data);
  },

  async updateSong({ commit }) {
    const response = await axios.get('http://localhost:3000/song/:id');
    console.log(response);

    commit('SET_UPDATE_SONG', response.data);
  },

  async deleteSong({ commit }) {
    const response = await axios.get('http://localhost:3000/song/:id');
    console.log(response);

    commit('SET_DELETE_SONG', response.data);
  },

  async findSongsByUserId({ commit }) {
    const response = await axios.get('http://localhost:3000/my-songs');
    console.log(response);

    commit('SET_USERS_SONGS', response.data);
  },

  
};

export default actions;
