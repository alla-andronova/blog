// import Vue from 'vue'  // нет в дефолт

import { createApp } from 'vue' //есть в дефолт
import App from './App.vue'
import router from './router'
import store from './store/store' // есть в дефолт

// 

createApp(App).use(store).use(router).mount('#app')
// Vue.use(vue-router)

// var router = new router({
  // routes: [
  //   { path: 'Home', component: home } 
  // ]
// });


// нет дефолт

// new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount("#app")


















// manual features
// - select only: vue version, router, eslint
// - vue version 3.x
// - use history with router?: y
// - eslint with errors only
// - eslint on save
// - save as preset? n