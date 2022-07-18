import { Header } from "../header/Header";
import { Link, useNavigate } from "react-router-dom"


import card from "../../images/card.png"
import credential from "../../images/credential.png"
import note from "../../images/note.png"
import wifi from "../../images/wifi.png"
import { Containerhome } from "./ContainerHome";

export function Home(){
    return(
        <>
        <Header reference="Minhas senhas"/>
        <Containerhome>
            <Link to="/credentials">
                <section className="typePass">
                    <img src={credential}/>
                    <h1>Credenciais</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/notes">
                <section className="typePass">
                    <img  src={note}/>
                    <h1>Notas seguras</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/cards">
                <section className="typePass">
                    <img  src={card}/>
                    <h1>Cartões</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/wifi">
                <section classname="typePass">
                    <img  src={wifi}/>
                    <h1>Senhas de wifi</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/insert">
                <div className="insert">+</div>
            </Link>

        </Containerhome>
        </>
    )
}

