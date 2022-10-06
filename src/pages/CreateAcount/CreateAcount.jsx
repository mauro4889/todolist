import { Box, Button, FormControl, Input, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const CreateAcount = () => {
    return (
        <Stack
            bg='white'
            maxW='80vw'
            h='40vh'
            margin='auto'
            align='center'
            mt='10%'
            gap='10%'
            borderRadius='5px'>
            <Text
            fontWeight='bold'
            textAlign='center'
            >
                Create tu cuenta para guardar tus tareas
            </Text>
            <FormControl w='90%'>
                <Input
                    placeholder='Ingrese nombre'
                    border='none'
                    borderBottom='1px solid black'
                    w='100%'
                />
            </FormControl>
            <FormControl w='90%'>
                <Input
                    placeholder='Ingrese email'
                    type='email'
                    border='none'
                    borderBottom='1px solid black'
                    w='100%'
                />
            </FormControl>
            <FormControl w='90%'>
                <Input
                    placeholder='Ingrese contraseña'
                    type='password'
                    border='none'
                    borderBottom='1px solid black'
                    w='100%'
                />
            </FormControl>
            <Box>
                <Button
                    m='auto'
                    h='2em'
                    w='10em'
                    border='1px solid #FF5A79'
                    borderRadius='5%'
                    p='3%'
                    bg='white'
                    color='#FF5A79'
                    fontWeight='bold'
                    cursor='pointer'
                    _hover={{bg:'#FF5A79', color:'white'}}
                    type='submit'>Registrarse
                </Button>
            </Box>
        </Stack>
    )
}
