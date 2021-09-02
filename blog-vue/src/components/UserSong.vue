<template>
<div>
    <div class="intro">
      <h1 class="intro__title">Music world around you</h1>
      
      <div class="container">
        <div class="intro__inner">
          

          <div class="main.content">
            <div class="post">
              <img :src="albumImageUrl" class="post-image" />
              <div class="post-preview">
                <div class="form">
                <form action="login" method="post">
                <fieldset class="fieldset">
      <div class="form-group">
        <label for="title">Song title:</label>
                <input v-model="titleInput" id="title" :placeholder="title "/>
            </div>
            <div class="form-group">
                <label for="artist">Artist:</label>
                <input v-model="artistInput" id="artist" :placeholder=" artist "/>
            </div>
            <div class="form-group">
                <label for="genre">Genre:</label>
                <input v-model="genreInput" id="genre" :placeholder=" genre "/>
            </div>
            <div class="form-group">
                <label for="album">Album:</label>
                <input v-model="albumInput" id="album" :placeholder="album"/>
            </div>
        
        </fieldset>
                </form></div>
                <btn @click="update" class="button save">Save Changes</btn>
                <btn @click="remove" class="button del">Delete</btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UserSong',

  props: {
    title: String,
    artist: String,
    genre: String,
    album: String,
    albumImageUrl: String,
  },
  data() {
    return {
      titleInput: '',
      artistInput: '',
      genreInput: '',
      albumInput: '',
    };
  },
  methods: {
    async update() {
      try {
        const id = this.$route.params.id;
        const response = await axios.put(`http://localhost:3000/song/${id}`, {
          title: this.titleInput,
          artist: this.artistInput,
          genre: this.genreInput,
          album: this.albumInput,
        });
        if (response.data.validations) {
          alert('Please fill the form correctly');
        } else if (response.data.error) {
          alert(response.data.error);
        } else {
          this.$router.push({
            path: '/',
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async remove() {
      try {
        const id = this.$route.params.id;
        const response = await axios.delete(`http://localhost:3000/song/${id}`);

        if (response.data.error) {
          alert(response.data.error);
        } else {
          this.$router.push({
            path: '/',
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
h1{
  text-align: center;
}
.form {
    background-color: transparent;
    height: 25rem;
    width: 40rem;
    position: absolute;
    top: 0%;
    left: 50%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding: 0;
    text-align:center;

    
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
.container{
  border: 0.3rem solid black;
  border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 25%;
  width: 70%;
  left: 15%;
  
}
.fieldset{
    display:block;
    height: 30rem;
    padding: 3rem;
    width: 40rem;
    border: none;
    
}
.button{
  background: rgba(0, 0, 0, 0.6);
  border: 0.3rem solid black;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  height: 3rem;
  width: 15rem;
  color: whitesmoke;
  padding: 0.35rem;
  cursor: pointer;
}
.save{
position: absolute;
  bottom: 0.1rem;
  right: 40rem;
}
.del{
position: absolute;
  bottom: 0.1rem;
  right: 20rem;
}

.button:hover {
  color: white !important;
  background: rgba(0, 0, 0, 0.3);
}

.content {
  width: 65%;
  margin: 3rem auto 3rem;
  border: 0.3rem solid black;
  border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
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
  height: 27rem;
  margin: 2rem auto;
  border-radius: 0.9rem;
  position: relative;
  color: whitesmoke;
}

.post-image {
  width: 25%;
  height: 85%;
  float: left;
  margin-left: 7rem;
  margin-top: 2rem;
}
.post-preview {
  width: 60%;
  padding: 1.2rem;
  float: right;
  text-decoration: none;
}
.btn {
  padding: 1rem 1.5rem;
  color: silver;
  border: 0.1rem solid black;
  border-radius: 0.25rem;
  margin: 0.3rem auto;
}
.btn:hover {
  color: white !important;
  background: wheat;
}


.read-more:hover {
  background: grey;
  color: antiquewhite !important;
  transition: 0.25s;
}



.box h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 30px;
}

.box input[type='text'],
.box input[type='password'] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;

  padding: 14px 10px;
  width: 300px;
  outline: none;
  color: whitesmoke;
  border-radius: 24px;
  transition: 0.25px;
  font-size: 1.4rem;
}


.box input[placeholder],
[placeholder],
*[placeholder] {
  color: black !important;
}
::placeholder {
  color: black !important;
}
.box input[type='submit'] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25px;
  cursor: pointer;
}

.box input[type='submit']:hover {
  background: #2ecc71;
}
</style>