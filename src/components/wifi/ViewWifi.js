import { Header } from "../header/Header";
import { useContext } from "react";
import DataPass from "../context/dataPass";
import { ContainerPassword } from "../utils/ContainerPassword";
import { Link } from "react-router-dom";
import axios from "axios";

export function ViewWifi(){
    const { data, setData } = useContext(DataPass)

    const urlApi = "http://localhost:5000/wifi/delete"

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
                    <p className="label">Nome da rede</p>
                    <p>{data.nameWireless}</p>
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
            <div onClick={()=> deleteItem()} className="delete">x</div>
            </footer>
        </ContainerPassword>
        </>
        
    )
}