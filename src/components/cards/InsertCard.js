import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { ContainerInsert } from "../utils/ContainerInsert"

export function InsertCard(){

    const [number, setNumber] = useState("")
    const [nameCard, setNameCard] = useState("")
    const [cvc, setCvc] = useState("")
    const [expirationDate, setExpirationDate] = useState("")
    const [password, setPassword] = useState("")
    const [isVirtual, setIsvirtual] = useState(false)
    const [type, setType] = useState("credit")
    const [title, setTitle] = useState("")
    const url = "http://localhost:5000/card/create"

    async function sendDataRegister(e){
        e.preventDefault()
        
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const data = {
            number,
            nameCard,
            cvc,
            expirationDate,
            password,
            isVirtual,
            type,
            title
        }

        console.log(data)

        try {
            const response = await axios.post(url, data, config)
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
            <section><p>Number</p>
            <input value={number} onChange={(e) => setNumber(e.target.value)} type="text"></input></section>

            <section><p>Name Card</p>
            <input value={nameCard} onChange={(e) => setNameCard(e.target.value)} type="text"></input></section>

            <section><p>cvc</p>
            <input value={cvc} onChange={(e) => setCvc(e.target.value)} type="text"></input></section>

            <section><p>Expiration date</p>
            <input value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} type="text"></input></section>

            <section><p>password</p>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text"></input></section>

            <section>
            <p>virtual</p>
            <select value={isVirtual} onChange={(e) => setIsvirtual(e.target.value)} >
		        <option value="false">false</option>
		        <option value="true">true</option>
	        </select>
            </section>

            <section>
            <p>type</p>
            <select value={type} onChange={(e) => setType(e.target.value)} >
		        <option value="credit">credit</option>
		        <option value="debit">debit</option>
	        </select>
            </section>

            <section>
            <p>title</p>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text"></input>
            </section>
            <button type="submit">send</button>
        </form>
        <Link to="/home">
            <p>voltar</p>
        </Link>
        </ContainerInsert>
        </>
    )
}