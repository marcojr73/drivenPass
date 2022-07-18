import axios from "axios"
import { useEffect, useState } from "react"
import { Header } from "../header/Header"
import { Link } from "react-router-dom"
import { ContainerPasswordsUser } from "../utils/ContainerPasswordsUser"
import { useContext } from "react"
import DataPass from "../context/dataPass"
import noteimg from "../../images/note.png"

export function Notes(){
    const url = "http://localhost:5000"
    const [notes, setNotes] = useState([])
    const { data, setData } = useContext(DataPass)

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
        <>
        <Header reference="Notas"/>
        <ContainerPasswordsUser>
            {notes.map((note, index)=>{
                return(
                    <Link to={`/notes/view`}>
                    <li key={index} onClick={()=>setData(note)}>
                        <img src={noteimg}/>
                        <p>{note.title}</p>
                    </li>
                    </Link>
                )
            })}
        </ContainerPasswordsUser>
        </>
    )
}