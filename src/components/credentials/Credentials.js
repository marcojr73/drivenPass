import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

import padlock from "../../images/credential.png"
import { Header } from "../header/Header"
import { ContainerPasswordsUser } from "../utils/ContainerPasswordsUser"

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
            console.log(response.data)
            setCredentials([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCredentialsofUser()
    },[])
    return(
        <>
        <Header/>
        <ContainerPasswordsUser>
            {credentials.map((credential, index)=>{
                return(
                    <li>
                        <img src={padlock}/>
                        <p>site {index + 1}</p>
                    </li>

                )
            })}
        </ContainerPasswordsUser>
        </>
    )
}