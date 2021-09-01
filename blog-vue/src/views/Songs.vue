<template>
<div>
    <body>
<div class="intro">

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
        <td>{{ song.title }}</td>
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
#songs {
    width: 80%;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.05);
    text-align: center; 
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    color: whitesmoke;
}

#songs td, #songs th {
    border: 3px solid black;
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    padding: 8px;
}

#songs tr:nth-child(even){background-color:  rgba(0,0,0,.3);}

#songs tr:hover {background-color: rgba(0,0,0,.01);}

#songs th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: rgba(0,0,0,.6);
    color: silver;
}
</style>