<template>
  <div>
    <h1></h1>
    <Post
      v-for="post in recentPosts"
      :title="post.title"
      :text="post.text"
      :author="post.author"
      :createdAt="post.createdAt"
      :key="post.id"
    />
  </div>
</template>

<script>
import Post from '../components/Post';
// import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';
// import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Post,
  },

  computed: {
    recentPosts() {
      return this.$store.getters.recentPosts;
    },
  },

  mounted() {
    this.$store.dispatch('getRecentPosts');
  },
};
</script>

<style scoped></style>
