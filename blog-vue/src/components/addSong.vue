<template>
  <div>
    <div class="intro">
      <div class="container">
        <div class="intro__inner">
          <h1 class="intro__title">add music to your library</h1>
          </div>
        </div>
    </div>
<div id="form">
  <form action="" method="post" name="registration" class="createSong">
    <fieldset class="fieldset">
      <div class="form-group">
        <label for="title">Song title:</label>
                <input v-model="title" id="title" />
            </div>
            <div class="form-group">
                <label for="artist">Artist:</label>
                <input v-model="artist" id="artist" />
            </div>
            <div class="form-group">
                <label for="genre">Genre:</label>
                <input v-model="genre" id="genre" />
            </div>
            <div class="form-group">
                <label for="album">Album:</label>
                <input v-model="album" id="album" />
            </div>
            <div class="form-group">
                <label for="albumImageUrl">Album Image:</label>
                <input v-model="albumImageUrl" id="albumImageUrl"  />
            </div>
            <input name="regbutton" type="button" class="button" value="Create Song" @click.prevent="addSong" />
        </fieldset>
    </form>
</div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      title: '',
      artist: '',
      genre: '',
      album: '',
      albumImageUrl: '',
      error: null,
    };
  },
  methods: {
    async addSong() {
      try {
        const response = await axios.post(
          'http://localhost:3000/add-song',
          {
            title:this.title,
            artist: this.artist,
            genre: this.genre,
            album: this.album,
            albumImageUrl: this.albumImageUrl,
          },
        );
        if (response.data.validations) {
          alert('Please fill the form correctly');
        } else if (response.data.error) {
          alert(response.data.error);
        } else {
          this.$store.dispatch('SET_CREATE_SONG', response.data.song);
          this.$router.push({
            path: '/my-songs',
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};

</script>

<style scoped>

#form {
    background-color: transparent;
    height: 25rem;
    width: 40rem;
    position: absolute;
    top: 35%;
    left: 38%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 0;
    text-align:center;
    border: 0.3rem solid black;
    border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
    background: rgba(0, 0, 0, 0.6);
    
}
label {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.9rem;
    color: whitesmoke;
    height: auto;
    width: 15rem;
    text-align: center;
    margin-right:1.5rem;
    float:left;
    
    
}
input {
    height: auto;
    width: 16rem;
    border: 0.1rem solid #000;
    margin-top: 1rem;
    font-size: 1.9rem;
    
}

.fieldset{
    display:block;
    height: 30rem;
    padding: 3rem;
    width: 40rem;
    border: none;
    
}
.button{
  position: absolute;
  bottom: 0.1rem;
  right: 0.5rem;
  background: transparent;
  border: 0.3rem solid black;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  height: 3rem;
  width: 15rem;
  color: whitesmoke;
}
.button:hover {
  color: white !important;
  background: rgba(0, 0, 0, 0.6);
}
</style>