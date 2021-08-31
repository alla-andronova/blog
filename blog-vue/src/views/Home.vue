<template>
<div>
  <body>
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">Music world around you</h1>
          <Song
      v-for="song in recentSongs"
      :title="song.title"
      :artist="song.artist"
      :genre="song.genre"
      :createdAt="song.createdAt"
      :key="song.id"/>
      </div>
    </div>
  </div>
  </body>
</div>


</template>

<script>
import Song from '../components/Song';
// import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';
// import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Song
  },

  computed: {
    recentSongs() {
      return this.$store.getters.recentSongs;
    },
  },

  mounted() {
    this.$store.dispatch('getRecentSongs');
  },
};
</script>

<style scoped></style>
