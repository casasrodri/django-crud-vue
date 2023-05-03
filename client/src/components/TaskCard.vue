<script setup>
const props = defineProps(['task'])
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (id) => {
    router.push(`/tasks/${id}`)
}
</script>

<template>
    <div @click="navigateTo(task.id)">
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

