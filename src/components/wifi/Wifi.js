import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export function Wifi(){
    const url = "http://localhost:5000"
    const [wifi, setWifi] = useState([])

    async function getWifiofUser(){
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.get(`${url}/wifi`, config)
            setWifi([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getWifiofUser()
    },[])
    return(
        <h1>eu sou a tela de wifi</h1>
    )
}