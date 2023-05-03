<script setup>
import { ref, onMounted } from 'vue'
import { getAllTasks } from '../api/tasks.api'
import TaskCard from './TaskCard.vue';

const taskList = ref()

onMounted(() => {
    async function loadTasks() {
        const res = await getAllTasks()
        taskList.value = res.data
    }
    loadTasks()
})

</script>

<template>
    <div class="grid grid-cols-3 gap-3">
        <div v-for="task in taskList" :key="task.id">
            <TaskCard :task="task" />
        </div>
    </div>
</template>

