<template>
  <div v-if="!song">loading...</div>
  <div v-else-if="!user || user.id !== song.user_id">
    <CommonSong
      :title="song.title"
      :artist="song.artist"
      :genre="song.genre"
      :albumImageUrl="song.albumImageUrl"
      :album="song.album"
      :addedBy="song.addedBy"
    />
  </div>
  <div v-else>
    <UserSong
      :title="song.title"
      :artist="song.artist"
      :genre="song.genre"
      :albumImageUrl="song.albumImageUrl"
      :album="song.album"
    />
  </div>
</template>

<script>
import axios from 'axios';
import CommonSong from '../components/CommonSong';
import UserSong from '../components/UserSong';
export default {
  name: 'Song',
  components: {
    CommonSong,
    UserSong,
  },
  data() {
    return {
      song: null,
    };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    const response = await axios.get(`http://localhost:3000/song/${id}`);
    this.song = response.data;
  },
};
</script>

<style lang="scss" scoped>
</style>