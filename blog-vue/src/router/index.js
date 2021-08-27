// есть в дефолт
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Article  from '../components/Article.vue'
// import Header from '../components/Header.vue'
import AllPosts from '../views/AllPosts.vue'
//import UserPosts from '../components/UserPosts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  // {
  //   path: '/header',
  //   name: 'Header',
  //   component: Header,
  // },
  {
    path: '/allPosts',
    name: 'AllPosts',
    component: AllPosts,
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
