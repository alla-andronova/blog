<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">GloW</div>

        <nav class="nav">
          <router-link class="nav_link" to="/songs">Songs</router-link>

          <span v-if="!user">
            <router-link class="nav_link" to="/login">Login</router-link>

            <router-link class="nav_link" to="/register">Register</router-link>
          </span>

          <span v-else>
            <span class="nav_link">Hello {{ user.nickname }}</span>
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