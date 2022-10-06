import { Avatar, Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'


export const Navbar = () => {
    const navigate = useNavigate()

    const navigateHome = () =>{
        navigate('/')
    }
    
    return (
        <Stack w='100vw' borderBottom='2px solid #24222E'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box onClick={navigateHome} cursor='pointer'>
                    <Image
                        src={logo}
                        w='5em'
                    />
                </Box>
                <Box w='50%'>
                    <Flex direction='row-reverse' justifyContent='space-evenly' alignContent='center'>
                        <Menu>
                            <MenuButton bg='none' border='none' cursor='pointer'>
                                <Avatar
                                    name='Dan Abrahmov'
                                    src='https://bit.ly/dan-abramov'
                                    borderRadius='100%'
                                    w='4em'
                                    mr='2em'
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem><NavLink to='/' style={{
                                    textDecoration:'none',
                                    color:'#FF5C7D'}} >Tareas</NavLink></MenuItem>
                                <MenuItem><NavLink to='/perfil' style={{
                                    textDecoration:'none',
                                    color:'#FF5C7D'}}>Perfil</NavLink></MenuItem>
                                <MenuItem><NavLink to='/' style={{
                                    textDecoration:'none',
                                    color:'#FF5C7D'}}>Cerrar sesión</NavLink></MenuItem>
                            </MenuList>
                        </Menu>
                        <Text color='white' fontWeight='bold'>usuario</Text>
                    </Flex>
                </Box>
            </Flex>
        </Stack>
    )
}
