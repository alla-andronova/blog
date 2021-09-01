const mutations = {
  setToken(state, token) {
    state.token = token;
    state.isUserLoggedIn = !!token;
  },
  setUser(state, user) {
    state.user = user;
  },
  logout(state) {
    state.user = null;
  },

  SET_RECENT_POSTS(state, recentPosts) {
    state.recentPosts = recentPosts;
  },

  SET_RECENT_SONGS(state, recentSongs) {
    state.recentSongs = recentSongs;
  },

  SET_ALL_SONGS(state, allSongs) {
    state.allSongs = allSongs;
  },
};

export default mutations;
