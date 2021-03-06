import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import AllPosts from '../views/AllPosts.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Songs from '../views/Songs.vue';
import mySongs from '../views/mySongs.vue';
import addSong from '../components/addSong.vue';
import Song from '../views/Song.vue';

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
    path: '/song/:id',
    name: 'Song',
    component: Song,
  },
  {
    path: '/my-songs',
    name: 'mySongs',
    component: mySongs,
  },
  {
    path: '/add-song',
    name: 'addSong',
    component: addSong,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
