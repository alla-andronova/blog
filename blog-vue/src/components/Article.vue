<template>
    <div class="article-container"> 
            <div 
                class='article-card' 
                :style="{backgroundImage: `url(${img})`}"       
                :v-on:click="clicker"
                >
                <h3 class="article-title">{{title}}</h3>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        props: {
            title: String,
            img: String
        },
    }
// 
</script>

<style>
.article-container {
  /* display: flex;
  flex-direction: row; */
  width: 1000px;
  /* margin-left: 50;
  margin-right: 50; */
  margin: 0 auto;
}

.article-card {
    width: 304px;
    height: 304px;
    display: flex;
    flex-direction: row;
    /* flex-flow: row wrap; */
    color: #fff;
    /* align-items: flex-end; */
    /* justify-content: right; */
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background: cover center no-repeat;

    display: inline-block;
    border: 1px solid rgb(0, 0, 0);
}

.article-title {
    color: rgb(250, 250, 250);
    background: rgb(48, 43, 43);
    /* display: block; */
    margin: 0;
    padding: 5px 10px;
    font-size: 18px;
}
.article-card:hover {
    cursor: pointer;
    opacity: 0.6;
}
@media (max-width: 768px) {
    .article-card {
      margin-bottom: 2rem;
    }
  }

</style>