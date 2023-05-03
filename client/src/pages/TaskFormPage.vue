<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'

const router = useRouter()
const route = useRoute()

const task = reactive({})

onMounted(() => {
    if (route.params.id) {
        async function loadTask() {
            const { data: { title, description } } = await getTask(route.params.id)

            task.title = title
            task.description = description
            document.querySelector('#save').innerText = 'Edit'
        }
        loadTask()
    }
})

const onSubmit = async () => {
    if (route.params.id) {
        const res = await updateTask(route.params.id, { ...task })
        console.log(res)
    } else {
        const res = await createTask(task)
        console.log(res)
    }
    router.push('/')
}
const onDelete = async () => {
    const accepted = window.confirm(`Seguro quiere eliminar la tarea ${route.params.id} ?`)
    if (accepted) {
        const res = await deleteTask(route.params.id)
        console.log(res)
        router.push('/')
    }
}
</script>


<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="task.title" placeholder="title" />
        <textarea rows="3" v-model="task.description" placeholder="description"></textarea>
        <button id="save">Create</button>
    </form>

    <button v-if="route.params.id" @click="onDelete">Delete</button>
</template>


