<template>
  <div class="service-detail">
    <h2>Mobile App Development</h2>
    <p>Cross-platform mobile solutions tailored for BG Tech's enterprise clients.</p>
    <img :src="mobileImg" alt="Mobile App Development" class="service-image" />
  </div>
</template>

<script setup>
import mobileImg from '../../assets/app-dev.png' // Correct relative path
</script>

<style>
.service-detail {
  margin: 20px;
}

.service-image {
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  border-radius: 8px;
}
</style>