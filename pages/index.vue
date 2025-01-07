<template>
  <div class="container">
    <h1>Welcome to Groot PWA App</h1>
    <p>This is a Groot PWA App</p>
    <button @click="handlePWANavigate" class="button">Go to PWA 2</button>
    <a href="https://nuxt-pwa-2-woad.vercel.app/" target="_blank" rel="noopener noreferrer" class="aTag">
  Leader PWA A link
</a>
  
  </div>
</template>

<script setup lang="ts">
// function handlePWANavigate() {
//   window.location.href = 'https://nuxt-pwa-2-woad.vercel.app/';
// }
function handlePWANavigate() {
    console.log('PWA Navigate');
    const protocolHandler = "web+pwa2://navigate";
  const fallbackURL = "https://nuxt-pwa-2-woad.vercel.app/";

  // Attempt to navigate using the protocol
  window.location.href = protocolHandler;

  // Set a fallback in case protocol navigation fails
  setTimeout(() => {
    console.log('pwa Navigate timeout');
    window.location.href = fallbackURL;
  }, 1000);
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
