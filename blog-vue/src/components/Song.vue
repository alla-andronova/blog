<template>
  <!-- <div class="songs ">
        <div class="song__item ">
        <div>{{ title }}</div>
            <div class="song__img">
        <img class="song__img" :src="albumImageUrl" /></div>
        <div class="song__fotter">
           <div> {{ artist }}
            {{ album }}
            {{ genre }}
            </div>
            
        </div>
        </div>
  </div>-->
  <div></div>
</template>

<script>
export default {
  name: 'Song',
  props: {
    title: String,
    artist: String,
    genre: String,
    album: String,
    albumImageUrl: String,
  },
};
</script>

<style scoped>
</style>