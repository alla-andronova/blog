<template>
<div>
  <body>
    <div class="intro">
      <div class="container">
        <div class="intro__inner">
          <h1 class="intro__title">Music world around you</h1>

          <div class="content clearfix">
            <div class="main.content">
              <div class="post">
                <img :src="albumImageUrl" class="post-image" />

                <div class="post-preview">
                  <h2>
                    <p class="recent-post-title">Song: {{ title }}</p>
                    <p class="preview-text">Artist: {{ artist }}</p>
                    <p class="preview-text">Genre: {{ genre }}</p>
                    <p class="preview-text">Album: {{ album }}</p>
                    <p class="preview-text">Added by: {{ addedBy }}</p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
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
  width: 40%;
  height: 85%;
  float: left;
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
.delete {
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

.box {
  font-family: 'New Rocker', cursive;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 35%;
  left: 70%;
  position: absolute;
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

.box input[type='text']:focus,
.box input[type='password']:focus {
  width: 280px;
  border: #2ecc71;
  text-align: center;
}
.box input[placeholder],
[placeholder],
*[placeholder] {
  color: red !important;
}
::placeholder {
  color: red !important;
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