<script setup>
    import { reactive } from 'vue'
    import { createTask, deleteTask } from '../api/tasks.api'
    import { useRouter, useRoute } from 'vue-router'

    const router = useRouter()
    const task = reactive({})

    const onSubmit = async () => {
        const res = await createTask(task)
        console.log(res)
        router.push('/')
    }

    const route = useRoute()
    const editing = route.params.id != undefined

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
        <button>Save</button>
    </form>

    <button v-if="editing" @click="onDelete">Delete</button>

</template>


