import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vuex from 'vuex'
createApp(App).use(router).mount('#app')

// Vue.use(Vuex)
createApp(App)
    // .use(store)
    .mount('#app')

