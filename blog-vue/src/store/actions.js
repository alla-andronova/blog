import axios from 'axios';

const actions = {
  async getRecentPosts({ commit }) {
    const response = await axios.get('http://localhost:3000/posts/recent');
    console.log(response);

    commit('SET_RECENT_POSTS', response.data);
  },
};

export default actions;
