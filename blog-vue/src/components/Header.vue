<template>
  <div>
    <header>
      <div class="header-wrapper">
        <div class="nav-wrapper">
          <img src="https://place-hold.it/100" alt="logo" />
          <div class="nav"><router-link to="/">Home</router-link> |</div>
          <div class="nav">
            <router-link to="/posts">All Posts</router-link> |
          </div>
        </div>

        <div>
          <button>➕</button>

          <button>👨</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
}
.nav-wrapper {
  display: flex;
}
</style>
