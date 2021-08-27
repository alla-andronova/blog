<template>
    <div class="container">
        <div 
            class='article-card' 
            :style="{backgroundImage: `url(${img})`}"       
            
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
// :v-on:click="clicker"
</script>

<style>
.container {
  width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
.article-card {
    width: 304px;
    height: 304px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background: cover center no-repeat;
}

.article-title {
    color: rgb(250, 250, 250);
    background: rgb(48, 43, 43);
    opacity: 9;
    display: block;
    margin: 0;
    padding: 4px 10px;
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