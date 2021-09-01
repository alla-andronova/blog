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

          <span v-else>Hello {{ user.nickname }}</span>
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
};
</script>

<style scoped>
</style>