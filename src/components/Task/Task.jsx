import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, Stack, Text, Button } from '@chakra-ui/react'
import React from 'react'

export const Task = ({id, task}) => {
    return (
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
                <Text>{task}</Text>
            </Flex>
        </Box>
    )
}
