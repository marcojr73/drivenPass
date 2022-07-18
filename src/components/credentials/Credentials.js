import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { Link } from "react-router-dom"

import padlock from "../../images/credential.png"
import DataPass from "../context/dataPass"
import { Header } from "../header/Header"
import { ContainerPasswordsUser } from "../utils/ContainerPasswordsUser"

export function Credentials(){

    const url = "http://localhost:5000"
    const [credentials, setCredentials] = useState([])
    const { data, setData } = useContext(DataPass)

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
        <>
        <Header reference="credenciais"/>
        <ContainerPasswordsUser>
            {credentials.map((credential, index)=>{
                return(
                    <Link to={`/credentials/view`}>
                    <li key={index} onClick={()=>setData(credential)}>
                        <img src={padlock}/>
                        <p>{credential.title}</p>
                    </li>
                    </Link>
                )
            })}
        </ContainerPasswordsUser>
        </>
    )
}