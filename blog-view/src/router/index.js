import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Article  from '../components/Article.vue'
import Header from '../components/Header'
// import AllPosts from '../views/AllPosts.vue'
//import UserPosts from '../components/UserPosts.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    components: Home
  },
  {
    path: '/Article',
    name: 'Article',
    components: Article,
  },
  {
    path: '/Header',
    name: 'Header',
    components: Header,
  },
  // {
  //   path: '/AllPosts',
  //   name: 'AllPosts',
  //   component: AllPosts,
  // },
  // component: function () {
  //   return import(/* webpackChunkName: "Header" */ '../components/Header.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
