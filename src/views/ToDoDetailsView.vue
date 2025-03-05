<script setup>
import {useRoute} from "vue-router";

// muốn lấy được params dùng route
const route = useRoute();
</script>

<template>
  <main>
    Todo Item: {{　route.params.id }}
  </main>
</template>
