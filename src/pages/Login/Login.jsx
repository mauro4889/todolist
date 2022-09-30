import { FormControl, VStack, Text, Box, Input, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"

export const Login = () => {
    const { register, handleSubmit, reset } = useForm()
    return (
        <VStack bg='white' w='50vw' m='auto' mt='5%' borderRadius='5%'>
            <Text fontWeight='bold' color='#61ABFF'>Inicia sesión</Text>
            <form>
                <Box>
                    <FormControl>
                        <Input
                        placeholder='Ingrese su usuario'
                        border='none'
                        borderBottom='1px solid black'
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                        placeholder='Ingrese su contraseña'
                        border='none'
                        borderBottom='1px solid black'
                        mt='5%'
                        type='password'
                        />
                    </FormControl>
                    <NavLink><Text fontSize='10px' textDecoration='none' mt='10%'>¿Olvidates la contraseña?</Text></NavLink>
                    <NavLink><Text fontSize='10px'>¿No tenes usuario?</Text></NavLink>
                    <Button 
                    my='10%'
                    mx='auto'
                    border='1px solid #FF5A79'
                    borderRadius='5%'
                    p='3%'
                    bg='white'
                    color='#FF5A79'
                    fontWeight='bold'
                    type='submit'>
                        Ingresar
                    </Button>
                </Box>
            </form>
        </VStack>
    )
}
