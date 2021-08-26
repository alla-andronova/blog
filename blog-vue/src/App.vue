<template>
  <div  class="page-container">
    <Header/>
    <Article
      v-for="article in articleArray"
      :title="article.title"
      :img="article.img"
      :key="article.title"
      
      />
      <!-- v-on:click="clicker" -->
      <router-view/>
  </div>
  
</template>
<!-- <router-link to="/">Home</router-link> |
    <router-link to="/AllPosts">Posts</router-link> |  -->


<script>
import Header from './components/Header.vue'
import Article from './components/Article.vue'

export default {
  name: 'App',
  data () {
    return {
      articleArray: [
        {
        title: 'Books 1',
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg"
        },
        {
        title: 'Book 2',
        img: "https://cdn.pixabay.com/photo/2018/02/18/21/21/book-3163563_1280.jpg"
        },
        {
        title: 'Book 3',
        img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Open_books_stacked.jpg"
        }
      ],
    }  
  },
  
 components: {
    Header,
    Article
  },
  // methods: {
  //   clicker () {
  //     console.log('Clickerino works')
  //   }
  // }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  color: #222;
  font-family: Open-sans, sans-serif;
}

.page-container {
  width: 100%;
  max-width: 60rem;
  height: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
}
</style>