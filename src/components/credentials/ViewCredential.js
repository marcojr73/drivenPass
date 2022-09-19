import { Header } from "../header/Header";
import { useContext } from "react";
import DataPass from "../context/dataPass";
import { ContainerPassword } from "../utils/ContainerPassword";
import { Link } from "react-router-dom";
import axios from "axios";

export function ViewCredential(){
    const { data, setData } = useContext(DataPass)

    const urlApi = "https://drivenpass-api-mj.herokuapp.com/credentials/delete"

    async function deleteItem(){
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.delete(`${urlApi}/${data.id}`, config)
            alert("sucesso ao deletar")
        } catch (error) {
            alert(error)
        }
    }


    return(
        <>
        <Header/>
        <ContainerPassword>
            <ul>{data.title}
                <li>
                    <p className="label">url</p>
                    <p>{data.url}</p>
                </li>
                <li>
                    <p className="label">usuário</p>
                    <p>{data.userName}</p>
                </li>
                <li>
                    <p className="label">Senha</p>
                    <p>{data.password}</p>
                </li>
            </ul>
            <footer>
            <Link to="/home">
                <p className="back">voltar</p>
            </Link>
            <div onClick={()=>deleteItem()} className="delete">x</div>
            </footer>
        </ContainerPassword>
        </>
        
    )
}