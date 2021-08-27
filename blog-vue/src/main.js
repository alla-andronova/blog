// нет в дефолт
//import Vue from 'vue'  

import { createApp } from 'vue' //есть в дефолт
import App from './App.vue'
// import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/store' // есть в дефолт

// 

createApp(App).use(store).use(router).mount('#app')


// Vue.use(vue-router)


// нет дефолт

// new Vue({
//     render: h => h(App), router, store,
//     // el: 'app',
//   }).$mount("#app")












// manual features
// - select only: vue version, router, eslint
// - vue version 3.x
// - use history with router?: y
// - eslint with errors only
// - eslint on save
// - save as preset? n