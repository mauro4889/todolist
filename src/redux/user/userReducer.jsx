import { SET_USER } from "./userAction"


const initialState = {
    user: "",
    permission: []
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload.email,
                permission: [...payload.permission]
            }
        default:
            return state
    }
}