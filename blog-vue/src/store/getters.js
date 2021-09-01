const getters = {
  recentPosts(state) {
    return state.recentPosts;
  },
  recentSongs(state) {
    return state.recentSongs;
  },
  allSongs(state) {
    return state.allSongs;
  },
  updateSong(state) {
    return state.updateSong;
  },
  deleteSong(state) {
    return state.deleteSong;
  },
};

export default getters;
