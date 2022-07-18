import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import DataPass from "../context/dataPass"

import cardimg from "../../images/card.png"
import { ContainerPasswordsUser } from "../utils/ContainerPasswordsUser"
import {Header} from "../header/Header"

export function Cards(){
    const url = "http://localhost:5000"
    const [cards, setCards] = useState([])
    const { data, setData } = useContext(DataPass)

    async function getCardsofUser(){
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.get(`${url}/card`, config)
            setCards([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCardsofUser()
    },[])
    return(
        <>
        <Header reference="cartões"/>
        <ContainerPasswordsUser>
            {cards.map((card, index)=>{
                return(
                    <Link to={`/cards/view`}>
                    <li key={index} onClick={()=>setData(card)}>
                        <img src={cardimg}/>
                        <p>{card.title}</p>
                    </li>
                    </Link>

                )
            })}
        </ContainerPasswordsUser>
        </>
    )
}