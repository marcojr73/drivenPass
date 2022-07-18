import styled from "styled-components"

import padlock from "../../images/lock.png"
import backdoor from "../../images/backdoor.png"

export function Header({reference}){
    return(
        <ContainerHeader>
            <section className="headerTop">
                <img src={padlock}/>
                <h1>DrivenPass</h1>
                <img src={backdoor}/>
            </section>
            
            <section className="headerBot">
                <h2>{reference}</h2>
            </section>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;

    .headerTop{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 87px;
    }

    h1{
        font-family: 'Righteous';
        font-size: 36px;
        color: #005985;
    }

    .headerBot{
        height: 35px;
        background: #005985;
        display: flex;
        align-items: center;
    }

    h2{
        font-family: 'Recursive';
        color: #FFFFFF;
        font-size: 18px;
        margin-left: 16px
    }

    img {
        width: 45px;
        height: 45px;
    }
`