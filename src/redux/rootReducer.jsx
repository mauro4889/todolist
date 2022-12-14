import { combineReducers } from 'redux'
import { taskReduer } from './task/taskReducer'
import { userReducer } from './user/userReducer'


export const rootReducer = combineReducers({
    user: userReducer,
    tasks: taskReduer
})
