<script setup>
import Header from './components/HeaderBar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Header />
  <Navbar />
  <router-view></router-view>
  <Home />
  <Services />
  <Footer />
</template>
