import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import AllPosts from '../views/AllPosts.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Songs from '../views/Songs.vue';
import Song from '../components/Song.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'AllPosts',
    component: AllPosts,
  }, 
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs,
  },

  {
    path: '/song',
    name: 'song',
    component: Song,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
