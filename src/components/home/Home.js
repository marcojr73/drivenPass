import styled from "styled-components";
import { Header } from "../header/Header";

import card from "../../images/card.png"
import credential from "../../images/credential.png"
import note from "../../images/note.png"
import wifi from "../../images/wifi.png"

export function Home(){
    return(
        <>
        <Header reference="Minhas senhas"/>
        <Containerhome>
            <section className="typePass">
                <img src={credential}/>
                <h1>Credenciais</h1>
            </section>
                <div className="circle"></div>

            <section className="typePass">
                <img  src={note}/>
                <h1>Notas seguras</h1>
            </section>
                <div className="circle"></div>

            <section className="typePass">
                <img  src={card}/>
                <h1>Cartões</h1>
            </section>
                <div className="circle"></div>

            <section className="typePass">
                <img  src={wifi}/>
                <h1>Senhas de wifi</h1>
            </section>
                <div className="circle"></div>
        </Containerhome>
        </>
    )
}

const Containerhome = styled.main`

    display: flex;
    flex-direction: column;
    margin-top:30px;

    
    .typePass{
        display: flex;
        margin-left: 30px;
        align-items: center;
        height: 47px;
        margin-top: 10px;
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


`