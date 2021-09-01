<template>
<div>
    <body>
<div class="intro">
    <div class="container">
      <div class="intro__inner">
        <h1 class="intro__title">Our Songs</h1>
      </div></div>


<table id="songs">
    <tr>
        <th>Song</th>
        <th>Artist</th>
        <th>Album</th>
        <th>Genre</th>
    </tr>
    <tr
        v-for="song in allSongs"
        :title="song.title"
        :artist="song.artist"
        :genre="song.genre"
        :album="song.album"
        :key="song.id">
        <td ><router-link to="/song/:id(\\d+)" tag="td" class="song">{{ song.title }}</router-link></td>
        <td>{{ song.artist }}</td>
        <td>{{ song.album }}</td>
        <td>{{ song.genre }}</td>
        
    </tr>
    
</table>


        </div>
    </body>
</div>
</template> 


<script>
export default {
    name: 'Songs',
    components: {
 
    },
    props: {
            title: String,
            artist: String,
            genre: String,
            album: String,

        },

    computed: {
        allSongs() {
        return this.$store.getters.allSongs;
        },
    },

    mounted() {
        this.$store.dispatch('getAllSongs');
    },
};
</script>

<style scoped>
.song{
    border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
    background: rgba(0,0,0,.05);

  margin: 0 15px;
  position: relative;
  color: whitesmoke;
  text-decoration: none;
  transition: color .2s linear;
    }

.song:after{
    content: "";
    width: 100%;
    height: 3px;
    background-color: rgb(150, 150, 150);
    display: none;

    position: absolute;
    top:100%;
    left:0;
    z-index: 1;
}
.song:hover{
    color: rgb(150, 150, 150);
}

.song:hover:after{
    display: block;
}    

#songs {
    width: 85%;
    margin: 3rem auto 5rem;
    border: 0.3rem solid black;
    border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
    background: rgba(0,0,0,.05);
    text-align: center; 
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    color: whitesmoke;
}

#songs td{
    width: 25%;
    
}
#songs td, #songs th {
    border: 0.3rem solid black;
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    padding: 0.8rem;
}

#songs tr:nth-child(even){background-color:  rgba(0,0,0,.3);}

#songs tr:hover {background-color: rgba(0,0,0,.01);}

#songs th {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    text-align: left;
    background-color: rgba(0,0,0,.6);
    color: silver;
    font-size: 1.1rem;
    font-weight: 700;
}
</style>