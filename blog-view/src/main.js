import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

new Vue({
    App,
    router,
    store,
    render: h => h(App)
  }).$mount("#app")

// manual features
// - select only: vue version, router, eslint
// - vue version 3.x
// - use history with router?: y
// - eslint with errors only
// - eslint on save
// - save as preset? n