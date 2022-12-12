export const ADD = 'ADD'
export const GET = 'GET'
export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'

export const newTask = task =>({
    type: ADD,
    payload: task
})

export const deleteTask = task => ({
    type: DELETE,
    payload: task
})

export const updateTask = task => ({
    type: UPDATE,
    payload: task
})