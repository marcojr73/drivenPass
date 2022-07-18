import axios from "axios"
import { useEffect, useState } from "react"

export function Notes(){
    const url = "http://localhost:5000"
    const [notes, setNotes] = useState([])

    async function getNotesofUser(){
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.get(`${url}/notes`, config)
            setNotes([...response.data])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getNotesofUser()
    },[])

    return(
        <h1>eu sou a tela de notas</h1>
    )
}