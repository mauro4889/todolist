import { Button, Flex, FormControl, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from "react-hook-form"
import { postTaks } from '../../axios/task.axios.ts'

export const TodoForm = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async data => {
        const {task, description} = data
        console.log(task, description)
        await postTaks(task, description)
        reset()
    }

    return (

        <Stack
            bg='white'
            w='100%'
            maxW='768px'
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex justifyContent='space-between'>
                    <FormControl isRequired>
                        <Input
                            placeholder='Agregar tarea'
                            w='80%'
                            h='1.5em'
                            type='text'
                            border='none'
                            fontSize='1em'
                            ml='2%'
                            {...register("task", { required: true, maxLength: 20 })
                            } />
                            <Input
                            placeholder='Descripcion'
                            w='80%'
                            h='1.5em'
                            type='text'
                            border='none'
                            fontSize='1em'
                            ml='2%'
                            {...register("description", { required: true, maxLength: 20 })
                            } />
                    </FormControl>
                    <Button
                        border='none'
                        bg='white'
                        color='#61ABFF'
                        fontWeight='bold'
                        cursor='pointer'
                        w='20%'
                        type='submit' >Agregar</Button>
                </Flex>
            </form>
        </Stack>
    )
}
