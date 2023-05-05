import axios from 'axios'

// const ip = 'localhost'
const ip = 'NO590727'
// const ip = '192.168.1.7'


const tasksApi = axios.create({
    baseURL: `http://${ip}:8000/tasks/api/v1/tasks/`
})

export const getAllTasks = () => tasksApi.get('/')

export const getTask = id => tasksApi.get(`/${id}/`)

export const createTask = task => tasksApi.post('/', task)

export const deleteTask = id => tasksApi.delete(`/${id}/`)

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)
