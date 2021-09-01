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
};

export default getters;
