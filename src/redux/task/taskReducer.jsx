import { ADD, DELETE, UPDATE } from "./taskAction"



const initialState = {
    tasks: [],
    loanding: false
}

export const taskReduer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD:
            return {
                ...state,
                tasks: payload,
                loanding: false
            }
        case UPDATE:
            return { 
                ...state, 
                tasks: [...state.tasks, payload] }
        case DELETE:
            return
    }
}