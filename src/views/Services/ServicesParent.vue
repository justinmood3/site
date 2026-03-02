<template>
  <div class="services-layout">
    <aside class="sidebar">
      <h3>Our Expertise</h3>
      <ul>
        <li><router-link to="/services/web">Web Design</router-link></li>
        <li><router-link to="/services/app">App Development</router-link></li>
      </ul>
    </aside>

    <section class="content-area">
      <h1>BG Tech Services</h1>
      <p>Select a service from the sidebar to learn more.</p>
      
      <div class="nested-view-container">
        <router-view></router-view> 
      </div>
    </section>
  </div>
</template>

<style scoped>
.services-layout { display: flex; gap: 40px; padding: 20px; }
.sidebar { width: 200px; border-right: 1px solid #ddd; }
.sidebar ul { list-style: none; padding: 0; }
.sidebar a { display: block; padding: 10px; text-decoration: none; color: #2c3e50; }
.sidebar a.router-link-active { color: #42b883; font-weight: bold; }
.nested-view-container { margin-top: 20px; padding: 20px; background: #f9f9f9; border-radius: 8px; }
</style>
