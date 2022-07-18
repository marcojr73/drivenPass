import styled from "styled-components"

export const Containerhome = styled.main`

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