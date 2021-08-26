// import store from './store'
import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).mount('#app')

new Vue({
    router,
    // store,
    render: h => h(App)
  }).$mount("#app")

















// manual features
// - select only: vue version, router, eslint
// - vue version 3.x
// - use history with router?: y
// - eslint with errors only
// - eslint on save
// - save as preset? n