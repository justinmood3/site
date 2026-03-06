<script setup>
import Header from './components/HeaderBar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <Navbar />

  <router-view />

  <Footer />
</template>