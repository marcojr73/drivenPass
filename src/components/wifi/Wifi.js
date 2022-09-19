import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Header } from "../header/Header"
import { useContext } from "react"
import { ContainerPasswordsUser } from "../utils/ContainerPasswordsUser"
import { Link } from "react-router-dom"
import DataPass from "../context/dataPass"
import wifiimg from "../../images/wifi.png"


export function Wifi(){
    const url = "https://drivenpass-api-mj.herokuapp.com"
    const [wifi, setWifi] = useState([])
    const { data, setData } = useContext(DataPass)

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
        <>
        <Header reference="wifi"/>
        <ContainerPasswordsUser>
            {wifi.map((wifi, index)=>{
                return(
                    <Link to={`/wifi/view`}>
                    <li key={index} onClick={()=>setData(wifi)}>
                        <img src={wifiimg}/>
                        <p>{wifi.title}</p>
                    </li>
                    </Link>
                )
            })}
        </ContainerPasswordsUser>
        </>
    )
}