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
  </div>
  <!-- <router-view/> -->
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
        title: 'Books For Students',
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ukrgate.com%2Feng%2F%3Fp%3D7087&psig=AOvVaw2elvZnkllxPVPG3WSBkMmr&ust=1629996391039000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiTxfPPzPICFQAAAAAdAAAAABAD"
        },
        {
        title: 'Best College Bag',
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvirenjitechnical.com%2Fcollege-bags-for-girls%2F&psig=AOvVaw0glaSLdBmOeQPmwBf7GTaj&ust=1629996441880000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNi2247QzPICFQAAAAAdAAAAABAD"
        },
        {
        title: 'College Payment',
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fecommercenews.eu%2Fthe-most-common-payment-methods-in-europe%2F&psig=AOvVaw2Obft09j7q9wZg7MjV9W-6&ust=1629996487288000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCnwqzQzPICFQAAAAAdAAAAABAN"
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