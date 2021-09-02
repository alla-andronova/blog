<template>
<div>
    <div class="intro">
      <div class="container">
        <div class="intro__inner">
          <h1 class="intro__title">Music world around you</h1>

          <div class="content clearfix">
            <p class="song_title">{{ title }}</p>
            <div class="main.content">
              
              <div class="post">
                <img :src="albumImageUrl" class="post-image" />

                <div class="post-preview">
                  <div>
                    
                    <p class="preview-text"><span>Song:</span> {{ title }}</p>
                    <p class="preview-text"><span>Artist: </span>{{ artist }}</p>
                    <p class="preview-text"><span>Genre: </span>{{ genre }}</p>
                    <p class="preview-text"><span>Album: </span>{{ album }}</p>
                    <p class="preview-text"><span>Added by:</span> {{ addedBy }}</p>
                  </div>
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
export default {
  name: 'CommonSong',
  props: {
    title: String,
    artist: String,
    genre: String,
    album: String,
    albumImageUrl: String,
    addedBy: String,
  },
};
</script>

<style scoped>
span{
font-weight: bold;
}

.song_title{
  text-align: center;
  font-size: 2.1rem;
  color: whitesmoke;
  font-weight: bold;
}
.content {
  width: 65%;
  margin: 3rem auto 3rem;
  border: 0.3rem solid black;
  border-radius: 4% 12% 10% 8% / 2% 2% 4% 8%;
  background: rgba(0, 0, 0, 0.3);
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
  color: whitesmoke;

}

.post-image {
  width: 35%;
  height: 85%;
  float: left;
  margin-left: 2rem;
  margin-top: 2rem;
}

.post-preview {
  width: 50%;
  float: right;

  
  font-size: 1.9rem;
}

</style>