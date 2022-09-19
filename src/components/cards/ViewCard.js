import { Header } from "../header/Header";
import { useContext } from "react";
import DataPass from "../context/dataPass";
import { ContainerPassword } from "../utils/ContainerPassword";
import { Link } from "react-router-dom";
import axios from "axios";

export function ViewCard(){
    const { data, setData } = useContext(DataPass)
    const urlApi = "https://drivenpass-api-mj.herokuapp.com/card/delete"

    async function deleteItem(){
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        try {
            const response = await axios.delete(`${urlApi}/${data.id}`, config)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <Header/>
        <ContainerPassword>
            <ul>{data.title}
                <li>
                    <p className="label">Número</p>
                    <p>{data.number}</p>
                </li>
                <li>
                    <p className="label">Nome</p>
                    <p>{data.nameCard}</p>
                </li>
                <li>
                    <p className="label">Cvc</p>
                    <p>{data.cvc}</p>
                </li>
                <li>
                    <p className="label">Data de Expiração</p>
                    <p>{data.expirationDate}</p>
                </li>
                <li>
                    <p className="label">Senha</p>
                    <p>{data.password}</p>
                </li>
                <li>
                    <p className="label">Virtual</p>
                    <p>{data.isVirtual}</p>
                </li>
                <li>
                    <p className="label">Tipo</p>
                    <p>{data.type}</p>
                </li>
            </ul>
            <footer>
            <Link to="/home">
                <p className="back">{"<"} voltar</p>
            </Link>
            <div onClick={()=>deleteItem()} className="delete">x</div>
            </footer>
        </ContainerPassword>
        </>
        
    )
}