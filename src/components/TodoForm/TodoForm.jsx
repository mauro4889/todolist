import { Button, FormControl, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from "react-hook-form"

export const TodoForm = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) =>{
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction='row' bg='white' w='100%'>
                <FormControl isRequired>
                    <Input
                        placeholder='Ingrese una tarea nueva'
                        type='text'
                        border='none'
                        fontSize='1em'
                        h='1.5em'
                        {...register("tarea", { required: true, maxLength: 20 })
                        }/>
                </FormControl>
                <Button 
                border='none' 
                bg='white'
                color='#61ABFF'
                fontWeight='bold'
                type='submit' >Agregar</Button>
            </Stack>
        </form>
    )
}
