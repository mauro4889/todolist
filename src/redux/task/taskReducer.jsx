import { ADD, DELETE, UPDATE, GET } from "./taskAction"



const initialState = {
    
}

export const taskReduer = (state = initialState, action) => {
    const { type, payload } = action
    console.log(state)
    switch (type) {
        case ADD:
            return {
                ...state,
                tasks: payload
            }
        case UPDATE:
            return { 
                ...state, 
                tasks: [...state.tasks, payload] }
        case GET:
            return{}
        case DELETE:
            return 
        default:
            return state
    }
}