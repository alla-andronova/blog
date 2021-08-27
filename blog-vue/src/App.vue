<template>
  <div class="page-container">
    <Header />
    <Home/>
    <Article
      v-for="article in articleArray"
      :title="article.title"
      :img="article.img"
      :key="article.title"
      v-on:click="clicker"
      />
      <router-view/>
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Article from './components/Article.vue'
import Home from './views/Home.vue'
// import AddPost from './views/AddPost.vue'

export default {
  name: 'App',
  data () {
    return {
      articleArray: [
        {
        title: 'Book 1',
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
    Article,
    Home,
    // AddPost
  },
  methods: {
    clicker () {
      console.log('Clickerino works')
    }
  }
}
</script>

<style>






/* body {
  background: rgb(234, 238, 240);
  color: black;
  font-family: Open-sans, sans-serif;
}

header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid #430fff;
}

.page-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: 900px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  
  @media (max-width: 768px) {
    .page-container {
      flex-direction: column;
      align-items: center; 
    }
  }
} */
</style>