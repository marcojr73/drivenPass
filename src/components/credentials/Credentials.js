import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export function Credentials(){

    const url = "http://localhost:5000"
    const [credentials, setCredentials] = useState([])

    async function getCredentialsofUser(){
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.get(`${url}/credentials`, config)
            setCredentials([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCredentialsofUser()
    },[])
    return(
        <h1>eu sou a tela de credenciais</h1>
    )
}