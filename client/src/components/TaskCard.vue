<script setup>
const props = defineProps(['task'])
</script>

<template>
    <div>
        <h3 :class="{ tachado: task.done, normal: !task.done }">
            {{ task.title }}
        </h3>

        <p>
            {{ task.description }}
        </p>
        <hr>
    </div>
</template>

<style scoped>
.tachado {
    text-decoration: line-through;
    color: red;
}

.normal {
    color: greenyellow;
}
</style>

