<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '../src/components/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
.container {
  width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
