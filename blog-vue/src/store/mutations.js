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

  SET_ALL_SONGS(state, allSongs) {
    state.allSongs = allSongs;
  },

  SET_UPDATE_SONG(state, updateSong) {
    state.updateSong = updateSong;
  },

  SET_DELETE_SONG(state, deleteSong) {
    state.deleteSong = deleteSong;
  },
};

export default mutations;
