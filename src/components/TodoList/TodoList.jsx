import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneById } from '../../axios/user'
import { setCurrentUser } from '../../redux/user/userAction'

export const TodoList = () => {
    const [isTask, setIsTask] = useState()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const dataUser = async () => {
        const data = await getOneById()
        const { email, tasks } = data.data
        console.log(user)
    }

    useEffect(() => {
        dataUser()
    }, [])

    return (
        <Stack
            bg='white'
            align='center'
            w='100%'
            maxW='768px'
            placeItems='center'>
            <Box borderBottom='1px solid #61ABFF' w='90%'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Stack direction='row'>
                        <Button
                            border='none'
                            h='1.5em'
                            bg='white'
                            color='green'
                            cursor='pointer'>
                            <Icon as={CheckIcon} />
                        </Button>
                        <Button
                            border='none'
                            h='1.5em'
                            bg='white'
                            color='red'
                            cursor='pointer'
                        ><Icon as={CloseIcon} /></Button>
                    </Stack>
                    <Text>Tarea para hacer larga</Text>
                </Flex>
            </Box>
            <Box borderBottom='1px solid #61ABFF' w='90%'>
                <Flex justifyContent='space-between' alignItems='center'>
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
            <Box>
                <Button
                    bg='#FF5C7D'
                    color='white'
                    border='none'
                    h='25px'
                    fontWeight='bold'
                    borderRadius='5px'
                    my='1em'
                    cursor='pointer'
                >
                    Limpiar todo
                </Button>
            </Box>
        </Stack>
    )
}
