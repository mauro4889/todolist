import { Avatar, Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/img/logo.png'
export const Navbar = () => {
    return (
        <Stack w='100vw' borderBottom='2px solid #24222E'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box>
                    <Image
                        src={logo}
                        w='5em'
                    />
                </Box>
                <Box w='50%'>
                    <Flex direction='row-reverse' justifyContent='space-around' alignContent='center'>
                        <Avatar
                            name='Dan Abrahmov'
                            src='https://bit.ly/dan-abramov'
                            borderRadius='100%'
                            w='4em'
                            mr='2em'
                        />
                        <Text color='white' fontWeight='bold'>Hola usuario</Text>
                    </Flex>
                </Box>
            </Flex>
        </Stack>
    )
}
