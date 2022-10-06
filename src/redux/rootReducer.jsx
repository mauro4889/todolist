import { combineReducers } from 'redux'
import { btnmenuReducer } from './btnmenuReducer/btnmenuReducer'


export const rootReducer = combineReducers({
    menu: btnmenuReducer,
})
