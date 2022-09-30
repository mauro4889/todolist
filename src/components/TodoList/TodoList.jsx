import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const TodoList = () => {
    return (
        <Stack bg='white' align='center'>
            <Box borderBottom='1px solid #61ABFF' w='90%'>
                <Flex justifyContent='space-around' alignItems='center'>
                    <Stack direction='row'>
                        <Button
                            border='none'
                            h='1.5em'
                            bg='white'
                            color='green'><Icon as={CheckIcon} /></Button>
                        <Button
                            border='none'
                            h='1.5em'
                            bg='white'
                            color='red'
                        ><Icon as={CloseIcon} /></Button>
                    </Stack>
                    <Text>Tarea para hacer larga</Text>
                </Flex>
            </Box>
            <Box borderBottom='1px solid #61ABFF' w='90%'>
                <Flex justifyContent='space-around' alignItems='center'>
                    <Stack direction='row'>
                        <Button
                            border='none'
                            borderRadius='10%'
                            h='1.5em'
                            bg='white'
                            color='green'><Icon as={CheckIcon} /></Button>
                        <Button
                            border='none'
                            borderRadius='10%'
                            h='1.5em'
                            bg='white'
                            color='red'
                        ><Icon as={CloseIcon} /></Button>
                    </Stack>
                    <Text>Tarea para hacer corta</Text>
                </Flex>
            </Box>
            <Button
            bg='white'
            color='#FF5C7D'
            border='none'
            fontWeight='bold'
            >
                Limpiar todo
            </Button>
        </Stack>
    )
}
