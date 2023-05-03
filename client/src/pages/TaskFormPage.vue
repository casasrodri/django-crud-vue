<script setup>
    import { reactive } from 'vue'
    import { createTask } from '../api/tasks.api'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const task = reactive({})

    const onSubmit = async () => {
        const res = await createTask(task)
        console.log(res)
        router.push('/')
    }
</script>

<template>

    <form @submit.prevent="onSubmit">
        <input type="text" v-model="task.title" placeholder="title" />
        <textarea rows="3" v-model="task.description" placeholder="description"></textarea>
        <button>Save</button>
    </form>

</template>


