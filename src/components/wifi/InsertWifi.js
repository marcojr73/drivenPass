
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { ContainerInsert } from "../utils/ContainerInsert"

export function InsertWifi(){

    const [nameWireless, setNameWireless] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const urlApi = "https://drivenpass-api-mj.herokuapp.com/wifi/create"

    async function sendDataRegister(e){
        e.preventDefault()
        
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const data = {
            nameWireless,
            password,
            title
        }

        console.log(data)

        try {
            const response = await axios.post(urlApi, data, config)
            alert("sucesso")
        } catch (error) {
            alert(error)
        }
    }

    return(
        <>
        <Header/>
        <ContainerInsert>
        <h1>Cadastro</h1>
        <form onSubmit={sendDataRegister}>
            <section><p>Nome da rede</p>
            <input value={nameWireless} onChange={(e) => setNameWireless(e.target.value)} type="text"></input></section>

            <section><p>Password</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text"></input></section>

            <section><p>Title</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"></input></section>
            
            <button type="submit">Registrar</button>
        </form>
        <Link to="/home">
            <p>voltar</p>
        </Link>
        </ContainerInsert>
        </>
    )
}