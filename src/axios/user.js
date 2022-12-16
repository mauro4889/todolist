import axios from "axios";
import jwt from 'jwt-decode'


const token = localStorage.getItem('token')


export const getUser = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:3001/users',
            headers:{
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export const getOneById = async () => {
    try {
        const {id} = await jwt(token)
        const {data} = await axios({
            method: 'get',
            url: `http://localhost:3001/users/${id}`,
            headers:{
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }            
        })
        console.log(data)
        return data
    } catch (error) {
        
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
