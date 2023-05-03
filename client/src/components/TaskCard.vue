<script setup>
const props = defineProps(['task'])
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (id) => {
    router.push(`/tasks/${id}`)
}
</script>

<template>
    <div @click="navigateTo(task.id)" class="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer">
        <h3 :class="{ tachado: task.done, normal: !task.done }">
            <span class="font-bold uppercase">
                {{ task.title }}
            </span>
        </h3>

        <p class="text-slate-400">
            {{ task.description }}
        </p>
    </div>
</template>

<style scoped>
.tachado {
    text-decoration: line-through;
    color: rgb(19 78 74);
}

.normal {
    color:rgb(34 197 94);
}
</style>

