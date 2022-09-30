import { Box, CircularProgress, CircularProgressLabel, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Perfil = () => {
    return (
        <Stack>
            <Heading
                fontSize='1em'
                color='white'
                textAlign='center' >
                Ve el progreso de tus tareas!
            </Heading>
            <Flex wrap='wrap' direction='row' gap='2%' justifyContent='space-around' >
                <Box w='90%' mb='5%'>
                    <Text color='white' fontSize='20px' textAlign='center'> Tareas totales 100</Text>
                </Box>
                <Box w='40%'>
                        <CircularProgress value={50} size='2.8em' color='#61ABFF'>
                            <CircularProgressLabel mt='-5px' w='80%' fontSize='15px' color='white' textAlign='center'>
                                Tareas finalizadas
                                50%
                            </CircularProgressLabel>
                        </CircularProgress>
                </Box>
                <Box w='40%'>
                        <CircularProgress value={25} size='2.8em' color='#61ABFF'>
                            <CircularProgressLabel mt='-5px' w='80%' fontSize='15px' color='white' textAlign='center'>
                                Tareas pendientes
                                25%
                            </CircularProgressLabel>
                        </CircularProgress>
                </Box>
                <Box w='40%'>
                    <CircularProgress value={25} size='2.8em' color='#61ABFF'>
                        <CircularProgressLabel mt='-5px' w='80%' fontSize='15px' color='white' textAlign='center'>
                            Tareas canceladas
                            25%
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
            </Flex>
        </Stack>
    )
}
