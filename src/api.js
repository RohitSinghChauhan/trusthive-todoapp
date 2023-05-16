import axios from 'axios';

export const getTodos = () => {
    return axios.get(`https://trusthive-todo-api.onrender.com/todos`);
}

export const getTodosByQuery = (q = '') => {
    return axios.get(`https://trusthive-todo-api.onrender.com/todos?q=${q}`);
}

export const postTodo = (payload) => {
    return axios.post(`https://trusthive-todo-api.onrender.com/todos`, payload);
}

export const updateTodo = (id, status) => {
    return axios.patch(`https://trusthive-todo-api.onrender.com/todos/${id}`, { status: !status });
}

export const deleteTodo = (id) => {
    return axios.delete(`https://trusthive-todo-api.onrender.com/todos/${id}`);
}