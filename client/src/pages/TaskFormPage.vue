<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { showToast } from '../toast'
import InputSwitch from 'primevue/inputswitch';

const router = useRouter()
const route = useRoute()

const task = reactive({})
const checked = ref(false)

onMounted(() => {
    if (route.params.id) {
        async function loadTask() {
            const { data: { title, description, done } } = await getTask(route.params.id)

            task.title = title
            task.description = description
            task.done = done
            document.querySelector('#save').innerText = 'Edit'
        }
        loadTask()
    }
})

const onSubmit = async () => {
    if (route.params.id) {
        const res = await updateTask(route.params.id, { ...task })
        console.log(res)
        showToast('Edited!')
    } else {
        const res = await createTask(task)
        console.log(res)
        showToast('Created!')
    }
    router.push('/')
}
const onDelete = async () => {
    const accepted = window.confirm(`Do you want to remove the task ${route.params.id} ?`)
    if (accepted) {
        const res = await deleteTask(route.params.id)
        console.log(res)
        showToast('Deleted!')
        router.push('/')
    }
}
</script>


<template>
    <div class="max-w-xl mx-auto">
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="task.title" placeholder="title"
                class="bg-zinc-600 p-3 rounded-lg block w-full mb-3" />
            <textarea rows="3" v-model="task.description" placeholder="description"
                class="bg-zinc-600 p-3 rounded-lg block w-full mb-3"></textarea>

                <div class="flex justify-between p-1 w-full mb-3">
                    <span>Done</span>
                    <span>
                        <InputSwitch v-model="task.done" />
                    </span>
                </div>
            <button id="save" class="bg-indigo-500 p-3 rounded-lg block w-full mb-3">Create</button>
        </form>

        <div class="flex justify-end">
            <button v-if="route.params.id" @click="onDelete" class="bg-red-500 p-3 rounded-lg w-48">
                Delete
            </button>
        </div>

    </div>
</template>


