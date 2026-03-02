<template>
  <nav class="navbar">
    <div class="logo">BG Tech</div><br>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/profile/developer-1">My Profile</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar { display: flex; justify-content: space-between; padding: 1rem; background: #2c3e50; color: white; }
.links a { margin-left: 30px; color: #42b983; text-decoration: none; }
.router-link-active { font-weight: bold; border-bottom: 2px solid white; }
</style>