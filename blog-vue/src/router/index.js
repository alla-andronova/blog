// есть в дефолт
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Article  from '../components/Article.vue'
import AllPosts from '../components/AllPosts.vue'
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
  {
    path: '/allPosts',
    name: 'AllPosts',
    component: AllPosts,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
