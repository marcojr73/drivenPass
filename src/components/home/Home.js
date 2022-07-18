import styled from "styled-components";
import { Header } from "../header/Header";
import { Link, useNavigate } from "react-router-dom"


import card from "../../images/card.png"
import credential from "../../images/credential.png"
import note from "../../images/note.png"
import wifi from "../../images/wifi.png"

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

const Containerhome = styled.main`

    display: flex;
    flex-direction: column;
    margin-top: 10px;

    
    .typePass{
        display: flex;
        margin-left: 30px;
        align-items: center;
        height: 47px;
        margin-top: 30px;
    }
    
    .circle{
        background: #005985;
        width: 25px;
        border-radius: 50%;
    }
    
    img{
        width: 45px;
    }
    
    h1{
        font-family: 'Recursive';
        font-size: 18px;
        margin-left: 50px;
    }

    a{
        text-decoration: none;
        color: #222222;
    }

    .insert{
        background: #005985;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        bottom: 4%;
        right: 8%;
        font-size: 80px;
        color: #FFFFFF;
    }


`