//import { createApp } from 'vue'

import { createStore } from 'vuex' // есть в дефолт need

// этого всего нет в дефолт
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
// до сюда

const store = createStore({ //need
  // state () {
    
  // }
})

//const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
//app.use(store)

// store.commit('increment')

console.log(store.state.count) //need





// export default createStore({
//     state: {
//       dropdown: true
//     },
//     mutations: {
//     },
//     actions: {
//     },
//     modules: {
//     }
//   })