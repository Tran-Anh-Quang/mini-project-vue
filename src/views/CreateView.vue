<script setup>

import {reactive} from "vue";
import {useUserStore} from "@/stores/UserStore.js";
import {useRoute, useRouter} from "vue-router";

const store = useUserStore();
const route = useRoute();
const router = useRouter();

const user = reactive({
  email: route.params.id ? store.userDetails.email :'',
  name: route.params.id ? store.userDetails.name :'',
  phone: route.params.id ? store.userDetails.phone :'',
});

const handleCreateNewUser = () => {
  store.handleCreateUser({ id: String(Math.random()), ...user });
  router.push('/');
}

const handleUpdateNewUser = () => {
  store.handleUpdateUser({ id: route.params.id, ...user });
  router.push('/');
}


</script>

<template>
  <main style="color: #000; padding: 2rem;">
    <h1 style="font-weight: bold;">Create User</h1>
    <div style="margin-top: 1rem;">
      <input type="text" placeholder="Enter Email Here!" v-model="user.email" />
    </div>
    <div style="margin-top: 1rem;">
      <input type="text" placeholder="Enter Name Here!" v-model="user.name" />
    </div>
    <div style="margin-top: 1rem;">
      <input type="text" placeholder="Enter Phone Here!" v-model="user.phone" />
    </div>
    <div style="display: flex;" @click="route.params.id ? handleUpdateNewUser() : handleCreateNewUser()">
      <div class="btn-main" style="margin-top: 1rem; border-radius: 50px;">{{ route.params.id ? 'Update' : 'Create'}}</div>
    </div>
  </main>
</template>
