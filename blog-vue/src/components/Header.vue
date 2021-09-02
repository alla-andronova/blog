<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="header__logo" to="/" style="text-decoration: auto">GloW</router-link>
        <nav class="nav">
          <router-link class="nav_link" to="/songs">Songs</router-link>

          <span v-if="!user">
            <router-link class="nav_link" to="/login">Login</router-link>

            <router-link class="nav_link" to="/register">Register</router-link>
          </span>

          <span v-else>
            <router-link class="nav_link" to="/my-songs"> {{ user.nickname }}`s songs</router-link>
            <a class="nav_link" @click="logoutUser">Logout</a>
          </span>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  computed: {
    user() {
      return this.$store.getters.user;
    },
  },

  methods: {
    logoutUser() {
      console.log('fhbkdh');
      this.$store.dispatch('logout');
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style scoped>
</style>