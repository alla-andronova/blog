<template>
<div>
    <div class="intro">
      <div class="container">
        <div class="intro__inner">
          <h1 class="intro__title">Music world around you</h1>

          <div
            class="content clearfix"
            v-for="song in recentSongs"
            :title="song.title"
            :artist="song.artist"
            :genre="song.genre"
            :albumImageUrl="song.albumImageUrl"
            :key="song.id"
          >
            <div class="main.content">
              <h1 class="recent-post-title"></h1>
              <div class="post">
                <img :src="song.albumImageUrl" class="post-image" />
                <div class="post-preview">
                  <div>
                    <p class="preview-text"><span>Song:</span> {{ song.title }}</p>
                    <p class="preview-text"><span>Artist:</span> {{ song.artist }}</p>
                    <p class="preview-text"><span>Genre: </span>{{ song.genre }}</p>
                    <p class="preview-text"><span>Album: </span>{{ song.album }}</p>
                  </div>
                  <router-link :to="'/song/' + song.id" class="btn read-more">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
//import Song from '../components/Song';
// import { mapGetters } from 'vuex';
// import { mapState } from 'vuex';
// import axios from 'axios';

export default {
  name: 'Home',
  components: {},
  props: {
    title: String,
    artist: String,
    genre: String,
    album: String,
    albumImageUrl: String,
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

<style scoped>
span{
font-weight: bold;
}
.content {
  width: 65%;
  margin: 3rem auto 3rem;
  border: 0.3rem solid black;
  border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
  background: rgba(0, 0, 0, 0.5);
}
.main.content {
  width: 70%;
  float: left;
}

.recent-post-title {
  margin: 2rem;
}

.post {
  width: 95%;
  height: 270px;
  margin: 2rem auto;
  border-radius: 0.9rem;
  position: relative;
  color: whitesmoke;
}

.post-image {
  width: 25%;
  height: 100%;
  float: left;
}
.post-preview {
  width: 90%;
  text-decoration: none;
  position: relative;
  left: 10%;
  font-size: 1.9rem;
  text-align: left;
}
.btn {
  padding: 1rem 1.5rem;
  color: silver;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}
.btn:hover {
  color: white !important;
  background: wheat;
}
.read-more {
  position: absolute;
  bottom: 0.01rem;
  right: 0.5rem;
  background: transparent;
  border: 0.3rem solid black;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
}

.read-more:hover {
  background: grey;
  color: antiquewhite !important;
  transition: 0.25s;
}
</style>
