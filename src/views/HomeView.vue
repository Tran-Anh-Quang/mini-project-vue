<script setup>

import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const users = ref([]);
const txtSearch = ref('');
const router = useRouter();

onMounted(() => {
  async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      users.value = await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

// Gọi hàm để lấy dữ liệu
  fetchUsers();

})

const filterUser = computed(() => {
  return users.value.filter(
      item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1
      || item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1);
})

</script>

<template>
  <main style="padding: 2rem">
    <input type="text" placeholder="Search" v-model="txtSearch">
    <div class="group-card">
      <div class="card-item" v-for="user in filterUser">
        <div @click="router.push({path: `/user/${user?.id}`})">
          <h2>{{ user?.name }}</h2>
          <i> {{ user?.email }}</i>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
input {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 28px;
  background-color: #f2f2f2;
  outline: none;
}

.group-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}

.card-item {
  flex-basis: calc(33.33% - 1rem);
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card-item:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
