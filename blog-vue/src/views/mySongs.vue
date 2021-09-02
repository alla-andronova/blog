<template>
<div>
    <div class="intro">
      <div class="container">
        <div class="intro__inner">
          <router-link to="/add-song" class="btn read-more">Add Song</router-link>
          <h1 class="intro__title">Your`s Songs</h1>
          
        </div>
      </div>

      <table id="songs">
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
        </tr>
        <tr
          v-for="song in findSongsByUserId"
          :title="song.title"
          :artist="song.artist"
          :genre="song.genre"
          :album="song.album"
          :key="song.id"
        >
          <td>
            <router-link :to="'/song/' + song.id" tag="td" class="song">{{ song.title }}</router-link>
          </td>
          <td>{{ song.artist }}</td>
          <td>{{ song.album }}</td>
          <td>{{ song.genre }}</td>
        </tr>
      </table>
        <div class="main.content">
          <h1 class="recent-post-title"></h1>
            <div class="post">
                <div class="post-preview">
                  
                </div>
              </div>
            </div>
    </div>
</div>
</template> 


<script>
export default {
  name: 'mySongs',
  components: {},
  props: {
    title: String,
    artist: String,
    genre: String,
    album: String,
  },
  computed: {
    findSongsByUserId() {
      return this.$store.getters.findSongsByUserId;
    },
  },
  mounted() {
    this.$store.dispatch('findSongsByUserId');
  },
};
</script>

<style scoped>
.btn{
  left: 85%;
  position: absolute;
  top: 19.5%;
  color: silver;
}
.read-more:hover{
color: black;
}
.song {
  border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
  background: rgba(0, 0, 0, 0.05);
  margin: 0 15px;
  position: relative;
  color: whitesmoke;
  text-decoration: none;
  transition: color 0.2s linear;
}
.song:after {
  content: '';
  width: 100%;
  height: 3px;
  background-color: rgb(150, 150, 150);
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
}
.song:hover {
  color: rgb(150, 150, 150);
}
.song:hover:after {
  display: block;
}
#songs {
  width: 85%;
  margin: 3rem auto 5rem;
  border: 0.3rem solid black;
  border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
  background: rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  color: whitesmoke;
}
#songs td {
  width: 25%;
}
#songs td,
#songs th {
  border: 0.3rem solid black;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  padding: 0.8rem;
}
#songs tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.3);
}
#songs tr:hover {
  background-color: rgba(0, 0, 0, 0.01);
}
#songs th {
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.6);
  color: silver;
  font-size: 1.1rem;
  font-weight: 700;
}
</style>