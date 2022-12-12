import axios from "axios";

const token = localStorage.getItem('token')


export const getUser = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3001/users',
            headers:{
                authorization: "Bearer " + token
            }
        });
        console.log(`Respuesta del get ${response}`);
    } catch (error) {
        console.error(error);
    }
}

export const login = async (email, password) =>{
    try {
        const response = await axios.post('http://localhost:3001/auth/login',{
            email,
            password
        })
        return response
    } catch (error) {
        console.log(error)
        return error
    }
}