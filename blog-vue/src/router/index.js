import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Article  from '../components/Article.vue'
import Header from '../components/Header.vue'
import AllPosts from '../views/AllPosts.vue'
//import UserPosts from '../components/UserPosts.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/Header',
    name: 'Header',
    component: Header,
  },
  {
    path: '/AllPosts',
    name: 'AllPosts',
    component: AllPosts,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
