import { createRouter, createWebHashHistory } from 'vue-router'

import TasksPage from './pages/TasksPage.vue'
import TaskFormPage from './pages/TaskFormPage.vue'

const routes = [
    { path: '/', redirect: '/tasks' },
    { path: '/tasks', component: TasksPage },
    { path: '/create-task', component: TaskFormPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
