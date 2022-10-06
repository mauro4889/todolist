import React from 'react'

const OPEN_CLOSE = 'OPEN_CLOSE'

export const abriCerrar = () =>{
    return {
        type: OPEN_CLOSE
    }
}

const initialState = {
    visible: false
}

export const btnmenuReducer = (state=initialState, action) => {
    const {type} = action
    switch(type){
        case OPEN_CLOSE:
            const visible = state.visible
            return {visible: !visible}
        default:
            return state
    }
}
