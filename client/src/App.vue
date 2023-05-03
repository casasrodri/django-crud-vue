<script setup>
</script>

<template>
  <h1>Task Application</h1>

  <p>
    <router-link to="/tasks">Tasks</router-link>
    <router-link to="/create-task">Create</router-link>
  </p>

  <router-view></router-view>
</template>

<style scoped>
</style>
