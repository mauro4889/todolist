import { Avatar, Box, Flex, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/img/logo.png'
export const Navbar = () => {
    return (
        <Stack w='100vw'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box>
                    <Image
                        src={logo}
                        w='6em'
                    />
                </Box>
                <Box>
                    <Avatar
                        name='Dan Abrahmov'
                        src='https://bit.ly/dan-abramov'
                        borderRadius='100%'
                        w='4em'
                        mr='2em'
                        />
                </Box>
            </Flex>
        </Stack>
    )
}
