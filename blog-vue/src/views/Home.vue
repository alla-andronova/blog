<template>
<div>
  <body>
  <div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">Music world around you</h1>

          <div class="content clearfix" v-for="song in recentSongs"
      :title="song.title"
      :artist="song.artist"
      :genre="song.genre"
      :albumImageUrl="song.albumImageUrl"
      :key="song.id">
            <div class="main.content" > 
              <h1 class="recent-post-title"></h1>
              <div class="post" >
                <img :src="song.albumImageUrl" class="post-image">
                <div class="post-preview">
                  <h2>
                    <p>{{ song.title }} </p>
                    <p class="creator"> creator </p>
                    
                    <p class="preview-text">{{ song.artist }}</p>
                  </h2>
                  <router-link to="/home" class="btn read-more">Read More</router-link>
                </div>
              </div>
              </div>
            </div>
          
          <Song
      v-for="song in recentSongs"
      :title="song.title"
      :artist="song.artist"
      :genre="song.genre"
      :albumImageUrl="song.albumImageUrl"
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
.content{
    width: 90%;
    margin: 30px auto 30px;
    border: 3px solid black;
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    
}
.main.content{
    width: 70%;
    float: left;
    border: 1px solid blue;
}

.recent-post-title{
  margin: 20px;
}

.post{
    width: 95%;
    height: 270px;
    margin: 20px auto;
    border-radius: 5px;
    position: relative;
    text-decoration: none;
    
}

.post-image{
    width: 40%;
    height: 100%;
    float: left;
}
.post-preview{
  width: 60%;
  padding: 10px;
  float:right;
  text-decoration: none;
}
.btn{
  padding: 1rem 1.5rem;
  background: royalblue;
  color: #000;
  border: 1px solid transparent;
  border-radius: .25rem;
}
.btn:hover{
  color: white !important;
  background: wheat;
}
.read-more{
position: absolute;
bottom: 10px;
right: 10px;
border: 1px solid green;
background: transparent;
border: 3px solid black;
border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
}

.read-more:hover{
  background: tomato;
  color: antiquewhite !important;
  transition: .25s;
}
</style>
