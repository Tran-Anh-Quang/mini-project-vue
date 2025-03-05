<script setup>

</script>

<template>
  <header>
    <img src="@/assets/logo.svg" class="logo" width="60px" height="60px" alt="logo">
    <nav>
      <RouterLink to="/">
        <div class="btn-main">Home</div>
      </RouterLink>
      <RouterLink to="/create">
        <div class="btn-action">Create</div>
      </RouterLink>
    </nav>
  </header>
  <router-view></router-view>
</template>

<style scoped>
header {
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: .4rem .2rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}

nav {
  display: flex;
  column-gap: 1rem;
}

</style>