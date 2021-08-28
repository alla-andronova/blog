<template>
  <div class="app-container">
    <Header />
    <ul class="cards-list">
    <Article 
      class="article-card"
      v-for="article in articleArray"
      :title="article.title"
      :img="article.img"
      :key="article.title"
      v-on:click="clicker"
      />
      </ul>
      <!-- <Login /> -->
      <router-view/>
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Article from './components/Article.vue'
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
      authType: "/register"
    }  
  },
  
 components: {
    Header,
    Article,
    // Login
  },
  methods: {
    clicker () {
      console.log('Clickerino works')
    },
    // submitFn () {
    //   console.log('logged in!')
    // },
    // authSwitcher () {
    // const navUrl = "/register";

    // if (navUrl === "/register") {
    //   return this.authType = {
    //     title: "Login",
    //     callBack: this.submitFn
    //   }
    // }
//   }
// },
//   mounted() {
//     this.authSwitcher()
  }
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgb(227, 233, 236);
}


.app-container {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 32px 20px 32px 20px;
}

.cards-list {
    display: flex;
    flex-direction: row;
    order: 2;
    /* justify-content: center; */
    /* align-items: center; */

    /* flex: 0 1 auto; */
    
    /* justify-content: space-between; */
    /* list-style: none; */
    padding: 0;
    /* white-space: nowrap; */

}

</style>