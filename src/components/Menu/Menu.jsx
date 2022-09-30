import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faUser } from '@fortawesome/free-regular-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <Stack 
        h='80vh' 
        border='1px' 
        borderColor='white' 
        borderRight='2px solid#24222E' 
        mt='-0.5em' 
        direction='column' 
        justify='space-around'
        align='center'>
                <Box>
                    <Button
                        border='none'
                        w='8em'
                        h='2.5em'
                        borderRadius='5%'
                        bg='white'
                        leftIcon={<FontAwesomeIcon icon={faClipboard} 
                        />} >
                        <NavLink to='/'>Tareas</NavLink></Button>
                </Box>
                <Box>
                    <Button
                        border='none'
                        w='8em'
                        h='2.5em'
                        borderRadius='5%'
                        bg='white'
                        leftIcon={<FontAwesomeIcon icon={faUser} />}>
                        <NavLink to='/perfil'>Perfil</NavLink></Button></Box>
                <Box>
                    <Button
                        border='none'
                        w='8em'
                        h='2.5em'
                        borderRadius='5%'
                        bg='white'
                        leftIcon={<FontAwesomeIcon icon={faRightFromBracket} />} >
                        Salir</Button>
                </Box>
        </Stack>
    )
}
