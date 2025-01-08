<template>
  <div class="container">
    <h1>Welcome to Groot PWA App</h1>
    <p>This is a Groot PWA App</p>
    <button @click="handlePWANavigate" class="button">Go to PWA 2</button>
    <!-- <a href="https://nuxt-pwa-2-woad.vercel.app/" target="_blank" rel="noopener noreferrer" class="aTag">
  Leader PWA A link
</a> -->
<a href="web+nuxtpwa://navigate" target="_blank" rel="noopener noreferrer" class="aTag">
  A Tag PWA 2 Navigate
</a>
  
  </div>
</template>

<script setup lang="ts">
function handlePWANavigate() {
  window.location.href = 'https://nuxt-pwa-2-woad.vercel.app/';
  // window.open('https://nuxt-pwa-2-woad.vercel.app/');
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
