<script setup>
    const props = defineProps(['task'])
</script>

<template>
    <div>
        <h3>
            {{ task.title }}
        </h3>
        <p>
            {{ task.description }}
        </p>
        <hr>
    </div>
</template>

