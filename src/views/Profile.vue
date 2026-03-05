<template>
  <div class="page-wrapper">
    <div class="page">
      <h1>User Profile</h1>
      <p>
        Viewing data for Employee ID: <strong>{{ $route.params.id }}</strong>
      </p>
    </div>

    <!-- Spacer instead of many <br> tags -->
    <div class="spacer"></div>
  </div>
</template>

<script setup>
// Nothing needed here if you just want $route.params.id
// Make sure this component is used in a Vue Router view
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