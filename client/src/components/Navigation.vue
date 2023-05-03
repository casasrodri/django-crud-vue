<template>
  <div>
    <Logo class="logo" />
    <h1>Task Application</h1>
  </div>

  <p>
    <router-link to="/tasks" class="router-link">Tasks</router-link>
    <router-link to="/tasks/new" class="router-link">New</router-link>
  </p>
  <hr>
</template>

<script setup>
import Logo from './Logo.vue'
</script>

<style scoped>
.router-link {
  background-color: rgb(58, 53, 53);
  margin: 0.5rem;
  padding: 0.5rem;
  color: rgb(190, 180, 180)
}

h1 {
  display: inline;
  margin-left: 0.5rem;
  vertical-align: top;
}

.logo {
  display: inline;
}
</style>
