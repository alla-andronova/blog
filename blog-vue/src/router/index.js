import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import AllPosts from '../views/AllPosts.vue';

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
