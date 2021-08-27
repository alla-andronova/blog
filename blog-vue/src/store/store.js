//import { createApp } from 'vue'

import { createStore } from 'vuex' // есть в дефолт need

// этого всего нет в дефолт
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// до сюда

const store = createStore({ //need

})

export default createStore({
    state: {
      dropdown: true
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
  })
//const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
//app.use(store)

console.log(store.state.count) //need



