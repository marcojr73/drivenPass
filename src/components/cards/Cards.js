import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export function Cards(){
    const url = "http://localhost:5000"
    const [cards, setCards] = useState([])

    async function getCardsofUser(){
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.get(`${url}/cards`, config)
            setCards([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getCardsofUser()
    },[])
    return(
        <h1>eu sou a tela de cartão</h1>
    )
}