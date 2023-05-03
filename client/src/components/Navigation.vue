<template>
  <div class="flex justify-between py-3">

    <router-link to="/tasks">
      <div class="flex">
        <Logo class="logo" />
        <h1 class="self-center align-middle font-bold uppercase text-2xl">
          Task Application
        </h1>
      </div>
    </router-link>

    <router-link to="/tasks/new" class="bg-indigo-500 px-3 py-2 rounded-lg">New</router-link>
  </div>
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
