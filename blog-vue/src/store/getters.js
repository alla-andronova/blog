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
  user(state) {
    return state.user;
  },
  updateSong(state) {
    return state.updateSong;
  },
  deleteSong(state) {
    return state.deleteSong;
  },
};

export default getters;
