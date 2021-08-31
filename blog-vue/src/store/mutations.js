const mutations = {
  setToken (state, token) {
    state.token = token
    state.isUserLoggedIn = !!(token)
  },
  setUser (state, user) {
    state.user = user
  },

  SET_RECENT_POSTS(state, recentPosts) {
    state.recentPosts = recentPosts;
  },

  SET_RECENT_SONGS(state, recentSongs) {
    state.recentSongs = recentSongs;
  },
};

export default mutations;
