import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneById } from '../../axios/user'
import { updateTask } from '../../redux/task/taskAction'
import { Task } from '../Task/Task'


export const TodoList = () => {
    const [isTask, setIsTask] = useState()
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    console.log(tasks.tasks)


    const dataUser = async () => {
        try {
            const data = await getOneById()
            const sendData = await dispatch(updateTask(data.data.tasks))
            return sendData
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        dataUser()
    }, [isTask])

    return (
        <Stack
            bg='white'
            align='center'
            w='100%'
            maxW='768px'
            placeItems='center'>
                {tasks.tasks ? tasks.tasks.map( task => <Task key={task.id} {...task} />) : console.log('no hay tareas')} 
            <Box>
                <Button
                    bg='#FF5C7D'
                    color='white'
                    border='none'
                    h='25px'
                    fontWeight='bold'
                    borderRadius='5px'
                    my='1em'
                    cursor='pointer'
                >
                    Limpiar todo
                </Button>
            </Box>
        </Stack>
    )
}
