import { Avatar, Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useState } from 'react'




export const Navbar = () => {
    const navigate = useNavigate()
    const [isUser, setIsUser] = useState()

    const navigateHome = () => {
        navigate('/')
    }

    const userState = async () => {
        const loggedUser = await localStorage.getItem('user')
        const user = await JSON.parse(loggedUser)
        setIsUser(user)
        console.log(isUser)
    }

    useEffect(() => {
        userState()
    }, [])

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
                            <MenuButton as={Button} bg='none' border='none' cursor='pointer' isDisabled={!isUser} fontSize='20px' color='#fff'>
                                {isUser ? <Avatar
                                    name={isUser.data.email}
                                    src={isUser.data.email}
                                    borderRadius='100%'
                                    w='4em'
                                    mr='2em'
                                /> : <FontAwesomeIcon icon={faUserAlt} />}
                            </MenuButton>
                            <MenuList>
                                <MenuItem><NavLink to='/' style={{
                                    textDecoration: 'none',
                                    color: '#FF5C7D'
                                }} >Tareas</NavLink></MenuItem>
                                <MenuItem><NavLink to='/perfil' style={{
                                    textDecoration: 'none',
                                    color: '#FF5C7D'
                                }}>Perfil</NavLink></MenuItem>
                                <MenuItem><NavLink to='/' style={{
                                    textDecoration: 'none',
                                    color: '#FF5C7D'
                                }}>Cerrar sesión</NavLink></MenuItem>
                            </MenuList>
                        </Menu>
                        <Text color='white' fontWeight='bold'>
                            {isUser ? `${isUser}` : <NavLink to='/login' >Iniciar sesion</NavLink>}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
        </Stack>
    )
}
