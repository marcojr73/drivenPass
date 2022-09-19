import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import axios from "axios"
import { ContainerLogin } from "./ContainerLogin";

import padlock from "../../images/lock.png"


export function SignUp(){
    const [ password, setPassword ] = useState("")
    const [email, setEmail] = useState("")
    const url = "https://drivenpass-api-mj.herokuapp.com"

    const navigate = useNavigate()

    async function logInUser(e){
        e.preventDefault()

        const data = {
            email,
            password,
        }
        try {
            const response = await axios.post(`${url}/sign-up`, data)
            navigate("/")
        } catch (error) {
            alert(error.response.data)
        }

    }
    return(
        <ContainerLogin>
            <img src={padlock}/>
            <h1>DrivenPass</h1>
            <form onSubmit={logInUser}>
                <p>Usuário (e-mail)</p>
                <input  type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                ></input>
                <p>Senha</p>
                <input  type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Passsword"
                ></input>
                <button type="submit" className="button">Criar</button>
                <Link className="button back" to="/">Voltar</Link>
            </form>
        </ContainerLogin>
    )
}