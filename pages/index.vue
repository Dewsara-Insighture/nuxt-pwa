<template>
  <div class="container">
    <h1>Welcome to Nuxt PWA App</h1>
    <p>This is a simple PWA using Nuxt 3 and the PWA module.</p>
    <button @click="handlePWANavigate" class="button">Go to Leader PWA</button>
    <a href="https://dev.leaderexpenses-intrepidtravel-com.intrepidtravel.cloud" target="_blank" rel="noopener noreferrer" class="aTag">
  Leader PWA A link
</a>
  
  </div>
</template>

<script setup lang="ts">
function handlePWANavigate() {
  window.location.href = 'https://dev.leaderexpenses-intrepidtravel-com.intrepidtravel.cloud';
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}
.button {
  margin-top: 20px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #4dba87;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.aTag {
    margin :0px 10px;
    background-color: #443a87;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
}
</style>
