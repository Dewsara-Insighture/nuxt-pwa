<template>
  <div class="container">
    <h1>Welcome to Parent App</h1>

    <div v-if="items.length === 0" class="no-items">
      <p class="no-items-text">No items found. Try adding some!</p>
    </div>
    <ul v-else class="item-list">
    <li v-for="item in items" :key="item.id" class="item">
      {{ item.name }}
    </li>
  </ul>
  <button @click="handlePWANavigate" class="navigate-button">Go to PWA Child App</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIndexedDB } from '@/composable/useIndexedDB';

const { getItems } = useIndexedDB();

const items = ref<{ id: number; name: string }[]>([]);

const loadItems = async () => {
  items.value = (await getItems()) || [];
};

async function handlePWANavigate() {
  // window.location.href = '#PWA CHILD URL ';
  await navigateTo('/pqrs/')
}


onMounted(loadItems);
</script>

<style scoped>

.navigate-button {
  margin-top: 20px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #4dba87;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.no-items {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
}

.no-items-text {
  font-size: 1.125rem; 
  font-weight: 500; 
  color: #6b7280; 
  text-align: center;
}

.item-list {
  margin-top: 1rem; 
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb; 
}

.item {
  padding: 0.5rem; 
  border-bottom: 1px solid #e5e7eb; 
  font-size: 1rem;
  color: #374151; 
}

.item:last-child {
  border-bottom: none;
}

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
  margin: 0px 10px;
  background-color: #443a87;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
}
</style>
