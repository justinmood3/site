<template>
  <div class="service-detail">
    <h2>Modern Web Design</h2>
    <p>We build responsive, high-performance websites using the latest Vue.js frameworks.</p>
    <img :src="mobileImg" alt="Mobile App Development" class="service-image" />
  </div>
</template>
<script setup>
import mobileImg from '../../assets/images.jpg' // Correct relative path
</script>
<style>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.page {
  margin: 20px;
}

.spacer {
  height: 600px; /* adjust as needed for spacing */
}
</style>