import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { ContainerInsert } from "../utils/ContainerInsert"

export function InsertNote(){

    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const urlApi = "http://localhost:5000/notes/create"

    async function sendDataRegister(e){
        e.preventDefault()
        
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const data = {
           note,
            title
        }

        console.log(data)

        try {
            const response = await axios.post(urlApi, data, config)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <Header/>
        <ContainerInsert>
        <form onSubmit={sendDataRegister}>
            <section><p>Note</p>
            <input value={note} onChange={(e) => setNote(e.target.value)} type="text"></input></section>

            <section><p>title</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"></input></section>
            
            <button type="submit">send</button>
        </form>
        <Link to="/home">
            <p>voltar</p>
        </Link>
        </ContainerInsert>
        </>
    )
}