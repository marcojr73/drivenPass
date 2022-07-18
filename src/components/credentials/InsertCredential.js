import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { ContainerInsert } from "../utils/ContainerInsert"

export function InsertCredential(){

    const [url, setUrl] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const urlApi = "http://localhost:5000/credentials/create"

    async function sendDataRegister(e){
        e.preventDefault()
        
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const data = {
            url,
            userName,
            password,
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
            <section><p>url</p>
            <input value={url} onChange={(e) => setUrl(e.target.value)} type="text"></input></section>

            <section><p>userName</p>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text"></input></section>

            <section><p>password</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text"></input></section>

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