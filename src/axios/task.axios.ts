import axios from "axios"


const token = localStorage.getItem('token')

export const postTaks = async (task, description) =>{
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:3001/tasks',
            data:{
                task,
                description
            },
            headers:{
                authorization: "Bearer " + token?.replace(/['"]+/g, '')
            }
        })
        console.log(response)
    } catch (error) {
        
    }
}