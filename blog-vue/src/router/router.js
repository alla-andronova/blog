import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Article  from '../views/Arcticle.vue'
import Header from '../views/Header.vue'
import Blogs from '../views/Blogs.vue'
import UserBlogs from '../views/UserBlogs'


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
    path: 'Blogs',
    name: 'Blogs',
    component: Blogs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
