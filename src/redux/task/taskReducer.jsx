import { ADD, DELETE, UPDATE, GET } from "./taskAction"
import {updateTasks} from "./taskUtils"



const initialState = {
    tasks: []
}

export const taskReduer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD:
            return {
                ...state,
                tasks: payload
            }
        case UPDATE:
            const newTasks = updateTasks(state.tasks, payload)
            console.log(newTasks)
            return { 
                ...state,
                tasks: newTasks }
        case GET:
            return{}
        case DELETE:
            return 
        default:
            return state
    }
}