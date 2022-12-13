import { Button, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { getOneById } from '../../axios/user'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'

export const Todo = () => {
    return (
        <Stack 
        maxW='95vw' 
        m='auto' 
        mt='0'
        placeItems='center' 
        direction='column'>
            <Heading textAlign='center' color='white'>Lista de tareas</Heading>
            <Button onClick={getOneById}>Usuario</Button>
            <TodoForm/>
            <TodoList/>
        </Stack>
        
    )
}
