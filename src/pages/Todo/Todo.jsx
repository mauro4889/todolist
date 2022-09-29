import React from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'

export const Todo = () => {
    return (
        <div>
            Todo
            <TodoForm/>
            <TodoList/>
        </div>
        
    )
}
